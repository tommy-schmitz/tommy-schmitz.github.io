import {StrictMode, useRef, useState} from 'react';
import ReactDOM from 'react-dom';

import {use_interval} from './util';
import {use_player} from './Player';

console.log('working apoinmoinfape23oiw02456');

      const start_timestamp = 969;
      const end_timestamp = 969 + 150;

/*
      let colorer = null;
      const show = () => {
        if(colorer !== null)
          clearTimeout(colorer);
        colorer = setTimeout(() => {colorer = null; cover.style.backgroundColor = 'rgba(0,0,0,0)';}, 350);
      };
      const hide = () => {
        if(colorer !== null)
          clearTimeout(colorer);
        colorer = null;
        cover.style.backgroundColor = 'black';
      };

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        setInterval(() => {
          const current_timestamp = player.getCurrentTime();
          const current_state = player.getPlayerState();
          if(current_state === YT.PlayerState.PLAYING) {
            slider.value = (current_timestamp - start_timestamp) / (end_timestamp - start_timestamp);
            if(current_timestamp > end_timestamp) {
              player.pauseVideo();
              hide();
            }
          }
        }, 500);
      }

      window.addEventListener('load', () => {
        play_button.addEventListener('click', () => {
        });
        pause_button.addEventListener('click', () => {
        });
//        stop_button.addEventListener('click', () => {
//          playing = false;
//          player.stopVideo();
//          hide();
//        });
        slider.addEventListener('input', () => {
          player.pauseVideo();
          player.seekTo(start_timestamp + slider.valueAsNumber * (end_timestamp - start_timestamp), false);
        });
        slider.addEventListener('change', () => {
          player.seekTo(start_timestamp + slider.valueAsNumber * (end_timestamp - start_timestamp), true);
          if(playing)
            player.playVideo();
        });
      });

*/





const App = () => {
  const playing = useRef<boolean>(false);
  const stopper = useRef<ReturnType<typeof setTimeout>|null>(null);

  const [is_covered, set_is_covered] = useState<boolean>(true);
  const show = () => (set_is_covered(true));
  const hide = () => (set_is_covered(false));

  const [slider_value, set_slider_value] = useState<number>(0);

  const [player_ui, player] = use_player({
    on_ready: () => {
      player.loadVideoById({
        videoId: 'aF9HeXg65AE',
        startSeconds: start_timestamp,
        endSeconds: end_timestamp,
        rel: 0,
        disablekb: '1',
        autoplay: '0',
      });
   },
    on_state_change: (event) => {
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
            backgroundColor: 'black',
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
