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
  if(window.location.hostname === 'localhost') {
    return 'http://localhost:6003';
  } else {
    return 'https://relay-server-13u9.onrender.com';
  }
})();

const get_master_public_key = async(ui) => {
  const maybe_public_key = localStorage.getItem('master_public_key');
  if(maybe_public_key !== null) {
    return await window.crypto.subtle.importKey('jwk', JSON.parse(maybe_public_key), {name: "ECDSA", namedCurve: "P-384"}, true, ['verify']);
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
  return keys.publicKey;
};

const export_public_key = async(public_key) => {
  return JSON.stringify(await window.crypto.subtle.exportKey('jwk', public_key));
};

const page_load_promise = new Promise((resolve, reject) => (window.addEventListener('load', resolve)));

const main = async() => {
  console.log('Version 2025-08-01 16:31');
  const socket_io = await initialize_socket_io();
  const sock = socket_io(RELAY_SERVER_URL);
  sock.on('disconnect', () => {
    console.log('Disconnected.');
  });
  await new Promise((resolve, reject) => (sock.on('connect', resolve)));
  console.log('Connected.');

  await page_load_promise;

  const ui = initialize_ui();

  const public_key = await get_master_public_key(ui);
  const public_jwk_string = await export_public_key(public_key);

  await sock.emit('the id is', public_jwk_string);

  ui.main_page_body.innerHTML = 'Your public key is<br />';
  const readonly_textarea = document.createElement('textarea');
  readonly_textarea.setAttribute('readonly', '');
  Object.assign(readonly_textarea.style, {
    backgroundColor: '#dddddd',
    width: '800px',
    height: '40px',
  });
  readonly_textarea.innerText = public_jwk_string;
  ui.main_page_body.appendChild(readonly_textarea);
};

main();
