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

const initialize_ui = () => {
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

const main = async() => {
  console.log('Version 2025-08-01 16:31');
  const socket_io = await initialize_socket_io();
  const sock = socket_io(RELAY_SERVER_URL);
  sock.on('disconnect', () => {
    console.log('Disconnected.');
  });
  const interlocutor_available_promise = new Promise((resolve, reject) => (sock.on('interlocutor is available', resolve)));
  const real_connect_promise = new Promise((resolve, reject) => (sock.on('real_connect', resolve)));
  await new Promise((resolve, reject) => (sock.on('connect', resolve)));
  await real_connect_promise;
  console.log('Connected.');

  await page_load_promise;

  const ui = initialize_ui();

  const {master_private_key, master_public_key, partner_key} = await get_keys({ui, sock});

  const temp_keys = await window.crypto.subtle.generateKey({name: "ECDH", namedCurve: "P-384"}, false, ['deriveKey']);

  let symmetric_key = undefined;

  const send_encrypted_data = async(data) => {
    const plaintext = JSON.stringify(data);
    const ciphertext = await encrypt(symmetric_key, plaintext);
    sock.emit('interlocutor should hear', {type: 'encrypted', ciphertext});
  };

  let latest_ack = null;

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
          sock.emit('interlocutor should hear', {type: 'encrypted', ciphertext: await encrypt(symmetric_key, 'foo ' + Math.random())});
        } else {
          console.log('invalid signature');
        }
      } else if(message.type === 'encrypted') {
        const plaintext = await decrypt(symmetric_key, message.ciphertext);
        const parsed = JSON.parse(plaintext);
        console.log({parsed});
        if(parsed.type === 'changes') {
          let seen_index = parsed.value.length - 1;
          for(; seen_index>=0; --seen_index)
            if(JSON.stringify(parsed.value[seen_index]) === JSON.stringify(latest_ack))
              break;
          const id_left_of_selection_start = ((textarea.selectionStart === 0) ? 0 : data.current[textarea.selectionStart].id);
          const id_left_of_selection_end   = ((textarea.selectionEnd   === 0) ? 0 : data.current[textarea.selectionStart].id);
          for(const change of parsed.value.slice(seen_index + 1))
            process_change({...change, device_id: 1-self_device_id});
          latest_ack = parsed.value.slice(-1)[0];
          send_encrypted_data({type: 'ack', value: latest_ack});  // asynchronous action
          textarea.value = data.current.map(({c}) => (c)).join('');
          textarea.selectionStart = ((ephemeral_data.tombstones[id_left_of_selection_start] !== undefined) ? ephemeral_data.tombstones[id_left_of_selection_start] : data.current.findIndex((c) => (c.id === id_left_of_selection_start)) + 1);
          textarea.selectionEnd = ((ephemeral_data.tombstones[id_left_of_selection_end] !== undefined) ? ephemeral_data.tombstones[id_left_of_selection_end] : data.current.findIndex((c) => (c.id === id_left_of_selection_end)) + 1);
        } else if(parsed.type === 'ack') {
          const ack = parsed.value;
          let acked_index = to_be_sent.length - 1;
          for(; acked_index>=0; --acked_index)
            if(JSON.stringify(to_be_sent[acked_index]) === JSON.stringify(ack))
              break;
          to_be_sent.splice(0, acked_index + 1);
        } else {
          console.warn('Unrecognized message type (2):', parsed.type);
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

  const self_device_id = await (async() => {
    const mk = await export_public_key(master_public_key);
    const pk = await export_public_key(partner_key);

    if(mk === pk)
      throw new Error('Cannot compute device_id: both users are using the same public key');

    if(mk === [mk, pk].sort()[0]) {
      return 0;
    } else {
      return 1;
    }
  })();
  console.log({self_device_id});

  function replay(history) {
    const state = [];
    let device_id = 0;
    const next_ids = [2, 1];
    const tombstones = {};
    for(let op of history) {
      if(op.type === 'device_id') {
        device_id = op.value;
      } else if(op.type === 'add') {
        const idx = state.findIndex(c => c.id === op.id_to_left);
        const pos = idx === -1 ? 0 : idx + 1;
        const chars = [...op.text].map((c, i) => ({
          id: (next_ids[device_id] += 2) - 2,
          c
        }));
        state.splice(pos, 0, ...chars);
      } else if (op.type === 'remove') {
        if(op.id_to_right === 0) {
          const idx = state.length - op.text.length;
          const id_to_left = ((idx === 0) ? 0 : state[idx-1].id);
          for(let i=idx; i<idx+op.text.length; ++i)
            tombstones[state[i].id] = id_to_left;
          state.splice(idx, op.text.length);
        } else {
          const idx = state.findIndex(c => c.id === op.id_to_right);
          const id_to_left = ((idx === 0) ? 0 : state[idx-1].id);
          for(let i=idx; i<idx+op.text.length; ++i)
            tombstones[state[i].id] = id_to_left;
          if(idx > 0) {
            state.splice(idx - op.text.length, op.text.length);
          } else {
            throw 1236;
          }
        }
      } else if(op.type === 'timestamp') {
        // Do nothing
      } else {
        throw 1237;
      }
    }
    return {current: state, device_id, next_ids, tombstones};
  }

  const to_be_sent = [];
  const normalize_change = (change) => {
    const {prev_value, removed, inserted, index, new_value, device_id} = change;
    const id_to_left = ((index === 0) ? 0 : data.current[index-1].id);
    const id_to_right = ((index+removed.length === prev_value.length) ? 0 : data.current[index+removed.length].id);
    return {
      id_to_left,
      device_id,
      remove: data.current.slice(index, removed.length).map(({id}) => (id)),
      add: [...inserted].map((c, i) => ({id: ephemeral_data.next_ids[device_id] + 2*i, c})),
    };
  };
  (async() => {
    while(true) {
      if(to_be_sent.length > 0)
        await send_encrypted_data({type: 'changes', value: to_be_sent});
      await sleep(1000);
    }
  })();

  let ephemeral_data = {timestamp: Date.now(), device_id: 0, next_ids: [2, 1], tombstones: {}};
  let data = {current: [], history: [{type: 'timestamp', value: Date.now()}]};
  const process_change = ({id_to_left, remove, add, device_id}) => {
    const index = data.current.findIndex((c) => (c.id === id_to_left)) + 1;
    const removed = data.current.slice(index, remove.length).map(({c}) => (c)).join('');
    const inserted = add.map(({c}) => (c)).join('');
    const now = Date.now();
    const maybe_mergeable = ((ephemeral_data.timestamp > now - 5000) && (ephemeral_data.device_id === device_id));
    const id_to_right = ((index+remove.length === data.current.length) ? 0 : data.current[index+remove.length].id);
    const recent = data.history.slice(-1)[0];
    if(maybe_mergeable  &&  recent.type === 'remove'  &&  id_to_right === recent.id_to_right) {
      recent.text = removed + recent.text;
      if(inserted.length > 0)
        data.history.push({type: 'add', text: inserted, id_to_left});
    } else if(maybe_mergeable  &&  recent.type === 'add'  &&  id_to_left === ephemeral_data.next_ids[device_id] - 2) {
      recent.text += inserted;
      if(removed.length > 0)
        data.history.push({type: 'remove', text: removed, id_to_right});
    } else {
      if(ephemeral_data.timestamp <= now - 5000) {
        data.history.push({type: 'timestamp', value: now});
        ephemeral_data.timestamp = now;
      }
      if(ephemeral_data.device_id !== device_id) {
        data.history.push({type: 'device_id', value: device_id});
        ephemeral_data.device_id = device_id;
      }
      if(removed.length > 0)
        data.history.push({type: 'remove', text: removed, id_to_right});
      if(inserted.length > 0)
        data.history.push({type: 'add', text: inserted, id_to_left});
    }
    for(let i=index; i<index+removed.length; ++i)
      ephemeral_data.tombstones[data.current[i].id] = id_to_left;
    const new_elements = [...inserted].map((c) => ({id: ((ephemeral_data.next_ids[device_id] += 2) - 2), c}));
    data.current.splice(index, removed.length, ...new_elements);
    console.log(JSON.parse(JSON.stringify({data, ephemeral_data})));
    const replayed = replay(data.history);
    if(JSON.stringify(replayed.current) !== JSON.stringify(data.current))
      throw (console.error({data, replayed}), 1235);
    localStorage.setItem('main_text_box_history', JSON.stringify(data.history));
  };

  const send_change = async({prev_value, removed, inserted, index, new_value, device_id}) => {
    
    send_encrypted_data({type: 'change', more_stuff});
  };

  const textarea = document.createElement('textarea');
  let prev_value = (() => {
    const stored = localStorage.getItem('main_text_box_history');
    if(stored === null) {
      return '';
    } else {
      const stored_history = JSON.parse(stored);
      const replayed = replay(stored_history);
      data.history.splice(0, data.history.length, ...stored_history);
      data.current.splice(0, data.current.length, ...replayed.current);
      Object.assign(ephemeral_data.tombstones, replayed.tombstones);
      ephemeral_data.timestamp = replayed.timestamp;
      ephemeral_data.next_ids.splice(0, ephemeral_data.next_ids.length, ...replayed.next_ids);
      ephemeral_data.device_id = replayed.device_id;
      return data.current.map(({c}) => (c)).join('');
    }
  })();
  textarea.value = prev_value;
  let start;
  let end;
  textarea.addEventListener('beforeinput', (ev) => {
    console.log({ev, value: ev.target.value, target_ranges: ev.getTargetRanges(), selection_start: ev.target.selectionStart, inputType: ev.inputType});
    if(ev.inputType === 'deleteContentBackward'  &&  textarea.selectionStart === textarea.selectionEnd) {
      start = Math.max(0, textarea.selectionStart - 1);
      end = textarea.selectionStart;
    } else if(ev.inputType === 'deleteContentForward'  &&  textarea.selectionStart === textarea.selectionEnd) {
      start = textarea.selectionStart;
      end = Math.min(textarea.selectionStart + 1, textarea.value.length);
    } else {
      start = textarea.selectionStart;
      end = textarea.selectionEnd;
    }
  });
  textarea.addEventListener('input', (e) => {
    const new_value = textarea.value;
    const removed = prev_value.slice(start, end);
    const inserted = new_value.slice(start, start + (new_value.length - prev_value.length + removed.length));
    const expected_new_value = prev_value.slice(0, start) + inserted + prev_value.slice(end);
    if(expected_new_value !== new_value)
      throw (console.error({prev_value, start, end, removed, inserted, expected_new_value, new_value}), 1234);
    //console.log({removed, inserted, at: start});

    const change = {prev_value, removed, inserted, index: start, new_value, device_id: self_device_id};
    const normalized = normalize_change(change);
    to_be_sent.push(normalized);
    process_change(normalized);
    prev_value = new_value;
  });

  ui.main_page_body.innerText = '';
  ui.main_page_body.appendChild(textarea);
};

main();
