import {ChangeEvent, FunctionComponent, useRef, useState, useEffect, useCallback} from 'react';

type JsonHelper<T> = Record<string,T>|Array<T>|string|number|boolean|null;
export type Json = JsonHelper<JsonHelper<JsonHelper<any>>>;  // Hey, three levels is better than none, right?

type JsonPath = Array<string|number>;

export type Setter<T> = (x:/*T|*/((x:T)=>T))=>void;

export const sleep = (millis:number) => (new Promise((resolve) => (setTimeout(resolve, millis))));

export const is_NaN = (n:number) => {
  return n !== n;
};

export const use_random = () => {
  const ref = useRef<number>(Math.random());
  return ref.current;
};

export const modulo = (x1:number, x2:number) => {
  if(x1 < 0)
    return x2-(-x1 % x2);
  else
    return x1 % x2;
};

// Notes about use_timeout:
//   * If compute_delay() returns null, then setTimeout will not be called after all.
//   * If one of the deps changes before the timer has fired, then the timer will be reset.
export const use_timeout = ({compute_delay, callback}:{compute_delay:()=>number|null, callback:()=>void}, deps:undefined|Array<unknown>) => {
  useEffect(() => {
    const delay = compute_delay();

    if(delay === null)
      return;

    const timeout_id = setTimeout(callback, delay);

    // Cleaner-upper:
    return () => {
      clearTimeout(timeout_id);
    };
  }, deps);
};

// Notes about use_interval:
//   * If compute_wavelength() returns null, then setTimeout will not be called after all.
//   * If one of the deps changes, then the timer will be reset.
export const use_interval = ({compute_phase_shift, compute_wavelength, callback}:{compute_wavelength:()=>(number|null),compute_phase_shift:()=>number, callback:()=>void}, deps:undefined|Array<unknown>) => {
  useEffect(() => {
    const wavelength = compute_wavelength();

    if(wavelength === null)
      return;

    const phase_shift = compute_phase_shift();

    const helper = () => {
      timeout_id = setTimeout(helper, wavelength);
      callback();
    };
    let timeout_id = setTimeout(helper, phase_shift);

    // Cleaner-upper:
    return () => {
      clearTimeout(timeout_id);
    };
  }, deps);
};

export const half_open_interval = (x1:number, x2:number, step:number = 1 ):Array<number> => {
  const result = [];
  for(let i=x1; i<x2; i+=step)
    result.push(i);
  return result;
};

export const inclusive_interval = (x1:number, x2:number, step:number = 1 ):Array<number> => {
  const result = [];
  for(let i=x1; i<=x2; i+=step)
    result.push(i);
  return result;
};

export const use_force_update = () => {
  const [/*state*/, set_state] = useState(0);
  return useCallback(() => {
    set_state((state) => (state + 1));
  }, []);
};

// This does the same thing as useMemo(), but useMemo is technically allowed to "forget" old values.
// This custom hook is guaranteed to only rerun when its dependencies change.
export function use_memo_guaranteed<T>(f:()=>T, deps:undefined|Array<unknown>):T {
  const nothing = Symbol('nothing');

  const ref = useRef({
    memo: nothing as T|typeof nothing,
    previous_deps: null as Array<unknown>|null,
  });

  let should_run = false;
  if(ref.current.previous_deps === null  ||  deps === undefined) {
    should_run = true;
  } else {
    for(let i=0; i<deps.length; ++i) {
      if(deps[i] !== ref.current.previous_deps[i]) {
        should_run = true;
        break;
      }
    }
  }

  if(deps !== undefined)
    ref.current.previous_deps = [...deps];

  if(should_run)
    ref.current.memo = f();

  if(ref.current.memo === nothing)
    throw new Error('assertion failed');

  return ref.current.memo;
};

// This custom hook is just like useState, but ...
// When the deps change, the state is reinitialized to the (new) initial_value.
export function use_state_with_deps<T>(initial_value:T, deps:Array<unknown>|undefined) {
  const force_update = use_force_update();

  const ref = useRef({
    state: initial_value,
    previous_deps: null as null|Array<unknown>,
  });

  let deps_changed = false;
  if(ref.current.previous_deps === null  ||  deps === undefined) {
    deps_changed = true;
  } else {
    for(let i=0; i<deps.length; ++i) {
      if(deps[i] !== ref.current.previous_deps[i]) {
        deps_changed = true;
        break;
      }
    }
  }

  if(deps !== undefined)
    ref.current.previous_deps = [...deps];

  const first_result = (() => {
    if(deps_changed)
      return initial_value;
    else
      return ref.current.state;
  })();

  ref.current.state = first_result;

  const second_result = useCallback((f:(T|((x:T)=>T))) => {
    if(typeof f === 'function')
      ref.current.state = (f as any)(ref.current.state);
    else
      ref.current.state = f;
    force_update();
  }, []);

  return [first_result, second_result] as const;
};

// lookup_path():
//   Example:  lookup_path(x, ["foo", 42, "bar"])  returns  x["foo"][42]["bar"]
//   Argument `top_value` should be a JSON-ish value.
//   Argument `path` should be an Array<string|number>.
export const lookup_path = (top_value:Json, path:JsonPath):Json => {
  let result:Json = top_value;
  for(const fragment of path) {
    result = (() => {
      if(Array.isArray(result)  &&  typeof fragment === 'number')
        return result[fragment];
      if(!Array.isArray(result)  &&  typeof result === 'object'  &&  result !== null  &&  typeof fragment === 'string')
        return result[fragment];
      throw new Error('failed to drill into the specified path, in lookup_path()');
    })();
  }
  return result;
};

// change_descendent():
//   Example:  change_descendent({foo: [42, 43, 44], bar: {baz: "quuz"}}, ["foo", 1], 17)
//                      returns  {foo: [42, 17, 44], bar: {baz: "quux"}}
//   Argument `top_value` should be a JSON-ish value.
//   Argument `path` should be an Array<string|number>.
//   Argument `new_value` can be anything, I guess!
export function change_descendent(top_value:Json, path:JsonPath, new_value:any):Json {
  const old_values : Array<any> = [];
  let temp : any = top_value;
  for(const fragment of path) {
    const okay = (() => {
      if(Array.isArray(temp)  &&  typeof fragment === 'number')
        return true;
      if(typeof temp === 'object'  &&  temp !== null  &&  typeof fragment === 'string')
        return true;
      return false;
    })();
    if(!okay)
      throw new Error('failed to drill into the specified path, in change_descendent()');

    old_values.push(temp);
    temp = temp[fragment];
  }

  temp = new_value;
  for(let i=path.length-1; i>=0; --i) {
    const old = old_values[i];
    const fragment = path[i];
    if(typeof fragment === 'string') {
      temp = {...old, [fragment]: temp};
    } else if(typeof fragment === 'number') {
      temp = [...old.slice(0, fragment), temp, ...old.slice(fragment+1)];
    } else {
      throw new Error('assertion failed');
    }
  }

  return temp;
};

export function array_delete<T>(array:Array<T>, index:number):Array<T> {
  return [...array.slice(0, index), ...array.slice(index + 1)];
}

export function move_array_element<T>(array : Array<T>, i : number, j : number) : Array<T> {
  if(i === j  ||  i === j-1) {
    return array;
  } else if(i < j) {
    return [...array.slice(0, i), ...array.slice(i+1, j), array[i], ...array.slice(j)];
  } else {
    return [...array.slice(0, j), array[i], ...array.slice(j, i), ...array.slice(i+1)];
  }
}

export function array_insert<T>(array : Array<T>, i : number, value : T) : Array<T> {
  return [...array.slice(0, i), value, ...array.slice(i)];
}

export function use_previous<T>(value:T) {
  const ref = useRef<symbol|T>(Symbol('NO_PREVIOUS_VALUE'));
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current as (symbol|T);
}

export function use_prop_getter<T>(prop_value:T) {
  const ref = useRef({
    prop_value,
    getter: () => (ref.current.prop_value),
  });
  useEffect(() => {
    ref.current.prop_value = prop_value;
  }, [prop_value]);
  return ref.current.getter;
};

export const TT = (props:{}) => <span style={{fontFamily: 'monospace'}} {...props} />;

export function Dropdown<OptionString>(props : Record<string,any> & {
        set_value : Setter<OptionString>;
        onChange? : never;
      }) {
  if('onChange' in props)
    throw new Error('please use set_value instead');
  const {set_value} = props;
  const dom_props = {...props};
  delete (dom_props as any).set_value;
  const helper = useCallback((ev:ChangeEvent<HTMLSelectElement>) => {set_value((v) => (ev.target.value as any));}, [set_value]);
  return (
    <select style={{height: '25px', verticalAlign: 'top'}} {...dom_props} onChange={helper} />
  );
};

export const Input : FunctionComponent<Record<string,any> & {
        value : string;
        set_value : Setter<string>;
      }> = (props) => {
  const dom_props = {...props};
  delete (dom_props as any).set_value;
  return <input style={{width: '150px', height: '25px'}} onChange={(ev) => {
    props.set_value((old) => (ev.target.value));
  }} {...dom_props} />;
};
export const MyTextarea : FunctionComponent<Record<string,any> & {
        value : string;
        set_value : Setter<string>;
        vertical_adjustment? : number;
      }> = (props) => {
  if('onChange' in props)
    throw new Error('please use set_value instead');

  const {set_value, vertical_adjustment, style} = props;
  const helper = useCallback((ev:ChangeEvent<HTMLTextAreaElement>) => {set_value((v) => (ev.target.value));}, [set_value]);
  const len = ((vertical_adjustment !== undefined) ? vertical_adjustment+'px' : '5px');
  const additional_styles = ((props.style !== undefined) ? props.style : {});

  const dom_props = {...props};
  delete (dom_props as any).set_value;
  delete (dom_props as any).vertical_adjustment;
  delete (dom_props as any).style;

  return <span style={{display: 'inline-block', paddingTop: len}}>
    <textarea
      style={{
        height: '25px',
        width: '150px',
        verticalAlign: 'text-top',
        marginTop: '-' + len,
        ...additional_styles,
      }}
      {...dom_props}
      onChange={helper}
    />
  </span>;
};

// This function JSON_prettify() is (decently well) optimized for performance. Instead of readability.
export const JSON_prettify = (json_value:Json) => {
  type Command = 'json'|'text'|'decrement indent level'|'indent'|'increment indent level'|'done';

  let indent_level = 0;
  const state = ['done', json_value, 'json'];
  const reverser = [];
  let result = '';
  for(;;) {
    const top:Command = state.pop() as any;
    if(top === 'json') {
      const top2:Json = state.pop() as any;
      if(Array.isArray(top2)) {
        state.push(']', 'text', 'indent', 'decrement indent level');
        for(let i=0; i<top2.length; ++i) {
          const v2 = top2[top2.length - 1 - i];
          if(i > 0)
            state.push(',\n');
          else
            state.push('\n');
          state.push('text', v2, 'json', 'indent');
        }
        state.push('[\n', 'text', 'increment indent level');
      } else if(top2 === null) {
        result += 'null';
      } else if(typeof top2 === 'object') {
        state.push('}', 'text', 'indent', 'decrement indent level');
        for(const key in top2)
          reverser.push(key);
        const original_length = reverser.length;
        while(reverser.length > 0) {
          const key = reverser.pop()!;
          const v2 = (top2)[key];
          if(reverser.length === original_length-1)
            state.push('\n');
          else
            state.push(',\n');
          state.push('text', v2, 'json', `${JSON.stringify(key)}: `, 'text', 'indent');
        }
        state.push('{\n', 'text', 'increment indent level');
      } else {
        result += JSON.stringify(top2);
      }
    } else if(top === 'text') {
      result += state.pop();
    } else if(top === 'decrement indent level') {
      --indent_level;
    } else if(top === 'indent') {
      for(let i=0; i<indent_level; ++i)
        result += '  ';
    } else if(top === 'increment indent level') {
      ++indent_level;
    } else if(top === 'done') {
      break;
    } else {
      const unreachable : never = top;
      console.log(top);
      throw new Error('assertion failed');
    }
  }
  return result;
};

export const JSON_equal = (x1:Json, x2:Json):boolean => {
  if(Array.isArray(x1)) {
    if(!Array.isArray(x2))
      return false;
    if(x1.length !== x2.length)
      return false;
    for(let i=0; i<x1.length; ++i)
      if(!JSON_equal(x1[i], x2[i]))
        return false;
  } else if(x1 === null) {
    if(x2 !== null)
      return false;
  } else if(typeof x1 === 'object') {
    if(Array.isArray(x2)  ||  x2 === null  ||  typeof x2 !== 'object')
      return false;
    const keys_1 = Object.keys(x1);
    const keys_2 = Object.keys(x2);
    if(keys_1.length !== keys_2.length)
      return false;
    for(let i=0; i<keys_1.length; ++i)
      if(!JSON_equal(x1[keys_1[i]], x2[keys_1[i]]))
        return false;
  } else {
    return x1 === x2;
  }
  return true;
};

export const use_body_overflow_hidden = (() => {
  // This `count` variable is useful just in case multiple components try to set `body {overflow: hidden}` at once.
  // The count is the number of components that currently want `body {overflow: hidden}`.
  // When the count is zero, then it is safe to set `body {overflow: }`.
  // When the count is greater than zero, then we shall set `body {overflow: hidden}`.
  let count = 0;

  const actual_hook = (hidden : boolean) => {
    useEffect(() => {
      if(!hidden)
        return undefined;

      ++count;
      if(count === 1)
        document.body.style.overflow = 'hidden';

      // Cleaner-upper:
      return () => {
        --count;
        if(count === 0)
          document.body.style.overflow = '';
      };
    });
  };

  return actual_hook;
})();

export const PossiblyDisableTouch = ({allow_touch, message, children, style} : {
        allow_touch : boolean;
        message : string;
        children : JSX.Element | null | string | Array<JSX.Element | null | string>;
        style? : Record<string,string>;
      }) => {
  const [is_showing_message_about_touch_being_disabled, set_is_showing_message_about_touch_being_disabled] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement|null>(null);

  useEffect(() => {
    const div = ref.current;
    if(div === null)
      throw new Error('expecting HTMLDivElement instead of null in component "TouchIsDisabled"');

    if(!allow_touch) {
      const listener_touchstart = (ev:TouchEvent) => {
        set_is_showing_message_about_touch_being_disabled(true);
        ev.stopPropagation();
      };

      const listener_touchend = (ev:TouchEvent) => {
        ev.preventDefault();
      };

      div.addEventListener('touchstart', listener_touchstart, true);
      div.addEventListener('touchend', listener_touchend, true);

      // Cleaner-upper:
      return () => {
        div.removeEventListener('touchend', listener_touchend, true);
        div.removeEventListener('touchstart', listener_touchstart, true);
      };
    } else {
      return;  // No cleaner-upper required in this case.
    }
  }, [allow_touch]);

  use_timeout({
    compute_delay: () => (2000),  // millis
    callback: () => {
      set_is_showing_message_about_touch_being_disabled(false);
    },
  }, [is_showing_message_about_touch_being_disabled]);

  return <>
    <div ref={ref} style={{display: 'inline-block', position: 'relative', height: '100%', width: '100%', ...style}}>
      {children}
      <div style={{
              position: 'absolute',
              inset: '0',
              transition: '0.5s',
              opacity: ((is_showing_message_about_touch_being_disabled) ? '100%' : '0'),
              backgroundColor: 'rgba(0,0,0,50%)',
              pointerEvents: 'none',
              overflow: 'hidden',
            }}>
        <div style={{
                position: 'absolute',
                left: '0',
                width: '100%',
                top: '50%',
                transform: 'translate(0, -50%)',
                color: 'white',
                textAlign: 'center',
                fontFamily: 'Nunito, sans-serif',
                fontSize: '32px',
              }}>
          {message}
        </div>
      </div>
    </div>
  </>;
};
