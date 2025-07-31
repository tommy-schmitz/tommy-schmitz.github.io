const initialize_simple_peer = async() => {
  console.log('initializing "simple-peer"');

  if(window.SimplePeer) {
    console.warn('Skipping initializing "simple-peer". (Unexpectedly, it looks like "simple-peer" is already initialized.)');
  } else {
    const script = document.createElement('script');
    const promise = new Promise((resolve, reject) => (script.onload = resolve));
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/simple-peer/9.11.1/simplepeer.min.js";
    document.head.appendChild(script);
    await promise;
    console.log('initialized "simple-peer"');
  }
};

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
};

const render_ui = async() => {
  await new Promise((resolve, reject) => (window.addEventListener('load', resolve)));

  document.body.innerText = `\
    test
    
    updated 2025-07-30 19:31
  `;
};

const main = async() => {
  await initialize_simple_peer();
  await initialize_socket_io();
  await render_ui();
};

main();
