// Note to self: I don't like id_to_right for deletions.
// It really needs to specify deletions by id of deleted character, not by id of nearby character.
// It's also kinda sucky how many findIndex operations are required; maybe I need to use more of a linked list structure.

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
  console.log('tommy 1');
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
  console.log('digitally_sign return', {binary});
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
  console.log('digitally_sign', data);
  const temp = await window.crypto.subtle.sign({name: 'ECDSA', hash: {name: 'SHA-384'}},
                                               private_key, new TextEncoder().encode(JSON.stringify(data)));
  const bytes = new Uint8Array(temp);
  return encode_binary(bytes);
};

const check_signature = async(public_key, data, signature) => {
  console.log('check_signature', data, signature);
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

const filter_network_operations = ({network_operations, seen_id, self_device_id}) => {
  return network_operations.filter((item) => {
    const id = get_highest_op_id(item);
    return (id % 2 === self_device_id  &&  id > seen_id);
  });
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
    const clock = untrusted_change.one_id;
    const new_clock = (clock & -2) + (1 - self_device_id);
    return {...untrusted_change, one_id: new_clock};
  } else if(untrusted_change.type === 'remove') {
    const clock = untrusted_change.op_id;
    const new_clock = (clock & -2) + (1 - self_device_id);
    return {...untrusted_change, op_id: new_clock};
  } else {
    throw 1241;
  }
};

const filter_changes = ({changes, highest_ack_sent}) => {
  const result = changes.filter((item) => (get_highest_op_id(item) > highest_ack_sent));
  console.log('filtered changes', result);
  return result;
};

const get_highest_op_id = (item) => {
  if(item.type === 'add') {
    return item.one_id + 2 * (item.text.length - 1);
  } else if(item.type === 'remove') {
    return item.op_id;
  } else {
    throw 1245;
  }
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
      execute_network_operation({operation: sanitized_change, ephemeral_data, main_data: data});
      save_to_disk({main_data: data, ephemeral_data});
      highest_ack_sent = Math.max(highest_ack_sent, get_highest_op_id(sanitized_change));
    }
    send_encrypted_data({type: 'ack', value: highest_ack_sent});  // asynchronous action
    set_textarea_value(data.current.map(({c}) => (c)).join(''));
    const new_id_left_of_selection_start = possibly_follow_tombstones({ephemeral_data, id: id_left_of_selection_start});
    textarea.selectionStart = find_index_with_hint({array: data.current, index_hint: prev_selection_start,
                                                    filter: ({id}) => (id === new_id_left_of_selection_start)}) + 1;
    const new_id_left_of_selection_end   = possibly_follow_tombstones({ephemeral_data, id: id_left_of_selection_end  });
    textarea.selectionEnd   = find_index_with_hint({array: data.current, index_hint: prev_selection_end  ,
                                                    filter: ({id}) => (id === new_id_left_of_selection_end  )}) + 1;
  };
})();

const handle_ack = ({to_be_sent, ack}) => {
  to_be_sent.splice(0, to_be_sent.length, ...to_be_sent.filter((x) => (x.one_id > ack)));
};

const get_index_from_id = () => {
  throw 1238;
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

const execute_operation = ({state_1, state_2, operation: op}) => {
  if(op.type === 'add') {
    const {index, text, one_id, id_to_left} = op;
    state_2.clock = Math.max(state_2.clock, one_id + 2*(text.length-1));
    const new_elements = [...text].map((c, i) => ({id: (one_id + 2 * i), c}));
    push_child({ephemeral_data: state_2, parent_id: id_to_left, child_id: one_id});
    state_1.current.splice(index, 0, ...new_elements);
  } else if(op.type === 'remove') {
    const {index, text, op_id} = op;
    state_2.clock = Math.max(state_2.clock, op_id);
    const id_to_left = ((index === 0) ? 0 : state_1.current[index-1].id);
    for(let i=0; i<op.text.length; ++i)
      state_2.tombstones[state_1.current[index+i].id] = {id_to_left, deletion_id: op_id};
    state_1.current.splice(index, text.length);
  } else if(op.type === 'timestamp') {
    // Do nothing
  } else {
    throw 1237;
  }
  state_1.history.push(op);
};

const push_child = ({ephemeral_data, parent_id, child_id}) => {
  if(ephemeral_data.nodes[parent_id] === undefined)
    ephemeral_data.nodes[parent_id] = [];
  ephemeral_data.nodes[parent_id].unshift(child_id);
};

const delete_child = ({ephemeral_data, parent_id, child_id}) => {
  const children = ephemeral_data.nodes[parent_id];
  if(children[0] !== child_id) {
    throw 1248;
  } else if(children.length === 1) {
    delete ephemeral_data.nodes[parent_id];
  } else {
    children.shift();
  }
};

const undo_one_operation = ({state_1, state_2}) => {
  const op = state_1.history.pop();

  if(op.type === 'add') {
    const {index, text, one_id} = op;
    state_1.current.splice(index, text.length);
    const id_to_left = ((index === 0) ? 0 : state_1.current[index-1].id);
    delete_child({ephemeral_data: state_2, parent_id: id_to_left, child_id: one_id});
  } else if(op.type === 'remove') {
    const {index, text, one_id, op_id} = op;
    const new_elements = [...text].map((c, i) => ({id: (one_id + 2 * i), c}));
    const id_to_left = ((index === 0) ? 0 : state_1.current[index-1]);

    // Executing a 'remove' does not modify the tree structure; therefore, undoing a 'remove' does not modify it either.
//    const do_not_execute_this_code = () => {
//      push_child({ephemeral_data: state_2, parent_id: id_to_left, child_id: one_id});
//      for(let i=0; i<new_elements.length-1; ++i)
//        push_child({ephemeral_data: state_2, parent_id: new_elements[i].id, child_id: new_elements[i+1].id});
//    };

    state_1.current.splice(index, 0, ...new_elements);
    for(const elem of new_elements)
      delete state_2.tombstones[elem.id];
  } else if(op.type === 'timestamp') {
    // Do nothing
  } else {
    throw 1237;
  }
};

const replay = (history) => {
  console.log('replay()', {history});
  const state_1 = {current: [], history: []};
  const state_2 = {tombstones: {}, clock: 0, timestamp: 0, nodes: {}};
  const network_operations = [];
  for(const op of history) {
    network_operations.push(...generate_network_operations({normalizeds: [op], main_data: state_1}));
    execute_operation({state_1, state_2, operation: op});
  }
  console.log({state_1, state_2, network_operations});
  return {state_1, state_2, network_operations};
};

const normalize_dom_change = ({main_data, change, ephemeral_data, self_device_id}) => {
  const result = [];
  const {prev_value, removed, inserted, index, new_value} = change;
  let next_clock = (ephemeral_data.clock & -2) + 2 + self_device_id;
  if(typeof next_clock !== 'number' || next_clock !== next_clock)
    console.error({next_clock});
  if(removed !== '') {
    for(let i=0; i<removed.length; ++i) {
      const id = main_data.current[index + i].id;
      result.push({type: 'remove', text: removed[i], op_id: (next_clock += 2) - 2, index: index + i, one_id: id});
    }
  }
  if(inserted !== '') {
    const id_to_left = ((index === 0) ? 0 : main_data.current[index - 1].id);
    result.push({type: 'add', text: inserted, index, one_id: next_clock, id_to_left});
  }
  return result;
};

const possibly_follow_tombstones = ({ephemeral_data, id}) => {
  const breadcrumbs = [];
  while(true) {
    const tombstone = ephemeral_data.tombstones[id];
    if(tombstone === undefined) {
      for(const t of breadcrumbs)
        t.id_to_left = id;
      return id;
    }
    breadcrumbs.push(tombstone);
    id = tombstone.id_to_left;
  }
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

const execute_network_operation = ({operation: change, ephemeral_data, main_data}) => {
  if(change.type === 'add') {
    const {one_id, id_to_left, text, index_hint} = change;

    const children = ephemeral_data.nodes[id_to_left] || [0];

    if(children[0] > one_id) {
      const op_buffer = [];
      while((ephemeral_data.nodes[id_to_left]||[0])[0] > one_id) {
        const last_op = main_data.history.slice(-1)[0];
        op_buffer.push(last_op);
        undo_one_operation({state_1: main_data, state_2: ephemeral_data});
      }
      const index = find_index_with_hint({array: main_data.current, index_hint, filter: ({id}) => (id === id_to_left)}) + 1;
      execute_operation({operation: {type: 'add', text, index, one_id, id_to_left}, state_1: main_data, state_2: ephemeral_data});
      while(op_buffer.length > 0)
        execute_operation({state_1: main_data, state_2: ephemeral_data, operation: op_buffer.pop()});
    } else {
      const real_id_to_left = possibly_follow_tombstones({ephemeral_data, id: id_to_left});
      const index = find_index_with_hint({array: main_data.current, index_hint, filter: ({id}) => (id === real_id_to_left)}) + 1;
      execute_operation({operation: {type: 'add', text, index, one_id, id_to_left}, state_1: main_data, state_2: ephemeral_data});
    }
  } else if(change.type === 'remove') {
    const {op_id, ids, text} = change;
    let {index_hint} = change;
    let partial_op_1 = undefined;
    let partial_op_2 = undefined;
    let partial_op_3 = '';
    let partial_op_4 = undefined;
    ids.forEach((id_to_delete, i) => {
      const c = text[i];
      if(ephemeral_data.tombstones[id_to_delete])
        return;
      let index = find_index_with_hint({array: main_data.current, index_hint, filter: ({id}) => (id === id_to_delete)});
      if(index === -1) {
        console.error({index, id_to_delete, array: [...main_data.current], index_hint});
        throw 1236;
      }
      index_hint = index + 1;
      if(index === partial_op_2 + 1  &&  main_data.current[index].id === (partial_op_4 + 2 * (index - partial_op_1))) {
        partial_op_2 = index;
        partial_op_3 += c;
      } else {
        if(partial_op_1 !== undefined) {
          execute_operation({operation: {type: 'remove', index: partial_op_1, text: partial_op_3, op_id, one_id: partial_op_4},
                             state_1: main_data, state_2: ephemeral_data                                                       });
          if(index > partial_op_1)
            index -= partial_op_3.length;
        }
        partial_op_1 = partial_op_2 = index;
        partial_op_3 = c;
        partial_op_4 = main_data.current[index].id;
      }
    });
    if(partial_op_1 !== undefined) {
      execute_operation({operation: {type: 'remove', index: partial_op_1, text: partial_op_3, op_id, one_id: partial_op_4},
                         state_1: main_data, state_2: ephemeral_data                                                       });
    }
  } else {
    throw 1234;
  }
};

const generate_network_operations = ({normalizeds, main_data}) => {
  return normalizeds.map((nor_op) => {
    if(nor_op.type === 'add') {
      const {text, index, one_id, id_to_left} = nor_op;
      console.log({nor_op, id_to_left, text, index, one_id});
      return {type: 'add', id_to_left, text, index_hint: index, one_id};
    } else if(nor_op.type === 'remove') {
      const {text, index, op_id} = nor_op;
      const ids = main_data.current.slice(index, index + text.length).map(({id}) => (id));
      return {type: 'remove', ids, text, index_hint: index, op_id};
    } else {
      throw 1244;
    }
  });
};

const save_to_disk = ({main_data, ephemeral_data}) => {
  // Sanity check:
  const {network_operations, ...replayed} = replay(main_data.history);
  if(make_stable_string(replayed) !== make_stable_string({state_1: main_data, state_2: ephemeral_data}))
    throw (console.error({real: {main_data, ephemeral_data}, replayed}), 1235);

  localStorage.setItem('main_text_box_history', JSON.stringify(main_data.history));
};

const get_latest_id = ({history, self_device_id}) => {
  for(let i=history.length-1; i>=0; --i) {
    const item = history[i];
    if(item.type === 'add') {
      const device_id = item.one_id % 2;
      if(device_id === self_device_id)
        continue;
      return item.one_id + 2 * (item.text.length - 1);
    } else if(item.type === 'remove') {
      const device_id = item.op_id % 2;
      if(device_id === self_device_id)
        continue;
      return item.op_id;
    } else {
      continue;
    }
  }
};

const compute_initial_text = async({send_encrypted_data, self_device_id, interlocutor_latest_history, main_data: data, ephemeral_data}) => {
  const stored = localStorage.getItem('main_text_box_history');
  const stored_history = ((stored === null) ? [] : JSON.parse(stored));
  console.log({stored_history});
  send_encrypted_data({type: 'latest clock', value: get_latest_id({history: stored_history, self_device_id})});  // asynchronous action
  const other_latest_history_id = await interlocutor_latest_history.promise;
  console.log('about to replay');
  const replayed = replay(stored_history);
  send_encrypted_data({type: 'latest history', value: filter_network_operations({...replayed, seen_id: other_latest_history_id, self_device_id})});  // async
  data.history.splice(0, data.history.length, ...stored_history);
  data.current.splice(0, data.current.length, ...replayed.state_1.current);
  Object.assign(ephemeral_data.tombstones, replayed.state_2.tombstones);
  Object.assign(ephemeral_data.nodes, replayed.state_2.nodes);
  ephemeral_data.timestamp = replayed.state_2.timestamp;
  ephemeral_data.clock = replayed.state_2.clock;
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
        handle_network_operations_(parsed.value);
        done_processing_latest_history.resolve();
      } else {
        console.warn('Unrecognized message type (2):', parsed.type);
      }
    },
  });

  console.log({self_device_id});

  const to_be_sent = [];
  const {network_buffer: to_be_sent} = initialize_network_manager({send_encrypted_data});

  let ephemeral_data = {timestamp: 0, tombstones: {}, clock: 0, nodes: {}};
  let main_data = {current: [], history: []};

  const initial_text = await compute_initial_text({send_encrypted_data, self_device_id, interlocutor_latest_history, main_data, ephemeral_data});

  console.log({initial_text});

  const {set_feedback_message, feedback_div} = make_feedback_div();

  const {textarea, set_value: set_textarea_value} = make_textarea({
    on_change: (change) => {
      const normalizeds = normalize_dom_change({main_data, change, ephemeral_data, self_device_id});
      for(const operation of normalizeds) {
        to_be_sent.push(...generate_network_operations({normalizeds: [operation], main_data}));
        execute_operation({state_2: ephemeral_data, state_1: main_data, operation});
        save_to_disk({main_data, ephemeral_data});
      }
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

  console.log('creating textarea');
  ui.main_page_body.appendChild(textarea);
  ui.main_page_body.appendChild(feedback_div);
};

main();
