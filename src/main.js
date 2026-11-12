import '@videojs/html/video/player';
import '@videojs/html/media/mux-video';
import '@videojs/html/ui/container';
import '@videojs/html/ui/controls';
import '@videojs/html/ui/controls-content';
import '@videojs/html/ui/controls-group';
import '@videojs/html/ui/play-button';
import '@videojs/html/ui/seek-button';
import '@videojs/html/ui/buffering-indicator';
import '@videojs/html/ui/time-slider';
import '@videojs/html/ui/slider-track';
import '@videojs/html/ui/slider-buffer';
import '@videojs/html/ui/slider-fill';
import '@videojs/html/ui/slider-thumb';
import '@videojs/html/ui/slider-preview';
import '@videojs/html/ui/slider-thumbnail';
import '@videojs/html/ui/slider-value';
import '@videojs/html/ui/time';
import '@videojs/html/ui/time-group';
import '@videojs/html/ui/time-separator';
import '@videojs/html/ui/mute-button';
import '@videojs/html/ui/volume-slider';
import '@videojs/html/ui/fullscreen-button';
import '@videojs/html/ui/hotkey';
import '@videojs/html/ui/status-announcer';
import '@videojs/html/ui/error-dialog';
import '@videojs/html/ui/dialog-popup';
import '@videojs/html/ui/dialog-title';
import '@videojs/html/ui/dialog-description';
import '@videojs/html/ui/dialog-close';
import '@videojs/html/ui/captions-button';
import '@videojs/html/ui/menu';
import '@videojs/html/ui/menu-content';
import '@videojs/html/ui/menu-item';
import '@videojs/html/ui/menu-radio-item';
import '@videojs/html/ui/menu-item-indicator';
import '@videojs/html/ui/quality-radio-group';
import '@videojs/html/ui/playback-rate-radio-group';
import '@videojs/html/ui/captions-radio-group';

// demo clip switch
const video = document.querySelector('mux-video');
const clips = document.querySelectorAll('.clip');
clips.forEach((btn) => {
  btn.addEventListener('click', () => {
    clips.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
    video.src = btn.dataset.src;
  });
});


// default playback speed
const DEFAULT_SPEED = 1;
const applySpeed = () => {
  video.defaultPlaybackRate = DEFAULT_SPEED;
  video.playbackRate = DEFAULT_SPEED;
};
applySpeed();
video.addEventListener('loadedmetadata', applySpeed);