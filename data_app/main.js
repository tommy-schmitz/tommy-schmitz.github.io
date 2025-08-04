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

const history_since = (history, seen_id) => {
  const result = [];
  for(const item of history) {
    if(item.type === 'add') {
      const {one_id, text, id_to_left} = item;
      const max_id = one_id + 2 * (text.length - 1);
      if(max_id <= seen_id)
        continue;
      if(one_id > seen_id)
        result.push(item);
      result.push({type: 'add', one_id: seen_id + 2, text: text.slice((seen_id + 2 - one_id) / 2), id_to_left: seen_id});
    } else if(item.type === 'remove') {
      const {one_id, text, id_to_right} = item;
      const max_id = one_id + 2 * (text.length - 1);
      if(max_id <= seen_id)
        continue;
      if(one_id > seen_id)
        result.push(item);
      result.push({type: 'remove', one_id: seen_id + 2, text: text.slice(0, (one_id - seen_id - 2) / 2), id_to_right});
    } else if(item.type === 'timestamp') {
      // Do nothing
    } else if(item.type === 'device_id') {
      // Do nothing
    } else {
      throw 1239;
    }
  }
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
        console.log({parsed});
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

const handle_network_operations = (() => {
  let highest_ack_sent = 0;

  return ({changes, textarea, main_data: data}) => {
    const id_left_of_selection_start = ((textarea.selectionStart === 0) ? 0 : data.current[textarea.selectionStart].id);
    const id_left_of_selection_end   = ((textarea.selectionEnd   === 0) ? 0 : data.current[textarea.selectionEnd  ].id);
    for(const change of parsed.value.slice(seen_index + 1)) {
      process_change({ephemeral_data, main_data: data, change: {...change, id: (change.id & -2) + (1 - self_device_id)}});
      highest_ack_sent = Math.max(highest_ack_sent, change.id);
    }
    send_encrypted_data({type: 'ack', value: highest_ack_sent});  // asynchronous action
    textarea.value = data.current.map(({c}) => (c)).join('');
    textarea.selectionStart = get_index_from_id(id_left_of_selection_start);
    textarea.selectionEnd = get_index_from_id(id_left_of_selection_end);
  };
})();

const handle_ack = (ack) => {
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

const execute_operation = ({state, op}) => {
  if(op.type === 'add') {
    const {index, text, one_id} = op;
    state.device_id = one_id % 2;
    state.clock = Math.max(state.clock, one_id + 2*(text.length-1));
    const new_elements = [...text].map((c, i) => ({id: (one_id + 2 * 2), c}));
    state.current.splice(index, 0, ...new_elements);
  } else if(op.type === 'remove') {
    const {index, text, op_id} = op;
    state.device_id = one_id % 2;
    state.clock = Math.max(state.clock, one_id + 2*(text.length-1));
    const id_to_left = ((index === 0) ? 0 : state.current[index-1].id);
    for(let i=0; i<op.text.length; ++i)
      tombstones[state[index+i].id] = {id_to_left, deletion_id: op_id};
    state.current.splice(index, text.length);
  } else if(op.type === 'timestamp') {
    // Do nothing
  } else if(op.type === 'device_id') {
    // Do nothing
  } else {
    throw 1237;
  }
};

const replay = (history) => {
  console.log({history});
  const state = {
    current: [],
    tombstones: {},
    device_id: 0,
    clock: 0,
  };
  for(const op of history) {
    execute_operation({state, op});
  }
  return state;
};

const normalize_change = ({main_data: data, change}) => {
  const {prev_value, removed, inserted, index, new_value, clock} = change;
  const id_to_left = ((index === 0) ? 0 : data.current[index-1].id);
  const id_to_right = ((index+removed.length === prev_value.length) ? 0 : data.current[index+removed.length].id);
  return {
    id_to_left,
    remove: data.current.slice(index, removed.length).map(({id}) => (id)),
    add: [...inserted].map((c, i) => ({id: clock + 2*i, c})),
    clock,
  };
};

const process_change = ({ephemeral_data, main_data: data, change: {id_to_left, remove, add, clock}}) => {
  const index = data.current.findIndex((c) => (c.id === id_to_left)) + 1;
  const removed = data.current.slice(index, remove.length).map(({c}) => (c)).join('');
  const inserted = add.map(({c}) => (c)).join('');
  const now = Date.now();
  const device_id = clock % 2;
  const recent = data.history.slice(-1)[0];
  const maybe_mergeable = (
        (ephemeral_data.timestamp > now - 5000)
    &&  (ephemeral_data.device_id === device_id)
    &&  (recent.one_id !== undefined)
    &&  (clock === recent.one_id + 2 * recent.text.length)
  );
  const id_to_right = ((index+remove.length === data.current.length) ? 0 : data.current[index+remove.length].id);
  if(maybe_mergeable  &&  recent.type === 'remove'  &&  id_to_right === recent.id_to_right) {
    recent.text = removed + recent.text;
    if(inserted.length > 0)
      data.history.push({type: 'add', text: inserted, id_to_left, one_id: clock});
  } else if(maybe_mergeable  &&  recent.type === 'add'  &&  id_to_left === clock - 2) {
    recent.text += inserted;
    if(removed.length > 0)
      data.history.push({type: 'remove', text: removed, id_to_right, one_id: clock});
  } else {
    if(ephemeral_data.timestamp <= now - 5000) {
      data.history.push({type: 'timestamp', value: now});
      ephemeral_data.timestamp = now;
    }
    if(ephemeral_data.device_id !== device_id) {
      ephemeral_data.device_id = device_id;
    }
    if(removed.length > 0)
      data.history.push({type: 'remove', text: removed, id_to_right, clock});
    if(inserted.length > 0)
      data.history.push({type: 'add', text: inserted, id_to_left, clock});
  }
  for(let i=index; i<index+removed.length; ++i)
    ephemeral_data.tombstones[data.current[i].id] = id_to_left;
  const new_elements = [...inserted].map((c, i) => ({id: clock + 2*i, c}));
  data.current.splice(index, removed.length, ...new_elements);
  console.log(JSON.parse(JSON.stringify({data, ephemeral_data})));
  const replayed = replay(data.history);
  if(JSON.stringify(replayed.current) !== JSON.stringify(data.current))
    throw (console.error({data, replayed}), 1235);
  localStorage.setItem('main_text_box_history', JSON.stringify(data.history));
};

const get_latest_id = ({history, self_device_id}) => {
  for(let i=history.length-1; i>=0; --i) {
    const item = history[i];
    if(item.type === 'add'  ||  item.type === 'remove') {
      const device_id = item.one_id % 2;
      if(device_id === self_device_id)
        continue;
      return item.one_id + 2 * (item.text.length - 1);
    } else {
      continue;
    }
  }
};

const compute_initial_text = async({send_encrypted_data, self_device_id, interlocutor_latest_history}) => {
  const stored = localStorage.getItem('main_text_box_history');
  if(stored === null) {
    return '';
  } else {
    const stored_history = JSON.parse(stored);
    send_encrypted_data({type: 'latest history', value: get_latest_id({history: stored_history, self_device_id})});  // asynchronous action
    const other_latest_history_id = await interlocutor_latest_history.promise;
    send_encrypted_data(history_since(stored_history, other_latest_history_id));  // asynchronous action
    const replayed = replay(stored_history);
    data.history.splice(0, data.history.length, ...stored_history);
    data.current.splice(0, data.current.length, ...replayed.current);
    Object.assign(ephemeral_data.tombstones, replayed.tombstones);
    ephemeral_data.timestamp = replayed.timestamp;
    ephemeral_data.clock = replayed.clock;
    ephemeral_data.device_id = replayed.device_id;
    return data.current.map(({c}) => (c)).join('');
  }
};

const main = async() => {
  const socket_io = await initialize_socket_io();

  const ui = await initialize_ui();

  const interlocutor_latest_history = make_resolvable_promise();

  const {send_encrypted_data, self_device_id} = await get_encrypted_channel({
    ui,
    socket_io,
    interlocutor_latest_history,
    handle_decrypted_message: ({message: parsed}) => {
      if(parsed.type === 'changes') {
        handle_network_operation({changes: parsed.value, send_encrypted_data, textarea, main_data});
      } else if(parsed.type === 'ack') {
        handle_ack(parsed.value);
      } else if(parsed.type === 'latest history') {
        interlocutor_latest_history.resolve(parsed.value);
      } else {
        console.warn('Unrecognized message type (2):', parsed.type);
      }
    },
  });

  console.log({self_device_id});

  const to_be_sent = [];
  (async() => {
    while(true) {
      if(to_be_sent.length > 0)
        await send_encrypted_data({type: 'changes', value: to_be_sent});
      await sleep(1000);
    }
  })();

  let ephemeral_data = {timestamp: Date.now(), tombstones: {}, device_id: 0, clock: 0};
  let main_data = {current: [], history: [{type: 'timestamp', value: Date.now()}]};

  const initial_text = await compute_initial_text({send_encrypted_data, self_device_id, interlocutor_latest_history});

  const {textarea, set_value: set_textarea_value} = make_textarea(({prev_value, removed, inserted, index, new_value}) => {
    const normalized = normalize_change(change);
    to_be_sent.push(normalized);
    process_change(normalized);
  });

  set_textarea_value(initial_text);

  ui.main_page_body.innerText = '';

  set_textarea_value;

  ui.main_page_body.appendChild(textarea);
};

main();
