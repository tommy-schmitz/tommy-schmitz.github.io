import {StrictMode} from 'react';
import ReactDOM from 'react-dom';

import {use_player} from './Player';

console.log('working apoinmoinfape23oiw02456');

/*

      const start_timestamp = 3414;
      const end_timestamp = 3454;

      let playing = false;

      let colorer = null;
      const show = () => {
        if(colorer !== null)
          clearTimeout(colorer);
        setTimeout(() => {colorer = null; cover.style.backgroundColor = 'rgba(0,0,0,0)';}, 350);
      };
      const hide = () => {
        if(colorer !== null)
          clearTimeout(colorer);
        colorer = null;
        cover.style.backgroundColor = 'black';
      };

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        player.loadVideoById({
          videoId: 'Cn_lucBscH4',
          startSeconds: 3414,
          endSeconds: 3454,
          rel: 0,
          disablekb: '1',
          autoplay: '0',
        });

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

      let stopper = null;

      function onPlayerStateChange(event) {
        if(event.data === YT.PlayerState.PLAYING) {
          show();

          const current_timestamp = player.getCurrentTime();

          // Disallow playing portions of video that are earlier than the intended start time.
          if(current_timestamp < start_timestamp - 1)
            player.seekTo(start_timestamp, true);

          const appropriate_duration = end_timestamp - current_timestamp;

          // Plan to stop the video at the intended end time.
          if(stopper !== null)
            clearTimeout(stopper);
          stopper = setTimeout(() => {stopper = null; player.pauseVideo(); hide();}, 1000 * appropriate_duration);
        } else {
          hide();
        }
      }

      window.addEventListener('load', () => {
        play_button.addEventListener('click', () => {
          playing = true;
          player.playVideo();
          if(player.getCurrentTime() >= end_timestamp)
            player.seekTo(start_timestamp, true);
        });
        pause_button.addEventListener('click', () => {
          playing = false;
          player.pauseVideo();
          hide();
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
  const [player_ui, player] = use_player({
    on_ready: () => {
    },
    on_state_change: () => {
    },
  });

  return <>
    {player_ui}
    <br />
    <input  type="range"
            min="0" max="1" step="any"
            value="0"
            style={{
              width: '640px',
            }}
    />
    <br />
    <button id="play_button">Play</button>
    <button id="pause_button">Pause</button>
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
