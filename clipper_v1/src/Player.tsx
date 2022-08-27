import {useEffect, useState} from 'react';
import {ObjectId} from 'bson';

import {use_prop_getter} from './util';

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
        on_ready : (player:any)=>void;
        on_state_change : (player:any, ev:any)=>void;
      }) => {
  const [player, set_player] = useState<any>(null);

  const get_most_recent_on_ready = use_prop_getter(on_ready);
  const get_most_recent_on_state_change = use_prop_getter(on_state_change);

  useEffect(() => {
    (async() => {
      await wait_for_scripts_to_load();

      let player : any = null;

      const on_ready_ = () => (get_most_recent_on_ready()(player));
      const on_state_change_ = (ev:any) => (get_most_recent_on_state_change()(player, ev));

      player = new (window as any).YT.Player(div_id, {
        height: '390',
        width: '640',
//        videoId: '...',
        playerVars: {
          playsinline: 1,
          controls: 0,
        },
        events: {
          'onReady': on_ready_,
          'onStateChange': on_state_change_,
        }
      });
      set_player(player);
    })();
  }, []);

  const div_id = make_oid();

  return [
    <div id={div_id} />,
    player,
  ];
};
