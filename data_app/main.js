//const initialize_simple_peer = async() => {
//  console.log('initializing "simple-peer"');
//
//  if(window.SimplePeer) {
//    console.warn('Skipping initializing "simple-peer". (Unexpectedly, it looks like "simple-peer" is already initialized.)');
//  } else {
//    const script = document.createElement('script');
//    const promise = new Promise((resolve, reject) => (script.onload = resolve));
//    script.src = "https://cdnjs.cloudflare.com/ajax/libs/simple-peer/9.11.1/simplepeer.min.js";
//    document.head.appendChild(script);
//    await promise;
//    console.log('initialized "simple-peer"');
//  }
//
//  return window.SimplePeer;
//};

const ENABLE_TIMESTAMP_REPLACEMENT = true;

const ENABLE_SIMULATION = false;

const sleep = (millis) => (new Promise((resolve, reject) => (setTimeout(resolve, millis))));

const time_now = (() => {
  if(ENABLE_TIMESTAMP_REPLACEMENT) {
    let counter = 1754700000000;
    return () => {
      const result = counter;
      counter += 100;
      return result;
    };
  } else {
    return () => (Date.now());
  }
})();

window.event_log_for_testing = [];

const record_for_testing = (stuff) => {
  const timestamp = Date.now();
  window.event_log_for_testing.push({...stuff, timestamp});
};

const harness = (() => {
  const transcript = transcript_for_testing;

  const simulator = {};

  const register = (item) => {
    for(const key in item)
      simulator[key] = item[key];
  };

  const simulate = async() => {
    for(const item of transcript) {
      if(item.device_id === 0) {
        if(item.type === 'on_change'  ||  item.type === 'handle_decrypted_message') {
          const now = transcript[0].timestamp - 4000 + performance.now();
          if(now < item.timestamp)
            await sleep(item.timestamp - now);
        }
        if(item.type === 'on_change') {
          simulator.on_change(item.change);
          simulator.set_textarea_value(item.change.new_value);
        }
        if(item.type === 'handle_decrypted_message')
          simulator.handle_decrypted_message(item);
      }
      console.log('Simulated ', item.type, item);
    }

    diff_transcripts(transcript, window.event_log_for_testing);
  };

  return {register, simulate, transcript};
})();

const suppress_timestamps = (transcript) => {
  return transcript.map(({timestamp, ...item}) => {
    return item;
  });
};

const diff_transcripts = (transcript_1 = transcript_for_testing, transcript_2_ = transcript_2) => {
  //console.log(JSON_diff([1,{x:1,y:2},3,4], [1,{x:1,y:3},2]));
  //console.log(JSON_intersection([1,{x:1,y:2},3,4], [1,{x:1,y:3},2]));
  //const transcript_1 = transcript_for_testing.filter((x) => (x.device_id !== 1));
  const t_1 = suppress_timestamps(transcript_1);
  const t_2 = suppress_timestamps(transcript_2_);
  console.log('diff', JSON_diff(t_1, t_2));
  console.log('intersection', JSON_intersection(t_1, t_2));
};
diff_transcripts();

const initialize_socket_io = async() => {
  console.log('initializing "socket.io"');

  if(window.io) {
    console.warn('Skipping initializing "socket.io". (Unexpectedly, it looks like "socket.io" is already initialized.)');
  } else {
    const script = document.createElement('script');
    const promise = new Promise((resolve, reject) => (script.onload = resolve));
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.6.1/socket.io.js";
    document.head.appendChild(script);
    await promise;
    console.log('initialized "socket.io"');
  }

  return window.io;
};

let real_notify = () => {};
const notify = (message) => {
  real_notify(message);
  return new Error(message);
};

const make_resolvable_promise = () => {
  let resolve = null;
  let reject = null;
  const promise = new Promise((resolve_, reject_) => {
    resolve = resolve_;
    reject = reject_;
  });
  return {promise, resolve, reject};
};

//// This function make_stable_string() is (decently well) optimized for performance. Instead of readability.
//const make_stable_string = (json_value) => {
//  let indent_level = 0;
//  const state = ['done', json_value, 'json'];
//  const reverser = [];
//  let result = '';
//  for(;;) {
//    const top = state.pop();
//    if(top === 'json') {
//      const top2 = state.pop();
//      if(Array.isArray(top2)) {
//        state.push(']', 'text', 'indent', 'decrement indent level');
//        for(let i=0; i<top2.length; ++i) {
//          const v2 = top2[top2.length - 1 - i];
//          if(i > 0)
//            state.push(',\n');
//          else
//            state.push('\n');
//          state.push('text', v2, 'json', 'indent');
//        }
//        state.push('[\n', 'text', 'increment indent level');
//      } else if(top2 === null) {
//        result += 'null';
//      } else if(typeof top2 === 'object') {
//        state.push('}', 'text', 'indent', 'decrement indent level');
//        for(const key of Object.keys(top2).sort())
//          reverser.push(key);
//        const original_length = reverser.length;
//        while(reverser.length > 0) {
//          const key = reverser.pop();
//          const v2 = (top2)[key];
//          if(reverser.length === original_length-1)
//            state.push('\n');
//          else
//            state.push(',\n');
//          state.push('text', v2, 'json', `${JSON.stringify(key)}: `, 'text', 'indent');
//        }
//        state.push('{\n', 'text', 'increment indent level');
//      } else {
//        result += JSON.stringify(top2);
//      }
//    } else if(top === 'text') {
//      result += state.pop();
//    } else if(top === 'decrement indent level') {
//      --indent_level;
//    } else if(top === 'indent') {
//      for(let i=0; i<indent_level; ++i)
//        result += '  ';
//    } else if(top === 'increment indent level') {
//      ++indent_level;
//    } else if(top === 'done') {
//      break;
//    } else {
//      const unreachable = top;
//      console.log(top);
//      throw new Error('assertion failed');
//    }
//  }
//  return result;
//};

const initialize_ui = async() => {
  await page_load_promise;

  document.body.innerHTML = '';
  document.body.style.fontFamily = 'sans-serif';
  const heading = document.createElement('h2');
  heading.innerText = 'Shared data app';
  document.body.appendChild(heading);
  const main_page_body = document.createElement('div');
  document.body.appendChild(main_page_body);
  return {main_page_body};
};

const RELAY_SERVER_URL = (() => {
//  return 'http://localhost:6003';

  return 'https://relay-server-13u9.onrender.com';

//  if(window.location.href.startsWith('file:///')) {
//    return 'http://localhost:6003';
//  } else if(window.location.hostname === 'localhost') {
//    return 'http://localhost:6003';
//  } else {
//    return 'https://relay-server-13u9.onrender.com';
//  }
})();

const get_master_keys = async(ui) => {
  const maybe_public_key = localStorage.getItem('master_public_key');
  const maybe_private_key = localStorage.getItem('master_private_key');
  if(maybe_public_key !== null  &&  maybe_private_key !== null) {
    return {
      master_public_key: await window.crypto.subtle.importKey('jwk', JSON.parse(maybe_public_key),
                                                              {name: "ECDSA", namedCurve: "P-384"}, true, ['verify']),
      master_private_key: await window.crypto.subtle.importKey('jwk', JSON.parse(maybe_private_key),
                                                               {name: "ECDSA", namedCurve: "P-384"}, true, ['sign']),
    };
  }

  ui.main_page_body.innerText = 'Click here to generate your cryptographic keys, which will be stored in your web browser: ';

  const generate_button = document.createElement('button');
  generate_button.innerText = 'GENERATE';
  const button_promise = new Promise((resolve, reject) => (generate_button.addEventListener('click', resolve)));
  ui.main_page_body.appendChild(generate_button);

  await button_promise;

  const keys = await window.crypto.subtle.generateKey({name: "ECDSA", namedCurve: "P-384"}, true, ['sign', 'verify']);
  localStorage.setItem('master_public_key', JSON.stringify(await window.crypto.subtle.exportKey('jwk', keys.publicKey)));
  localStorage.setItem('master_private_key', JSON.stringify(await window.crypto.subtle.exportKey('jwk', keys.privateKey)));
  return {master_private_key: keys.privateKey, master_public_key: keys.publicKey};
};

const export_public_key = async(public_key) => {
  return JSON.stringify(await window.crypto.subtle.exportKey('jwk', public_key));
};

const page_load_promise = new Promise((resolve, reject) => (window.addEventListener('load', resolve)));

const get_keys = async({ui, sock}) => {
  const {master_public_key, master_private_key} = await get_master_keys(ui);
  const public_jwk_string = await export_public_key(master_public_key);
  await sock.emit('the id is', public_jwk_string);

  const maybe_partner_key = localStorage.getItem('partner_key');
  if(maybe_partner_key !== null) {
    return {
      master_public_key,
      master_private_key,
      partner_key: await window.crypto.subtle.importKey('jwk', JSON.parse(maybe_partner_key),
                                                        {name: 'ECDSA', namedCurve: 'P-384'}, true, ['verify']),
    };
  }

  const readonly_textarea = document.createElement('textarea');
  readonly_textarea.setAttribute('readonly', '');
  Object.assign(readonly_textarea.style, {
    backgroundColor: '#dddddd',
    width: '800px',
    height: '40px',
  });
  readonly_textarea.innerText = public_jwk_string;

  const editable_textarea = document.createElement('textarea');
  Object.assign(editable_textarea.style, {
    width: '800px',
    height: '40px',
  });

  const save_button = document.createElement('button');
  save_button.innerText = 'Save';
  const make_button_promise = () => (new Promise((resolve, reject) => (save_button.addEventListener('click', resolve))));

  const feedback_div = document.createElement('div');

  ui.main_page_body.innerText = '';
  ui.main_page_body.appendChild(document.createTextNode('Your public key is'));
  ui.main_page_body.appendChild(document.createElement('br'));
  ui.main_page_body.appendChild(readonly_textarea);
  ui.main_page_body.appendChild(document.createElement('br'));
  ui.main_page_body.appendChild(document.createTextNode('Copy and paste your public key somewhere where your partner can find it.'));
  ui.main_page_body.appendChild(document.createElement('br'));
  ui.main_page_body.appendChild(document.createTextNode("Next, paste your partner's public key in here:"));
  ui.main_page_body.appendChild(document.createElement('br'));
  ui.main_page_body.appendChild(editable_textarea);
  ui.main_page_body.appendChild(document.createElement('br'));
  ui.main_page_body.appendChild(save_button);
  ui.main_page_body.appendChild(feedback_div);

  while(true) {
    await make_button_promise();
    try {
      const partner_key = await window.crypto.subtle.importKey('jwk', JSON.parse(editable_textarea.value),
                                                               {name: "ECDSA", namedCurve: "P-384"}, true, ['verify']);
      localStorage.setItem('partner_key', editable_textarea.value);
      return {master_public_key, master_private_key, partner_key};
    } catch(_) {
      feedback_div.innerText = "Error loading partner's key. Try again.";
    }
  }
};

const encode_binary = (bytes) => {
  let binary = '';
  for(const byte of bytes)
    binary += String.fromCharCode(byte);
  return binary;
};

const decode_binary = (binary) => {
  const len = binary.length;
  const buffer = new ArrayBuffer(len);
  const bytes = new Uint8Array(buffer);
  for(let i=0; i<len; i++)
    bytes[i] = binary.charCodeAt(i);
  return bytes;
};

const digitally_sign = async(private_key, data) => {
  const temp = await window.crypto.subtle.sign({name: 'ECDSA', hash: {name: 'SHA-384'}},
                                               private_key, new TextEncoder().encode(JSON.stringify(data)));
  const bytes = new Uint8Array(temp);
  return encode_binary(bytes);
};

const check_signature = async(public_key, data, signature) => {
  const buffer = decode_binary(signature);
  return await window.crypto.subtle.verify({name: 'ECDSA', hash: {name: 'SHA-384'}},
                                           public_key, buffer, new TextEncoder().encode(JSON.stringify(data)));
};

const encrypt = async(symmetric_key, msg) => {
  const iv = window.crypto.getRandomValues(new Uint8Array(12));
  const encoded = new TextEncoder().encode(msg);

  const ciphertext = await window.crypto.subtle.encrypt(
    {
      name: "AES-GCM",
      iv,
    },
    symmetric_key,
    encoded,
  );

  const iv_ciphertext = new Uint8Array(12 + ciphertext.byteLength);
  iv_ciphertext.set(iv, 0);
  iv_ciphertext.set(new Uint8Array(ciphertext), 12);

  return encode_binary(iv_ciphertext);
};

const decrypt = async(symmetric_key, cipher) => {
  const arraybuffer = decode_binary(cipher);
  let decrypted = await window.crypto.subtle.decrypt(
    {
      name: "AES-GCM",
      iv: arraybuffer.slice(0, 12),
    },
    symmetric_key,
    arraybuffer.slice(12),
  );
  return new TextDecoder().decode(decrypted);
};

const get_encrypted_channel = async({ui, socket_io, handle_decrypted_message: listener = null, interlocutor_latest_history}) => {
  ui.main_page_body.innerText = 'Connecting to server ...';

  const sock = socket_io(RELAY_SERVER_URL);
  sock.on('disconnect', () => {
    console.log('Disconnected.');
  });
  const interlocutor_available_promise = new Promise((resolve, reject) => (sock.on('interlocutor is available', resolve)));
  const real_connect_promise = new Promise((resolve, reject) => (sock.on('real_connect', resolve)));
  await new Promise((resolve, reject) => (sock.on('connect', resolve)));
  await real_connect_promise;
  console.log('Connected.');

  const {master_private_key, master_public_key, partner_key} = await get_keys({ui, sock});

  ui.main_page_body.innerText = 'Connecting to interlocutor ...';

  const temp_keys = await window.crypto.subtle.generateKey({name: "ECDH", namedCurve: "P-384"}, false, ['deriveKey']);

  let symmetric_key = undefined;

  const send_encrypted_data = async(data) => {
    const plaintext = JSON.stringify(data);
    const ciphertext = await encrypt(symmetric_key, plaintext);
    sock.emit('interlocutor should hear', {type: 'encrypted', ciphertext});
  };

  const interlocutor_received_public_key = make_resolvable_promise();

  const buffer = [];
  const handle_decrypted_message = async(message) => {
    if(listener === null) {
      buffer.push(message);
    } else {
      await listener({message});
    }
  };

  sock.on('interlocutor says', async(message) => {
    try {
      if(message.type === 'set public key') {
        const {data, signature} = message;
        const verdict = await check_signature(partner_key, data, signature);
        if(verdict) {
          const imported_key = await window.crypto.subtle.importKey('jwk', JSON.parse(data.public_key),
                                                                    {name: "ECDH", namedCurve: "P-384"}, false, []);
          symmetric_key = await window.crypto.subtle.deriveKey({name: 'ECDH', public: imported_key}, temp_keys.privateKey,
                                                               {name: 'AES-GCM', length: 256}, false, ['encrypt', 'decrypt']);
          await sleep(1000);
          await send_encrypted_data({type: 'public key received'});
        } else {
          console.log('invalid signature');
        }
      } else if(message.type === 'encrypted') {
        const plaintext = await decrypt(symmetric_key, message.ciphertext);
        const parsed = JSON.parse(plaintext);
        console.log('received encrypted message', {parsed});
        if(parsed.type === 'public key received') {
          interlocutor_received_public_key.resolve();
        } else {
          await handle_decrypted_message(parsed);
        }
      } else {
        console.warn('Unrecognized message type (1):', message.type);
      }
    } catch(e) {
      console.error(e);
    }
  });

  sock.emit('desired interlocutor is', await export_public_key(partner_key));

  console.log('waiting for interlocutor');

  await interlocutor_available_promise;

  // Transmit transient public key:
  {
    const data = {public_key: await export_public_key(temp_keys.publicKey), timestamp: time_now()};
    sock.emit('interlocutor should hear', {type: 'set public key', data, signature: await digitally_sign(master_private_key, data)});
  }

  await interlocutor_received_public_key.promise;

  const set_decrypted_message_listener = async(f) => {
    listener = f;
    for(const message of buffer)
      await listener({message});
  };

  const self_device_id = await get_self_device_id({master_public_key, partner_key});

  return {send_encrypted_data, set_decrypted_message_listener, self_device_id};
};

const sanitize_change = ({untrusted_change, self_device_id}) => {
  const timestamp = time_now();  // TODO: Currently, timestamps created by interlocutor while disconnected are completely distrusted.
                                 //       Probably worth considering trusting them. At least to an extent.
  if(untrusted_change.type === 'add') {
    const clock = untrusted_change.id;
    const new_clock = (clock & -2) + (1 - self_device_id);
    return {...untrusted_change, id: new_clock, timestamp};
  } else if(untrusted_change.type === 'remove') {
    const clock = untrusted_change.id;
    const new_clock = (clock & -2) + (1 - self_device_id);
    return {...untrusted_change, id: new_clock, timestamp};
  } else {
    throw notify(1241);
  }
};

const filter_network_operations = ({network_operations, seen_id, self_device_id}) => {
  return network_operations.filter(({id}) => (id % 2 === self_device_id  &&  id > seen_id));
};

const filter_changes = ({changes, highest_id_received}) => {
  const result = changes.filter((item) => (get_highest_op_id(item) > highest_id_received));
  return result;
};

const get_highest_op_id = (item) => {
  return item.id;
};

const sort_history = (history) => {
  const finished = {};
  const in_progress = {};
  const graph = {};
  const result = [];
  const lookup_table = {};

  for(const entry of history) {
    lookup_table[entry.id] = entry;
    if(entry.type === 'add') {
      graph[entry.id_to_left] = graph[entry.id_to_left] || [];
      graph[entry.id_to_left].push(entry.id);
    } else if(entry.type === 'remove') {
      graph[entry.deleted_id] = graph[entry.deleted_id] || [];
      graph[entry.deleted_id].push(entry.id);
    } else {
      throw notify(1242);
    }
  }

  const dfs = (id) => {
    if(in_progress[id])
      throw notify(1243);

    if(finished[id])
      return;

    in_progress[id] = 1;

    if(id !== 0)
      result.push(lookup_table[id]);

    graph[id]?.sort((a, b) => (b - a));
    for(const child of (graph[id] || []))
      dfs(child);

    delete in_progress[id];
    finished[id] = 1;
  };

  dfs(0);

  // TODO: Raise an error if there are any unreachable nodes.

  history.splice(0, history.length, ...result);

  return history;
};

const highest_id_received_state = (() => {
  let highest_id_received = 0;

  return {
    get: () => (highest_id_received),
    set: (x) => {highest_id_received = x;},
  };
})();

const handle_network_operations = (() => {
  return ({send_encrypted_data, changes, textarea, main_data: data, self_device_id, set_textarea_value, ephemeral_data}) => {
    const prev_selection_start = textarea.selectionStart;
    const prev_selection_end   = textarea.selectionEnd;
    const id_left_of_selection_start = ((textarea.selectionStart === 0) ? 0 : data.current[textarea.selectionStart - 1].id);
    const id_left_of_selection_end   = ((textarea.selectionEnd   === 0) ? 0 : data.current[textarea.selectionEnd   - 1].id);
    console.log('handle_network_operations history length (1)', data.history.length);
    for(const untrusted_change of filter_changes({changes, highest_id_received: highest_id_received_state.get()})) {
      const sanitized_change = sanitize_change({untrusted_change, self_device_id});
      data.history.push(sanitized_change);
      highest_id_received_state.set(Math.max(highest_id_received_state.get(), get_highest_op_id(sanitized_change)));
    }
    const replayed = replay(data.history);
    save_replay({replayed, main_data: data, ephemeral_data});
    console.log('handle_network_operations history length (2)', data.history.length);
    save_to_disk({main_data: data, ephemeral_data});
    set_textarea_value(data.current.map(({c}) => (c)).join(''));
    const new_id_left_of_selection_start = possibly_follow_tombstones({ephemeral_data, id: id_left_of_selection_start});
    textarea.selectionStart = find_index_with_hint({array: data.current, index_hint: prev_selection_start,
                                                    filter: ({id}) => (id === new_id_left_of_selection_start)}) + 1;
    const new_id_left_of_selection_end   = possibly_follow_tombstones({ephemeral_data, id: id_left_of_selection_end  });
    textarea.selectionEnd   = find_index_with_hint({array: data.current, index_hint: prev_selection_end  ,
                                                    filter: ({id}) => (id === new_id_left_of_selection_end  )}) + 1;

  };
})();

const possibly_follow_tombstones = ({id, ephemeral_data}) => {
  const deleted = {};
  for(const op of ephemeral_data.causal_tree)
    if(op.type === 'remove')
      deleted[op.deleted_id] = 1;
  const index_1 = ephemeral_data.causal_tree.findIndex((x) => (x.id === id));
  for(let i=index_1; i>=0; --i)
    if(ephemeral_data.causal_tree[i].type === 'add'  &&  !deleted[ephemeral_data.causal_tree[i].id])
      return ephemeral_data.causal_tree[i].id;
  return 0;
};

const cleanup_causal_tree = (causal_tree) => {
  const deleted = {};
  for(const op of causal_tree)
    if(op.type === 'remove')
      deleted[op.deleted_id] = 1;

  const heir = {0: 0};
  const needs_heir = [];
  for(let i=causal_tree.length-1; i>=0; --i) {
    if(causal_tree[i].type === 'add') {
      if(deleted[causal_tree[i].id]) {
        needs_heir.push(causal_tree[i].id);
      } else {
        const heir_id = causal_tree[i].id;
        for(const id of needs_heir)
          heir[id] = heir_id;
        needs_heir.splice(0, needs_heir.length);
        heir[heir_id] = heir_id;
      }
    }
  }
  for(const id of needs_heir)
    heir[id] = 0;

  const result = [];
  for(let i=0; i<causal_tree.length; ++i)
    if(causal_tree[i].type === 'add'  &&  !deleted[causal_tree[i].id])
      result.push({...causal_tree[i], id_to_left: heir[causal_tree[i].id_to_left]});
  console.log('cleanup_causal_tree', JSON.parse(JSON.stringify({causal_tree, heir, result})));

  // Sanity check:
  for(const op of result) {
    if(op.type === 'add'  &&  op.id_to_left === undefined)
      throw notify(1259);
    if(op.type === 'remove'  &&  op.deleted_id === undefined)
      throw notify(1260);
  }

  return result;
};

const cleanup_history = ({cutoff_id, main_data}) => {
  const call_record = JSON.parse(JSON.stringify({type: 'cleanup_history', cutoff_id, main_data}));
  record_for_testing(call_record);
  const partial_history = main_data.history.filter((x) => (x.id <= cutoff_id));
  const serialization = serialize(partial_history);
  const replayed = replay(partial_history);
  const remaining_history = main_data.history.filter((x) => (x.id > cutoff_id));
  const new_history = [{
    type: 'compressed history',
    serialization,
    final_state: {
      state_1: {current: replayed.state_1.current},
      state_2: {
        clock: replayed.state_2.clock,
        causal_tree: cleanup_causal_tree(replayed.state_2.causal_tree),
      },
    },
    id: cutoff_id,
  }, ...remaining_history];
  console.log(JSON.parse(JSON.stringify({cutoff_id, main_data, new_history})));
  record_for_testing({type: 'output', call_record, output: JSON.parse(JSON.stringify(new_history))});
  main_data.history.splice(0, main_data.history.length, ...new_history);
};

const get_self_device_id = async({master_public_key, partner_key}) => {
  const mk = await export_public_key(master_public_key);
  const pk = await export_public_key(partner_key);

  if(mk === pk)
    throw notify('Cannot compute device_id: both users are using the same public key');

  if(mk === [mk, pk].sort()[0]) {
    return 0;
  } else {
    return 1;
  }
};

const replay = (history) => {
  const call_record = JSON.parse(JSON.stringify({type: 'replay', history}));
  record_for_testing(call_record);

  const state_1 = {current: [], history: [...history]};
  const state_2 = {clock: 0, causal_tree: []};

  for(const op of history) {
    if(op.type === 'compressed history') {
      if(state_2.causal_tree.length !== 0)
        throw notify(1254);
//      state_1.current.splice(0, state_1.current.length, ...op.final_state.state_1.current);
      state_2.clock = op.final_state.state_2.clock;
      state_2.causal_tree.splice(0, state_2.causal_tree.length, ...op.final_state.state_2.causal_tree);
    } else {
      state_2.causal_tree.push(op);
    }
  }

  sort_history(state_2.causal_tree);

  for(const op of history)
    state_2.clock = Math.max(state_2.clock, op.id);
  const deleted = {};
  for(const op of state_2.causal_tree)
    if(op.type === 'remove')
      deleted[op.deleted_id] = 1;
  for(const op of state_2.causal_tree)
    if(op.type === 'add' && !deleted[op.id])
      state_1.current.push({id: op.id, c: op.text});
  console.log('replay()', JSON.parse(JSON.stringify({history, state_1, state_2})));
  return {state_1, state_2};
};

// "t\u0014êJa\u0002\u0000Ha\u0002\u0000oa\u0002\u0000wa\u0002\u0000 a\u0002\u0000iTa\u0002\u0000sa\u0002\u0000 a\u0002\u0000ta\u0002\u0000ha\u0002\u0000ia\u0002\u0000sa\u0002\u0000 a\u0002\u0000ta\u0002\u0000ha\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000 a\u0002\u0000wa\u0002\u0000oa\u0002\u0000ra\u0002\u0000ka\u0002\u0000ia\u0002\u0000na\u0002\u0000ga\u0002\u0000?ta\u0003\u0000 a\u0002\u0000Pa\u0002\u0000ra\u0002\u0000ea\u0002\u0000ta\u0002\u0000ta\u0002\u0000ya\u0002\u0000 a\u0002\u0000wa\u0002\u0000ea\u0002\u0000la\u0002\u0000la\u0002\u0000,a\u0002\u0000 a\u0002\u0000Ia\u0002\u0000 Ta\u0001\u0000.a\u0001wa\u0001 a\u0001aa\u0001Oa\u0001ga\u0001ha\u0001ea\u0001 a\u0001ra\u0001ta\u0001.a\u0001ha\u0002\u0000aa\u0002\u0000ta\u0002\u0000'a\u0002\u0000sa\u0002\u0000 a\u0002\u0000ga\u0002\u0000oa\u0002\u0000oa\u0002\u0000da\u0002\u0000.Tr\u0002ÀtHTr\u0002Àtoa\u0002Àzaa\u0002\u0000wa\u0002\u0000ea\u0002\u0000fTrÀ~oa\u0002À{aa\u0002\u0000ea\u0002\u0000fa\u0002\u0000ea\u0002\u0000wa\u0002\u0000ktr\u0002ar\u0002er\u0002fr\u0002er\u0002wr\u0002kr\u0002ar\u0002wr\u0002er\u0002fr\u0002Á\u0015wr\u0002Á\u0015 r\u0002Á\u0015ir\u0002Á\u0015sr\u0002Á\u0015 r\u0002Á\u0015tr\u0002Á\u0015hr\u0002Á\u0015ir\u0002Á\u0015sr\u0002Á\u0015 r\u0002Á\u0015tr\u0002Á\u0015hr\u0002Á\u0015ir\u0002Á\u0015nr\u0002Á\u0015gr\u0002Á\u0015 r\u0002Á\u0015wr\u0002Á\u0015or\u0002Á\u0015rr\u0002Á\u0015kr\u0002Á\u0015ir\u0002Á\u0015nr\u0002Á\u0015gr\u0002Á\u0015?r\u0002Á\u0014 r\u0002Á\u0014Pr\u0002Á\u0014rr\u0002Á\u0014er\u0002Á\u0014tr\u0002Á\u0014tr\u0002Á\u0014yr\u0002Á\u0014 r\u0002Á\u0014wr\u0002Á\u0014er\u0002Á\u0014lr\u0002Á\u0014lr\u0002Á\u0014,r\u0002Á\u0014 r\u0002Á\u0014Ir\u0002Á\u0014 r\u0002Á\u0014wr\u0002Á\u0014ar\u0002Á\u0014gr\u0002Á\u0014er\u0002Á\u0014rr\u0002Á\u0014.r\u0002Á!.r\u0002Á! r\u0002Á!Or\u0002Á!hr\u0002Á! r\u0002Á!tr\u0002Á!hr\u0002Á!ar\u0002Á!tr\u0002Á!'r\u0002Á!sr\u0002Á! r\u0002Á!gr\u0002Á!or\u0002Á!or\u0002Á!dr\u0002Á!.a\u0002Â\u0019ra\u0002\u0000ea\u0002\u0000pa\u0002\u0000la\u0002\u0000aa\u0002\u0000ca\u0002\u0000ea\u0002\u0000d"

const normalize_dom_change = ({main_data, change, ephemeral_data, self_device_id}) => {
  const call_record = JSON.parse(JSON.stringify({type: 'normalize_dom_change', main_data, change, ephemeral_data, self_device_id}));
  record_for_testing(call_record);

  const timestamp = time_now();
  const params = JSON.parse(JSON.stringify({main_data, change, ephemeral_data, self_device_id}));
  const result = [];
  const {prev_value, removed, inserted, index, new_value} = change;
  let next_clock = (ephemeral_data.clock & -2) + 2 + self_device_id;
  if(typeof next_clock !== 'number' || next_clock !== next_clock)
    console.error({next_clock});
  for(let i=0; i<removed.length; ++i) {
    const deleted_id = main_data.current[index + i].id;
    result.push({type: 'remove', text: removed[i], id: (next_clock += 2) - 2, deleted_id, timestamp});
  }
  for(let i=0; i<inserted.length; ++i) {
    const id_to_left = ((i === 0) ? ((index === 0) ? 0 : main_data.current[index - 1].id) : next_clock - 2);
    result.push({type: 'add', text: inserted[i], id: (next_clock += 2) - 2, id_to_left, timestamp});
  }
  console.log('normalize_dom', {...params, result});
  return result;
};

const find_index_with_hint = ({array, index_hint, filter}) => {
  if(array.length === 0)
    return -1;

  let i = Math.min(Math.max(0, index_hint), array.length-1);
  let step = 1;
  while(true) {
    if(filter(array[i]))
      return i;
    i += step;
    step = ((step > 0) ? -step - 1 : -step + 1);
    if(i === -1 || i === array.length)
      break;
  }

  if(i === -1) {
    i += step;
    for(; i<array.length; ++i)
      if(filter(array[i]))
        return i;
  } else {
    i += step;
    for(; i>=0; --i)
      if(filter(array[i]))
        return i;
  }

  return -1;
};

const compare = (a, b) => {
  if(a < b)
    return -1;
  if(b < a)
    return 1;
  return 0;
};

const round_down_to_nearest = (x, y) => {
  return x - (x % y);
};

const serialize_as_varnum = (m) => {
  if(m !== (m-(m%1))) {
    console.log(1245, m);
    throw notify(1245);
  }

  const n = Math.abs(m);

  const sign_bit = ((n === m) ? 0 : 128);

  if(n < 64)
    return [sign_bit + n];

  if(n < 8192)
    return [sign_bit + 64 + ((n&(127<<7))>>7)  , n&127];

  if(n < 1048576)
    return [sign_bit + 64 + ((n&(127<<14))>>14), 128 + ((n&(127<<7))>>7)  , n&127];

  if(n < 134217728)
    return [sign_bit + 64 + ((n&(127<<21))>>21), 128 + ((n&(127<<14))>>14), 128 + ((n>>7)&127), n&127];

  console.error('serialize_as_varnum(', m);

  throw notify(1246);
};

const deserialize_varnum = (array, index) => {
  const sign = (((array[index] & 128) === 0) ? 1 : -1);

  let n = 0;

  if(index >= array.length)
    throw notify(1247);

  if((array[index] & 127) < 64)
    return [sign * (array[index] & 127), 1];

  if(index+1 >= array.length)
    throw notify(1255);

  if(array[index + 1] < 128)
    return [sign * (((array[index]&63)<<7) | array[index+1]), 2];

  if(index+2 >= array.length)
    throw notify(1256);

  if(array[index + 2] < 128)
    return [sign * (((array[index]&63)<<14) | ((array[index+1]&128)<<7) | array[index+2]), 3];

  if(index+3 >= array.length)
    throw notify(1257);

  return [sign * (((array[index]&63)<<21) | ((array[index+1]&128)<<14) | ((array[index+2]&128)<<7) | array[index+3]), 4];
};

const serialize = (history) => {
  const sorted_history = [...history].sort((a, b) => {
    const t1 = round_down_to_nearest(a.timestamp, 5000);
    const t2 = round_down_to_nearest(b.timestamp, 5000);
    if(t1 !== t2) {
      return compare(t1, t2);
    } else {
      return compare(a.id, b.id);
    }
  });
  let time = 0;
  let baseline = 0;
  const array = [];
  for(const item of sorted_history) {
    // Serialize timestamp:
    if(item.timestamp !== undefined) {
      const time_increase = round_down_to_nearest(item.timestamp - time, 5000);
      if(time_increase > 647500) {
        const n = (time_increase / 5000) - 130;
        array.push('t'.charCodeAt(0), (n>>24)&255, (n>>16)&255, (n>>8)&255, n&255);
      } else if(time_increase >= 7500) {
        const n = (time_increase / 5000) + 126;
        array.push('t'.charCodeAt(0), n);
      } else if(time_increase === 5000) {
        array.push('T'.charCodeAt(0));
      } else {
        // Do nothing
      }
      time += time_increase;
    }

    if(item.type === 'add') {
      const {id_to_left, id, text} = item;
      array.push('a'.charCodeAt(0));
      array.push(...serialize_as_varnum(id - baseline));
      array.push(...serialize_as_varnum(id_to_left - baseline));
      array.push(text.charCodeAt(0));
      baseline = id;
    } else if(item.type === 'remove') {
      const {deleted_id, id, text} = item;
      array.push('r'.charCodeAt(0));
      array.push(...serialize_as_varnum(id - baseline));
      array.push(...serialize_as_varnum(deleted_id - baseline));
      array.push(text.charCodeAt(0));
      baseline = id;
    } else if(item.type === 'compressed history') {
      array.push(...decode_binary(item.serialization.text));
      time = item.serialization.time;
      baseline = item.serialization.baseline;
    } else {
      throw notify(1244);
    }
  }
  return {text: encode_binary(array), time, baseline};
};

const deserialize = (str) => {
  const array = decode_binary(str);
  let time = 0;
  let baseline = 0;
  const history = [];
  let index = 0;
  while(index<array.length) {
    const old_index = index;
    let erroring = false;
    try {
      if(array[index] === 't'.charCodeAt(0)) {
        if((array[index+1] & 128) === 0) {
          time += 650000 + (((array[index+1]<<24) | (array[index+2]<<16) | (array[index+3]<<8) | array[index+4]) * 5000);
          index += 5;
        } else {
          time += 10000 + ((array[index+1]&127) * 5000);
          index += 2;
        }
      } else if(array[index] === 'T'.charCodeAt(0)) {
        time += 5000;
        index += 1;
      } else if(array[index] === 'a'.charCodeAt(0)) {
        const [v1, len_1] = deserialize_varnum(array, index + 1);
        const [v2, len_2] = deserialize_varnum(array, index + 1 + len_1);
        const id = baseline + v1;
        const id_to_left = baseline + v2;
        const text = String.fromCharCode(array[index + 1 + len_1 + len_2]);
        history.push({type: 'add', id, id_to_left, text, timestamp: time});
        baseline = id;
        index += 1 + len_1 + len_2 + 1;
      } else if(array[index] === 'r'.charCodeAt(0)) {
        const [v1, len_1] = deserialize_varnum(array, index + 1);
        const [v2, len_2] = deserialize_varnum(array, index + 1 + len_1);
        const id = baseline + v1;
        const deleted_id = baseline + v2;
        const text = String.fromCharCode(array[index + 1 + len_1 + len_2]);
        history.push({type: 'remove', id, deleted_id, text, timestamp: time});
        baseline = id;
        index += 1 + len_1 + len_2 + 1;
      } else {
        console.log(1249, {array, history, index, byte: array[index]});
        throw notify(1249);
      }
    } catch(e) {
      erroring = true;
      throw e;
    } finally {
      if(!erroring  &&  (index === old_index))
        throw notify(1250);
    }
  }
  if(index !== array.length)
    throw notify(1251);
  return sort_history(history);
};

const save_to_disk = ({main_data, ephemeral_data}) => {
  const call_record = JSON.parse(JSON.stringify({type: 'save_to_disk', main_data, ephemeral_data}));
  record_for_testing(call_record);

  console.log('save_to_disk: history length', main_data.history.length);

  // Sadly, the following sanity check is mostly pointless, since the main and ephemeral data structures are generated directly from replay().
//  // Sanity check:
//  const replayed = replay(main_data.history);
//  if(make_stable_string(replayed) !== make_stable_string({state_1: main_data, state_2: ephemeral_data}))
//    throw (console.error({real: {main_data, ephemeral_data}, replayed}), 1235);

  const {text: serialized} = serialize(main_data.history);

  console.log({serialized});

  // Fails because timestamps become less precise:
//  // Sanity check:
//  if(make_stable_string(deserialize(serialized)) !== make_stable_string(main_data.history));
//    throw 1248;

  // Sanity check:
  const replayed_1 = replay(deserialize(serialized));
  const replayed_2 = replay(main_data.history);
  replayed_1.state_1.history = replayed_2.state_1.history = replayed_1.state_2.causal_tree = replayed_2.state_2.causal_tree = null;
  if(make_stable_string(replayed_1) !== make_stable_string(replayed_2)) {
    console.log(1253, {replayed_1, replayed_2});
    throw notify(1253);
  }

  // Sanity check:
  const deserialized = deserialize(serialized);
  const {text: again} = serialize(deserialized);
  if(again !== serialized) {
    console.log(1252, {serialized, again_____: again, deserialized});
    throw notify(1252);
  }

  {
    const call_record = {type: 'localStorage.setItem', key: 'main_text_box_history', value: serialized};
    record_for_testing(call_record);
    localStorage.setItem(call_record.key, call_record.value);
  }
};

const get_latest_id = ({history, self_device_id}) => {
  let result = 0;
  for(let i=history.length-1; i>=0; --i) {
    const item = history[i];
    if(item.type === 'add') {
      const device_id = item.id % 2;
      if(device_id === self_device_id)
        continue;
      result = Math.max(result, item.id);
    } else if(item.type === 'remove') {
      const device_id = item.id % 2;
      if(device_id === self_device_id)
        continue;
      result = Math.max(result, item.id);
    } else {
      continue;
    }
  }
  return result;
};

const save_replay = ({replayed, main_data: data, ephemeral_data}) => {
  //data.history.splice(0, data.history.length, ...stored_history);
  data.current.splice(0, data.current.length, ...replayed.state_1.current);
  ephemeral_data.causal_tree.splice(0, ephemeral_data.causal_tree.length, ...replayed.state_2.causal_tree);
  ephemeral_data.clock = replayed.state_2.clock;
};

const compute_initial_text = async({send_encrypted_data, self_device_id, interlocutor_latest_history, main_data: data, ephemeral_data}) => {
  const stored = (() => {
    if(ENABLE_SIMULATION) {
      return harness.transcript.find((x) => (x.type === 'localStorage.getItem'  &&  x.key === 'main_text_box_history')).value;
    } else {
      return localStorage.getItem('main_text_box_history');
    }
  })();
  record_for_testing({type: 'localStorage.getItem', key: 'main_text_box_history', value: stored, device_id: self_device_id});
  const stored_history = ((stored === null) ? [] : deserialize(stored));
  send_encrypted_data({type: 'latest clock', value: get_latest_id({history: stored_history, self_device_id})});  // asynchronous action
  const other_latest_history_id = await interlocutor_latest_history.promise;
  highest_id_received_state.set(other_latest_history_id);
  console.log({other_latest_history_id});
  const replayed = replay(stored_history);
  send_encrypted_data({type: 'latest history', value: filter_network_operations({network_operations: stored_history, seen_id: other_latest_history_id, self_device_id})});  // async
  save_replay({replayed, main_data: data, ephemeral_data});
  data.history.splice(0, data.history.length, ...replayed.state_1.history);
  return data.current.map(({c}) => (c)).join('');
};

const spawn_animation_frame_loop = (callback) => {
  let previous_timestamp = performance.now();
  const f = (new_timestamp) => {
    const elapsed = new_timestamp - previous_timestamp;
    previous_timestamp = new_timestamp;
    requestAnimationFrame(f);
    callback(elapsed);
  };
  requestAnimationFrame(f);
};

const make_feedback_div = () => {
  let feedback_opacity_timer = 0;
  const feedback_div = document.createElement('div');
  spawn_animation_frame_loop((elapsed) => {
    feedback_opacity_timer = Math.max(0, feedback_opacity_timer - elapsed);
    feedback_div.style.opacity = 1-(1-feedback_opacity_timer/10000)**2;
  });
  const set_feedback_message = (message) => {
    feedback_div.style.backgroundColor = 'unset';
    feedback_div.style.color = 'unset';
    feedback_div.innerText = message;
    feedback_opacity_timer = 10000;
  };
  real_notify = (message) => {
    feedback_div.style.backgroundColor = 'red';
    feedback_div.style.color = 'white';
    feedback_div.innerText = `Error: ${message}`;
    feedback_opacity_timer = 10000;
  };
  return {set_feedback_message, feedback_div};
};

const highest_id_sent_state = (() => {let state = 0; return {get: () => (state), set: (x) => {state = x;}};})();

const initialize_network_manager = ({send_encrypted_data, self_device_id}) => {
  let highest_ack_sent = 0;
  const to_be_sent = [];
  (async() => {
    if(self_device_id === 1)
      await sleep(3500);

    while(true) {
      console.log('syncing');
      const ack = highest_id_received_state.get();
      if(to_be_sent.length > 0  ||  highest_ack_sent < ack) {
        await send_encrypted_data({type: 'changes', value: to_be_sent, highest_id_received: ack});
        highest_id_sent_state.set(to_be_sent.slice(-1)[0].id);
        highest_ack_sent = ack;
      }
      await sleep(7000);
    }
  })();
  return {network_buffer: to_be_sent};
};

const test_1 = () => {
  const h_1 = [{type: 'add', id: 1, id_to_left: 0, text: 'X'}, {type: 'add', id: 2, id_to_left: 0, text: 'Y'}];
  const h_2 = [h_1[1], h_1[0]];

  const r_1 = replay(h_1);
  const r_2 = replay(h_2);

  console.log({r_1, r_2});

  if(make_stable_string(r_1) !== make_stable_string(r_2))
    throw 'failed';
};

const test_2 = () => {
  console.log('test_2 1', deserialize('a\x02\x00H'));
  console.log('test_2 2', deserialize('aB2B1e'));
  console.log('test_2 3', deserialize('aB2Bh1e'));
};

const run_tests = () => {
  console.log('Running tests ...');
//  test_1();
//  test_2();
  console.log('Ran tests.');
};

const main = async() => {
//  run_tests();

  const socket_io = await initialize_socket_io();

  const ui = await initialize_ui();

  const interlocutor_latest_history = make_resolvable_promise();
  const done_processing_latest_history = make_resolvable_promise();

  const handle_network_operations_ = (changes) => {
    handle_network_operations({changes, send_encrypted_data, textarea, main_data, self_device_id, set_textarea_value, ephemeral_data});
  };

  const handle_decrypted_message_ = ({message: parsed}) => {
    record_for_testing({type: 'handle_decrypted_message', message: parsed, device_id: self_device_id});

    if(parsed.type === 'changes') {
      handle_network_operations_(parsed.value);
      const ack = parsed.highest_id_received;
      if(ack === undefined)
        throw notify(1258);
      if(ack <= highest_id_sent_state.get()) {
        cleanup_history({cutoff_id: ack, main_data});
      } else {
        console.warn('adversary detected');
      }
      to_be_sent.splice(0, to_be_sent.length, ...to_be_sent.filter((x) => (x.id > ack)));
    } else if(parsed.type === 'latest clock') {
      interlocutor_latest_history.resolve(parsed.value);
    } else if(parsed.type === 'latest history') {
      console.log('Received operations:', parsed.value);
      handle_network_operations_(parsed.value);
      done_processing_latest_history.resolve();
    } else {
      console.warn('Unrecognized message type (2):', parsed.type);
    }
  };

  const handle_decrypted_message = ((ENABLE_SIMULATION) ? () => {} : handle_decrypted_message_);

  harness.register({handle_decrypted_message: handle_decrypted_message_});

  const {send_encrypted_data, self_device_id} = await get_encrypted_channel({ui, socket_io, interlocutor_latest_history,
                                                                             handle_decrypted_message                   });

  ui.main_page_body.innerText = 'Connection established. Loading initial data ...';

  console.log({self_device_id});

  if(ENABLE_SIMULATION)
    harness.simulate();

  const {network_buffer: to_be_sent} = initialize_network_manager({send_encrypted_data, self_device_id});

  let ephemeral_data = {clock: 0, causal_tree: []};
  let main_data = {current: [], history: []};

  const initial_text = await compute_initial_text({send_encrypted_data, self_device_id, interlocutor_latest_history, main_data, ephemeral_data});

  console.log({initial_text});

  const {set_feedback_message, feedback_div} = make_feedback_div();

  if(ENABLE_TIMESTAMP_REPLACEMENT)
    set_feedback_message('Note: fake timestamps are being recorded (for testing purposes).');

  const on_change = (change) => {
    const call_record = {type: 'on_change', change, device_id: self_device_id};
    record_for_testing(call_record);
    const normalizeds = normalize_dom_change({main_data, change, ephemeral_data, self_device_id});
    for(const operation of normalizeds) {
      to_be_sent.push(operation);
      main_data.history.push(operation);
    }
    const replayed = replay(main_data.history);
    save_replay({replayed, main_data, ephemeral_data});
    save_to_disk({main_data, ephemeral_data});
  };

  harness.register({on_change});

  const {textarea, set_value: set_textarea_value} = make_textarea({
    on_change,

    // TODO: implement proper undo and redo in this portion of the code
    // For now, we'll just disable:
    on_undo: () => {
      set_feedback_message("Undo/redo functionality hasn't been implemented yet and is currently disabled. Sorry!");
    },
    on_redo: () => {
      set_feedback_message("Undo/redo functionality hasn't been implemented yet and is currently disabled. Sorry!");
    },
  });

  harness.register({set_textarea_value});

  set_textarea_value(initial_text);

  await done_processing_latest_history.promise;

  ui.main_page_body.innerText = '';

  ui.main_page_body.appendChild(textarea);
  ui.main_page_body.appendChild(feedback_div);
};

main();
