# Howzat – a cricket skin for Video.js v10

A custom skin built on the official `@videojs/html` components, streaming from Mux.

## Design thinking
Most skins borrow from hardware or glass. Howzat borrows from the cricket ground. The seek bar is the pitch, with stumps at both ends and a worn-in trail behind the playhead. The playhead is the ball, and the clock is an amber scoreboard. The player even talks like a commentator: PLAY BALL! before the start, DRINKS BREAK when paused, RAIN DELAY while buffering, and STUMPS! when the film ends. Everything sits on a solid dark-green panel, so controls stay readable over bright or dark footage.

## Features
- Play/pause/replay, seek bar with buffer, back/forward 10s, playback speed, time, volume/mute, fullscreen
- Keyboard: Space or K, F, M, arrow keys, plus a visible yellow focus ring
- 44px+ touch targets, compact layout on small players
- Reduced motion turns off the bouncing ball and all transitions
- Hover the pitch to preview the frame (Mux storyboard)
- Settings menu (quality, speed, captions) and a CC button that appears when captions exist
- Demo page can switch between two clips to check legibility over different footage
- Buffering, paused, ended and error states are all designed

## License
Apache License 2.0 (see LICENSE), as required by the challenge.

## Run
```bash
npm install
npm run dev
```

## Deploy
```bash
npm run build   # publish the dist folder on Netlify or Vercel
```
