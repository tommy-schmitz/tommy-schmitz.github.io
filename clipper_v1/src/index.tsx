import {StrictMode, useRef, useState} from 'react';
import ReactDOM from 'react-dom';

import {use_timeout, use_interval} from './util';
import {use_player} from './Player';

console.log('working 27');

const start_timestamp = 957;
const end_timestamp = 969 + 150;

const App = () => {
  const playing = useRef<boolean>(false);
  const stopper = useRef<ReturnType<typeof setTimeout>|null>(null);

  const [is_covered, set_is_covered] = useState<boolean>(true);
  const [cover_background_color, set_cover_background_color] = useState<string>('black');
  const show = () => (set_is_covered(true));
  const hide = () => {
    set_is_covered(false)
    set_cover_background_color('black');
  };
  use_timeout({
    compute_delay: () => {
      if(is_covered) {
        return null;
      } else {
        return 350;
      }
    },
    callback: () => {set_cover_background_color('rgba(0,0,0,0)');},
  }, [is_covered, set_cover_background_color]);

  const [slider_value, set_slider_value] = useState<number>(0);

  const [player_ui, player] = use_player({
    on_ready: (player) => {
      console.log('tommy 28');
      player.loadVideoById({
        videoId: 'aF9HeXg65AE',
        startSeconds: start_timestamp,
        endSeconds: end_timestamp,
        rel: 0,
        disablekb: '1',
        autoplay: '0',
      });
    },
    on_state_change: (player, event) => {
      if(event.data === (window as any).YT.PlayerState.PLAYING) {
        show();

        const current_timestamp = player.getCurrentTime();

        // Disallow playing portions of video that are earlier than the intended start time.
        if(current_timestamp < start_timestamp - 1)
          player.seekTo(start_timestamp, true);

        const appropriate_duration = end_timestamp - current_timestamp;

        // Plan to stop the video at the intended end time.
        if(stopper.current !== null)
          clearTimeout(stopper.current);
        stopper.current = setTimeout(() => {stopper.current = null; player.pauseVideo(); hide();}, 1000 * appropriate_duration);
      } else {
        hide();
      }
    },
  });

  use_interval({
    compute_phase_shift: () => (0),
    compute_wavelength: () => {
      if(player === null) {
        return null;
      } else {
        return 500;
      }
    },
    callback: () => {
      const current_timestamp = player.getCurrentTime();
      const current_state = player.getPlayerState();
      if(current_state === (window as any).YT.PlayerState.PLAYING) {
        set_slider_value((current_timestamp - start_timestamp) / (end_timestamp - start_timestamp));
        if(current_timestamp > end_timestamp) {
          player.pauseVideo();
          hide();
        }
      }
    },
  }, [player]);
 
  return <>
    {player_ui}
    <br />
    <input  type="range"
            min="0" max="1" step="any"
            value={slider_value + ''}
            style={{
              width: '640px',
            }}
            onInput={() => {
              player.pauseVideo();
              player.seekTo(start_timestamp + slider_value * (end_timestamp - start_timestamp), false);
            }}
            onChange={() => {
              player.seekTo(start_timestamp + slider_value * (end_timestamp - start_timestamp), true);
              if(playing.current)
                player.playVideo();
            }}
    />
    <br />
    <button onClick={() => {
            playing.current = true;
            player.playVideo();
            if(player.getCurrentTime() >= end_timestamp)
              player.seekTo(start_timestamp, true);
          }}>
      Play
    </button>
    <button onClick={() => {
            playing.current = false;
            player.pauseVideo();
            hide();
          }}>
      Pause
    </button>
    {//<button id="stop_button">Stop</button>
    }
    <div  id="cover"
          style={{
            backgroundColor: 'transparent', //cover_background_color,
            pointerEvents: 'none',
            position: 'absolute',
            left: '8px',
            top: '8px',
            width: '640px',
            height: '390px',
          }}
    />
  </>;
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
