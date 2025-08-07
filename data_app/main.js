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

const sleep = (millis) => (new Promise((resolve, reject) => (setTimeout(resolve, millis))));

const make_resolvable_promise = () => {
  let resolve = null;
  let reject = null;
  const promise = new Promise((resolve_, reject_) => {
    resolve = resolve_;
    reject = reject_;
  });
  return {promise, resolve, reject};
};

// This function make_stable_string() is (decently well) optimized for performance. Instead of readability.
const make_stable_string = (json_value) => {
  let indent_level = 0;
  const state = ['done', json_value, 'json'];
  const reverser = [];
  let result = '';
  for(;;) {
    const top = state.pop();
    if(top === 'json') {
      const top2 = state.pop();
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
        for(const key of Object.keys(top2).sort())
          reverser.push(key);
        const original_length = reverser.length;
        while(reverser.length > 0) {
          const key = reverser.pop();
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
      const unreachable = top;
      console.log(top);
      throw new Error('assertion failed');
    }
  }
  return result;
};

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
//  if(window.location.href.startsWith('file:///')) {
//    return 'http://localhost:6003';
//  } else if(window.location.hostname === 'localhost') {
//    return 'http://localhost:6003';
//  } else {
    return 'https://relay-server-13u9.onrender.com';
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
    const data = {public_key: await export_public_key(temp_keys.publicKey), timestamp: Date.now()};
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
  if(untrusted_change.type === 'add') {
    const clock = untrusted_change.id;
    const new_clock = (clock & -2) + (1 - self_device_id);
    return {...untrusted_change, id: new_clock};
  } else if(untrusted_change.type === 'remove') {
    const clock = untrusted_change.id;
    const new_clock = (clock & -2) + (1 - self_device_id);
    return {...untrusted_change, id: new_clock};
  } else {
    throw 1241;
  }
};

const filter_network_operations = ({network_operations, seen_id, self_device_id}) => {
  return network_operations.filter(({id}) => (id % 2 === self_device_id  &&  id > seen_id));
};

const filter_changes = ({changes, highest_ack_sent}) => {
  const result = changes.filter((item) => (get_highest_op_id(item) > highest_ack_sent));
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
      throw 1242;
    }
  }

  const dfs = (id) => {
    if(in_progress[id])
      throw 1243;

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

  history.splice(0, history.length, ...result);

  return history;
};

const handle_network_operations = (() => {
  let highest_ack_sent = 0;

  return ({send_encrypted_data, changes, textarea, main_data: data, self_device_id, set_textarea_value, ephemeral_data}) => {
    const prev_selection_start = textarea.selectionStart;
    const prev_selection_end   = textarea.selectionEnd;
    const id_left_of_selection_start = ((textarea.selectionStart === 0) ? 0 : data.current[textarea.selectionStart - 1].id);
    const id_left_of_selection_end   = ((textarea.selectionEnd   === 0) ? 0 : data.current[textarea.selectionEnd   - 1].id);
    for(const untrusted_change of filter_changes({changes, highest_ack_sent})) {
      const sanitized_change = sanitize_change({untrusted_change, self_device_id});
      data.history.push(sanitized_change);
      highest_ack_sent = Math.max(highest_ack_sent, get_highest_op_id(sanitized_change));
    }
    send_encrypted_data({type: 'ack', value: highest_ack_sent});  // asynchronous action
    sort_history(data.history);
    const replayed = replay(data.history);
    save_replay({replayed, main_data: data, ephemeral_data});
    save_to_disk({main_data: data, ephemeral_data});
    set_textarea_value(data.current.map(({c}) => (c)).join(''));
    const new_id_left_of_selection_start = possibly_follow_tombstones({main_data: data, id: id_left_of_selection_start});
    textarea.selectionStart = find_index_with_hint({array: data.current, index_hint: prev_selection_start,
                                                    filter: ({id}) => (id === new_id_left_of_selection_start)}) + 1;
    const new_id_left_of_selection_end   = possibly_follow_tombstones({main_data: data, id: id_left_of_selection_end  });
    textarea.selectionEnd   = find_index_with_hint({array: data.current, index_hint: prev_selection_end  ,
                                                    filter: ({id}) => (id === new_id_left_of_selection_end  )}) + 1;

  };
})();

const possibly_follow_tombstones = ({main_data, id}) => {
  const deleted = {};
  for(const op of main_data.history)
    if(op.type === 'remove')
      deleted[op.deleted_id] = 1;
  const index_1 = main_data.history.findIndex((x) => (x.id === id));
  for(let i=index_1; i>=0; --i)
    if(main_data.history[i].type === 'add'  &&  !deleted[main_data.history[i].id])
      return main_data.history[i].id;
  return 0;
};

const handle_ack = ({to_be_sent, ack}) => {
  to_be_sent.splice(0, to_be_sent.length, ...to_be_sent.filter((x) => (x.id > ack)));
};

const get_self_device_id = async({master_public_key, partner_key}) => {
  const mk = await export_public_key(master_public_key);
  const pk = await export_public_key(partner_key);

  if(mk === pk)
    throw new Error('Cannot compute device_id: both users are using the same public key');

  if(mk === [mk, pk].sort()[0]) {
    return 0;
  } else {
    return 1;
  }
};

const replay = (history) => {
  const state_1 = {current: [], history: []};
  const state_2 = {clock: 0, timestamp: 0};
  const sorted_history = sort_history([...history]);
  for(const op of sorted_history)
    state_2.clock = Math.max(state_2.clock, op.id);
  const deleted = {};
  for(const op of sorted_history)
    if(op.type === 'remove')
      deleted[op.deleted_id] = 1;
  for(const op of sorted_history)
    if(op.type === 'add' && !deleted[op.id])
      state_1.current.push({id: op.id, c: op.text});
  state_1.history = sorted_history;
  console.log('replay()', JSON.parse(JSON.stringify({history, state_1, state_2})));
  return {state_1, state_2};
};

const normalize_dom_change = ({main_data, change, ephemeral_data, self_device_id}) => {
  const params = JSON.parse(JSON.stringify({main_data, change, ephemeral_data, self_device_id}));
  const result = [];
  const {prev_value, removed, inserted, index, new_value} = change;
  let next_clock = (ephemeral_data.clock & -2) + 2 + self_device_id;
  if(typeof next_clock !== 'number' || next_clock !== next_clock)
    console.error({next_clock});
  for(let i=0; i<removed.length; ++i) {
    const deleted_id = main_data.current[index + i].id;
    result.push({type: 'remove', text: removed[i], id: (next_clock += 2) - 2, deleted_id});
  }
  for(let i=0; i<inserted.length; ++i) {
    const id_to_left = ((i === 0) ? ((index === 0) ? 0 : main_data.current[index - 1].id) : next_clock - 2);
    result.push({type: 'add', text: inserted[i], id: (next_clock += 2) - 2, id_to_left});
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

const save_to_disk = ({main_data, ephemeral_data}) => {
  // Sadly, the following sanity check is mostly pointless, since the main and ephemeral data structures are generated directly from replay().
//  // Sanity check:
//  const replayed = replay(main_data.history);
//  if(make_stable_string(replayed) !== make_stable_string({state_1: main_data, state_2: ephemeral_data}))
//    throw (console.error({real: {main_data, ephemeral_data}, replayed}), 1235);

  localStorage.setItem('main_text_box_history', JSON.stringify(main_data.history));
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
  ephemeral_data.timestamp = replayed.state_2.timestamp;
  ephemeral_data.clock = replayed.state_2.clock;
};

const compute_initial_text = async({send_encrypted_data, self_device_id, interlocutor_latest_history, main_data: data, ephemeral_data}) => {
  const stored = localStorage.getItem('main_text_box_history');
  const stored_history = ((stored === null) ? [] : JSON.parse(stored));
  send_encrypted_data({type: 'latest clock', value: get_latest_id({history: stored_history, self_device_id})});  // asynchronous action
  const other_latest_history_id = await interlocutor_latest_history.promise;
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
    feedback_div.innerText = message;
    feedback_opacity_timer = 10000;
  };
  return {set_feedback_message, feedback_div};
};

const initialize_network_manager = ({send_encrypted_data}) => {
  const to_be_sent = [];
  (async() => {
    while(true) {
      console.log('syncing');
      if(to_be_sent.length > 0)
        await send_encrypted_data({type: 'changes', value: to_be_sent});
      await sleep(7000);
    }
  })();
  return {network_buffer: to_be_sent};
};

const main = async() => {
  const socket_io = await initialize_socket_io();

  const ui = await initialize_ui();

  const interlocutor_latest_history = make_resolvable_promise();
  const done_processing_latest_history = make_resolvable_promise();

  const handle_network_operations_ = (changes) => {
    handle_network_operations({changes, send_encrypted_data, textarea, main_data, self_device_id, set_textarea_value, ephemeral_data});
  };

  const {send_encrypted_data, self_device_id} = await get_encrypted_channel({
    ui,
    socket_io,
    interlocutor_latest_history,
    handle_decrypted_message: ({message: parsed}) => {
      if(parsed.type === 'changes') {
        handle_network_operations_(parsed.value);
      } else if(parsed.type === 'ack') {
        handle_ack({to_be_sent, ack: parsed.value});
      } else if(parsed.type === 'latest clock') {
        interlocutor_latest_history.resolve(parsed.value);
      } else if(parsed.type === 'latest history') {
        console.log('Received operations:', parsed.value);
        handle_network_operations_(parsed.value);
        done_processing_latest_history.resolve();
      } else {
        console.warn('Unrecognized message type (2):', parsed.type);
      }
    },
  });

  console.log({self_device_id});

  const {network_buffer: to_be_sent} = initialize_network_manager({send_encrypted_data});

  let ephemeral_data = {timestamp: 0, clock: 0};
  let main_data = {current: [], history: []};

  const initial_text = await compute_initial_text({send_encrypted_data, self_device_id, interlocutor_latest_history, main_data, ephemeral_data});

  console.log({initial_text});

  const {set_feedback_message, feedback_div} = make_feedback_div();

  const {textarea, set_value: set_textarea_value} = make_textarea({
    on_change: (change) => {
      const normalizeds = normalize_dom_change({main_data, change, ephemeral_data, self_device_id});
      for(const operation of normalizeds) {
        to_be_sent.push(operation);
        main_data.history.push(operation);
      }
      sort_history(main_data.history);
      const replayed = replay(main_data.history);
      save_replay({replayed, main_data, ephemeral_data});
      save_to_disk({main_data, ephemeral_data});
    },

    // TODO: implement proper undo and redo in this portion of the code
    // For now, we'll just disable:
    on_undo: () => {
      set_feedback_message("Undo/redo functionality hasn't been implemented yet and is currently disabled. Sorry!");
    },
    on_redo: () => {
      set_feedback_message("Undo/redo functionality hasn't been implemented yet and is currently disabled. Sorry!");
    },
  });

  set_textarea_value(initial_text);

  await done_processing_latest_history.promise;

  ui.main_page_body.innerText = '';

  ui.main_page_body.appendChild(textarea);
  ui.main_page_body.appendChild(feedback_div);
};

main();
