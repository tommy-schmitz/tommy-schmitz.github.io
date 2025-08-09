function reinterpret_cast(value) {
    return value;
}
// This function make_stable_string() is (decently well) optimized for performance. Instead of readability.
const make_stable_string = (json_value) => {
    const state = ['done', json_value, 'json'];
    const sort_buffer = [];
    let result = '';
    for (;;) {
        const top = state.pop();
        if (top === 'json') {
            const top2 = state.pop();
            if (Array.isArray(top2)) {
                state.push(']', 'text');
                for (let i = 0; i < top2.length; ++i) {
                    const v2 = top2[top2.length - 1 - i];
                    if (i > 0)
                        state.push(',', 'text');
                    state.push(v2, 'json');
                }
            }
            else if (top2 === null) {
                result += 'null';
            }
            else if (typeof top2 === 'object') {
                state.push('}', 'text');
                for (const key in top2)
                    sort_buffer.push(key);
                sort_buffer.sort();
                const original_length = sort_buffer.length;
                while (sort_buffer.length > 0) {
                    const key = sort_buffer.pop();
                    const v2 = (top2)[key];
                    if (sort_buffer.length !== original_length - 1)
                        state.push(',', 'text');
                    state.push(v2, 'json', `${JSON.stringify(key)}:`, 'text');
                }
                state.push('{', 'text');
            }
            else {
                result += JSON.stringify(top2);
            }
        }
        else if (top === 'text') {
            result += state.pop();
        }
        else if (top === 'done') {
            break;
        }
        else {
            console.log(top);
            throw new Error('assertion failed');
        }
    }
    return result;
};
const make_lock = () => {
    let lock_state = 'available';
    const client_works = [];
    const spawn_server = async () => {
        while (client_works.length > 0 && lock_state === 'available') {
            const client_work = client_works.shift();
            if (client_work === undefined) // Reassure Typescript
                throw new Error('unexpected condition r72029QdIXTV3pSiAtJa');
            lock_state = 'unavailable';
            try {
                await client_work.execute();
            }
            finally {
                lock_state = 'available';
            }
        }
    };
    function with_lock(do_work) {
        const promise = new Promise((resolve, reject) => {
            client_works.push({ execute: async () => {
                    try {
                        resolve(await do_work());
                    }
                    catch (e) {
                        reject(e);
                    }
                } });
        });
        spawn_server();
        return promise;
    }
    return with_lock;
};
function make_state(initial_value) {
    if (typeof initial_value === 'function')
        throw new Error('initial_value should not be a function');
    let state = initial_value;
    const get_state = () => {
        return state;
    };
    const set_state = (arg) => {
        if (typeof arg === 'function') {
            const arg_ = arg;
            state = arg_(state);
        }
        else {
            state = arg;
        }
    };
    return [get_state, set_state];
}
const JSON_equal = (x1, x2) => {
    const is_array_1 = Array.isArray(x1);
    const is_array_2 = Array.isArray(x2);
    if (is_array_1 && is_array_2) {
        if (x1.length !== x2.length)
            return false;
        for (let i = 0; i < x1.length; ++i)
            if (!JSON_equal(x1[i], x2[i]))
                return false;
        return true;
    }
    if (is_array_1 || is_array_2)
        return false;
    if ((x1 === null) && (x2 === null))
        return true;
    if ((x1 === null) || (x2 === null))
        return false;
    if (typeof x1 === 'object' && typeof x2 === 'object') {
        for (const key in x1)
            if (!JSON_equal(x1[key], x2[key]))
                return false;
        for (const key in x2)
            if (!JSON_equal(x1[key], x2[key]))
                return false;
        return true;
    }
    if ((typeof x1 === 'object') || (typeof x2 === 'object'))
        return false;
    return x1 === x2;
};
function assign_or_delete(record, key, value) {
    if (value !== undefined) {
        return { ...record, [key]: value };
    }
    else {
        const { [key]: _, ...smaller_record } = record;
        return smaller_record;
    }
}
const TRIVIAL_DIFF = {};
const JSON_diff_helper = (x1, x2) => {
    const is_array_1 = Array.isArray(x1);
    const is_array_2 = Array.isArray(x2);
    if (is_array_1 && is_array_2) {
        let is_trivial = true;
        let result_remove = { length: x1.length };
        let result_add = { length: x2.length };
        const max_iterations = Math.max(x1.length, x2.length);
        for (let i = 0; i < max_iterations; ++i) {
            if (i >= x1.length) {
                is_trivial = false;
                result_add = { ...result_add, [i + '']: x2[i] };
            }
            else if (i >= x2.length) {
                is_trivial = false;
                result_remove = { ...result_remove, [i + '']: x1[i] };
            }
            else {
                const { remove: recursed_remove, add: recursed_add } = JSON_diff_helper(x1[i], x2[i]);
                if (recursed_remove !== undefined || recursed_add !== undefined)
                    is_trivial = false;
                result_remove = assign_or_delete(result_remove, i + '', recursed_remove);
                result_add = assign_or_delete(result_add, i + '', recursed_add);
            }
        }
        if (is_trivial) {
            return TRIVIAL_DIFF;
        }
        else {
            return { remove: reinterpret_cast(result_remove), add: reinterpret_cast(result_add) };
        }
    }
    if (is_array_2)
        return { remove: x1, add: x2 };
    if ((x1 === null) && (x2 === null))
        return TRIVIAL_DIFF;
    if (x2 === null)
        return { remove: x1, add: x2 };
    if (typeof x2 === 'object') {
        if (!Array.isArray(x1) && x1 !== null && typeof x1 === 'object') {
            let is_trivial = true;
            let result_remove = {};
            let result_add = {};
            const check_key = (key) => {
                if (x1[key] === undefined && x2[key] !== undefined) {
                    is_trivial = false;
                    result_add = { ...result_add, [key]: x2[key] };
                }
                else if (x2[key] === undefined && x1[key] !== undefined) {
                    is_trivial = false;
                    result_remove = { ...result_remove, [key]: x1[key] };
                }
                else if (x1[key] === undefined && x2[key] === undefined) ;
                else {
                    const { remove: recursed_remove, add: recursed_add } = JSON_diff_helper(x1[key], x2[key]);
                    if (recursed_remove !== undefined || recursed_add !== undefined)
                        is_trivial = false;
                    result_remove = assign_or_delete(result_remove, key, recursed_remove);
                    result_add = assign_or_delete(result_add, key, recursed_add);
                }
            };
            // Iterate the union of keys of x1 and keys of x2:
            let checked_keys = new Set();
            for (const key in x1) {
                checked_keys.add(key);
                check_key(key);
            }
            for (const key in x2) {
                if (!checked_keys.has(key))
                    check_key(key);
            }
            if (is_trivial) {
                return TRIVIAL_DIFF;
            }
            else {
                return { remove: reinterpret_cast(result_remove), add: reinterpret_cast(result_add) };
            }
        }
        else {
            return { remove: x1, add: x2 };
        }
    }
    if (x1 === x2)
        return TRIVIAL_DIFF;
    return { remove: x1, add: x2 };
};
const JSON_patch_helper_remove = (x1, remove, add) => {
    //console.log('tommy 1', {x1, remove, add});
    const result = (() => {
        if (remove === undefined)
            return x1;
        if (Array.isArray(remove)) {
            if (!JSON_equal(x1, remove))
                throw new Error('cannot patch: does not apply yrA4DJKwyie1WCEk5gPH');
            return undefined;
        }
        if (remove === null) {
            if (x1 !== null)
                throw new Error('cannot patch: does not apply yYmuVkaqLztVRTIA9VBB');
            return undefined;
        }
        if (typeof remove === 'object') {
            if (Array.isArray(x1)) {
                if (!Array.isArray(add) && add !== null && typeof add === 'object') {
                    const result = x1.map((element_1, i) => {
                        return JSON_patch_helper_remove(element_1, remove[i + ''], add[i + '']);
                    });
                    return reinterpret_cast(result);
                }
                else {
                    throw new Error('unexpected condition 2shPN3BSB0o4W6sv9iqu');
                }
            }
            else if (x1 === null) {
                throw new Error('cannot patch: does not apply smJNmw2YDrjbYMUxqs8s');
            }
            else if (typeof x1 === 'object') {
                if (!Array.isArray(add) && add !== null && typeof add === 'object') {
                    let result = x1;
                    for (const key in remove) {
                        const recursive_value = JSON_patch_helper_remove(x1[key], remove[key], add[key]);
                        if (recursive_value !== undefined) {
                            result = { ...result, [key]: recursive_value };
                        }
                        else {
                            const { [key]: _, ...smaller_result } = result;
                            result = smaller_result;
                        }
                    }
                    return reinterpret_cast(result);
                }
                else {
                    if (!JSON_equal(x1, remove))
                        throw new Error('unexpected condition 1XPQ3srmASMUMuBhYjoh');
                    return undefined;
                }
            }
            else {
                throw new Error('cannot patch: does not apply z3jKZxbBaBOKe7Q8rLme');
            }
        }
        if (remove === x1)
            return undefined;
        throw new Error('cannot patch: does not apply U4jW8xDkL6fbhl7Hexxq');
    })();
    //console.log('tommy 2', {x1, remove, add, result});
    return result;
};
const JSON_patch_helper_add = (x1, remove, add) => {
    //console.log('tommy 3', {x1, remove, add});
    const result = (() => {
        if (add === undefined) {
            if (x1 === undefined)
                throw new Error('unexpected condition XdVQkZ0FS7V3tdBZNUAs');
            return x1;
        }
        if (Array.isArray(add)) {
            if (x1 === undefined) {
                return add;
            }
            else {
                throw new Error('unexpected condition D5ykPqgpfrA6gGvFy06i');
            }
        }
        if (add === null) {
            if (x1 === undefined) {
                return add;
            }
            else {
                throw new Error('unexpected condition fSJTuTGuOScPTNT5gkWS');
            }
        }
        if (typeof add === 'object') {
            if (Array.isArray(x1)) {
                if (!Array.isArray(remove) && remove !== null && typeof remove === 'object') {
                    let result = x1;
                    for (const key in add) {
                        if (key === 'length')
                            continue;
                        const i = parseInt(key);
                        if (Number.isNaN(i))
                            throw new Error('cannot patch: does not apply h4X4t3p00DhMtO9EkpPm');
                        result = [...result];
                        result[i] = reinterpret_cast(JSON_patch_helper_add(result[i], remove[i], add[i]));
                    }
                    if (typeof add.length !== 'number')
                        throw new Error('unexpected condition 5a5j50UC1hYjMzWfWCn4');
                    result = result.slice(0, add.length);
                    return result;
                }
                else {
                    throw new Error('unexpected condition pnMtqjKd9SWOz4KIPKfl');
                }
            }
            else if (x1 === null) {
                throw new Error('cannot patch: does not apply MHYAld3ghA2LeLEXcTb1');
            }
            else if (typeof x1 === 'object') {
                if (!Array.isArray(remove) && remove !== null && typeof remove === 'object') {
                    let result = x1;
                    for (const key in add) {
                        result = { ...result, [key]: JSON_patch_helper_add(x1[key], remove[key], add[key]) };
                    }
                    return result;
                }
                else {
                    throw new Error('unexpected condition u4Ie16cQ41jmCHJo34Ma');
                }
            }
            else if (x1 === undefined) {
                return add;
            }
            else {
                throw new Error('cannot patch: does not apply 0y369pEE1vAqwigRChki');
            }
        }
        if (x1 === undefined)
            return add;
        console.log('(iqnLjCszNAnJGZT1hlKc)', JSON.stringify({ x1, add, remove }, null, 2));
        throw new Error('cannot patch: does not apply iqnLjCszNAnJGZT1hlKc');
    })();
    //console.log('tommy 4', {x1, remove, add, result});
    return result;
};
const JSON_patch = (x1, diff) => {
    return JSON_patch_helper_add(JSON_patch_helper_remove(x1, diff.remove, diff.add), diff.remove, diff.add);
};
const JSON_diff = (x1, x2) => {
    const result = JSON_diff_helper(x1, x2);
    try {
        if (!JSON_equal(JSON_patch(x1, result), x2)) {
            console.log('(oYooX8clG54oHTAOJUG4)', JSON.stringify({ x4: JSON_patch(x1, result) }, null, 2));
            throw new Error('contract failure oYooX8clG54oHTAOJUG4');
        }
        if (!JSON_equal(JSON_patch(x2, { remove: result.add, add: result.remove }), x1)) {
            console.log('(hMnIG8WJiffOFLVLFlsY)', JSON.stringify({ x3: JSON_patch(x2, { remove: result.add, add: result.remove }) }, null, 2));
            throw new Error('unexpected condition hMnIG8WJiffOFLVLFlsY');
        }
    }
    catch (e) {
        console.log('(DmsqceSnhGGF9I0Z31kR)', JSON.stringify({ x1, x2, result }, null, 2));
        throw e;
    }
    return result;
};
const JSON_helper_intersection = (x1, remove, add) => {
    //console.log('tommy 1', {x1, remove, add});
    const result = (() => {
        if (remove === undefined)
            return x1;
        if (Array.isArray(remove)) {
            if (!JSON_equal(x1, remove))
                throw new Error('cannot patch: does not apply yrA4DJKwyie1WCEk5gPH');
            return undefined;
        }
        if (remove === null) {
            if (x1 !== null)
                throw new Error('cannot patch: does not apply yYmuVkaqLztVRTIA9VBB');
            return undefined;
        }
        if (typeof remove === 'object') {
            if (Array.isArray(x1)) {
                if (!Array.isArray(add) && add !== null && typeof add === 'object') {
                    const result = Object.fromEntries(x1.flatMap((element_1, i) => {
                        const v = JSON_helper_intersection(element_1, remove[i + ''], add[i + '']);
                        if(v === undefined)
                          return [];
                        else
                          return [[i, v]];
                    }));
                    return reinterpret_cast(result);
                }
                else {
                    throw new Error('unexpected condition 2shPN3BSB0o4W6sv9iqu');
                }
            }
            else if (x1 === null) {
                throw new Error('cannot patch: does not apply smJNmw2YDrjbYMUxqs8s');
            }
            else if (typeof x1 === 'object') {
                if (!Array.isArray(add) && add !== null && typeof add === 'object') {
                    let result = x1;
                    for (const key in remove) {
                        const recursive_value = JSON_helper_intersection(x1[key], remove[key], add[key]);
                        if (recursive_value !== undefined) {
                            result = { ...result, [key]: recursive_value };
                        }
                        else {
                            const { [key]: _, ...smaller_result } = result;
                            result = smaller_result;
                        }
                    }
                    return reinterpret_cast(result);
                }
                else {
                    if (!JSON_equal(x1, remove))
                        throw new Error('unexpected condition 1XPQ3srmASMUMuBhYjoh');
                    return undefined;
                }
            }
            else {
                throw new Error('cannot patch: does not apply z3jKZxbBaBOKe7Q8rLme');
            }
        }
        if (remove === x1)
            return undefined;
        throw new Error('cannot patch: does not apply U4jW8xDkL6fbhl7Hexxq');
    })();
    //console.log('tommy 2', {x1, remove, add, result});
    return result;
};
const JSON_intersection = (x1, x2) => {
    const diff = JSON_diff(x1, x2);
    return JSON_helper_intersection(x1, diff.remove, diff.add);
};

//{
//    return JSON_patch();
//    try {
//        if (!JSON_equal(JSON_patch(x1, result), x2)) {
//            console.log('(oYooX8clG54oHTAOJUG4)', JSON.stringify({ x4: JSON_patch(x1, result) }, null, 2));
//            throw new Error('contract failure oYooX8clG54oHTAOJUG4');
//        }
//        if (!JSON_equal(JSON_patch(x2, { remove: result.add, add: result.remove }), x1)) {
//            console.log('(hMnIG8WJiffOFLVLFlsY)', JSON.stringify({ x3: JSON_patch(x2, { remove: result.add, add: result.remove }) }, null, 2));
//            throw new Error('unexpected condition hMnIG8WJiffOFLVLFlsY');
//        }
//    }
//    catch (e) {
//        console.log('(DmsqceSnhGGF9I0Z31kR)', JSON.stringify({ x1, x2, result }, null, 2));
//        throw e;
//    }
//    return result;
//};


//const JSON_intersection = (x1, x2) => {
//    const diff = JSON_diff(x1, x2);
//    const result = {};
//
//    // Handle arrays and objects uniformly by keys
//    const keys = new Set([
//        ...Object.keys(x1),
//        ...Object.keys(x2)
//    ]);
//
//    for (const key of keys) {
//        // If this key is removed in x1, skip
//        if (diff.remove && diff.remove.hasOwnProperty(key)) {
//            continue;
//        }
//
//        // If this key is not added back (i.e., not in x2), skip
//        if (!x2 || !x2.hasOwnProperty(key)) {
//            continue;
//        }
//
//        const val1 = x1[key];
//        const val2 = x2[key];
//
//        // If both are objects (and not null/arrays), recurse
//        if (typeof val1 === 'object' && val1 !== null &&
//            typeof val2 === 'object' && val2 !== null &&
//            !Array.isArray(val1) && !Array.isArray(val2)) {
//            result[key] = JSON_intersection(val1, val2);
//        }
//        // If both are arrays, recurse
//        else if (Array.isArray(val1) && Array.isArray(val2)) {
//            result[key] = JSON_intersection(val1, val2);
//        }
//        // If both are primitives and equal, include
//        else if (val1 === val2) {
//            result[key] = val1;
//        }
//        // Otherwise (different primitives, or one missing), skip
//        // But note: if they’re unequal, the diff would have removed it — so this is safe
//    }
//
//    return result;
//};   



//const run_tests = () => {
//    JSON_diff({ hello: 'world', how: ['are', 'you'] }, { i: 'am', how: ['are', 'you', 'too'] });
//    JSON_diff([], [{ x: 1, y: 2 }]); // {remove: {length: 0}, add: {length: 1, 0: {x:1,y:2}}}
//    JSON_diff(null, { x: 1 }); // {remove: null,        add: {x:1}}
//    JSON_diff({}, { x: 1 }); // {remove: {},          add: {x:1}}
//    JSON_diff({ y: 2 }, { x: { x: 1 } }); // {remove: {y:2},       add: {x:{x:1}}}
//};
//{x:2,y:{x:1,y:2}}

//run_tests();
