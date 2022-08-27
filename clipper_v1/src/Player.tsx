import {useEffect, useRef} from 'react';
import {ObjectId} from 'bson';

const make_oid = () => {
  return new ObjectId() + '';
};

const scripts = [
  'https://www.youtube.com/iframe_api',
];

for(const url of scripts) {
  const tag = document.createElement('script');
  tag.src = url;
  document.head.appendChild(tag);
}

const promise = new Promise<void>((resolve, reject) => {
  (window as any).onYouTubeIframeAPIReady = () => {
    resolve();
  };
});

const wait_for_scripts_to_load = () => {
  return promise;
};

export const use_player = ({on_ready, on_state_change} : {
        on_ready : ()=>void;
        on_state_change : (x:any)=>void;
      }) => {
  const ref = useRef<any>(null);

  useEffect(() => {
    (async() => {
      await wait_for_scripts_to_load();
      ref.current = new (window as any).YT.Player(div_id, {
        height: '390',
        width: '640',
//        videoId: '...',
        playerVars: {
          playsinline: 1,
          controls: 0,
        },
        events: {
          'onReady': on_ready,
          'onStateChange': on_state_change,
        }
      });
    })();
  });

  const div_id = make_oid();

  return [
    <div id={div_id} />,
    ref.current,
  ];
};
