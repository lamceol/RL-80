# RL-80

A 16-step drum machine that runs in the browser, inspired by 80s rhythm machines.

Every built-in sound is rebuilt from measurements of a real vintage drum machine
(pitch sweeps, ringing tones and noise loudness over time). No audio recordings are
stored: the sounds are generated on the device by `sounds.js` in a background worker.

- 11 voices: kick, snare, three toms, rimshot, clap, closed and open hats, crash, ride
- 909-style knobs: kick Tune / Attack / Decay, snare Tune / Tone / Snappy, toms Tune / Decay
- 16-step sequencer, accent track, four pattern banks
- Swing (16ths or 8ths), groove templates, groove amount and humanise
- Built-in mix: a little extra bass, punch, warmth and room, in stereo
- Mute and solo per drum
- Load your own sample onto any drum (kept on the device)
- Export the loop as MIDI or stereo WAV
- Back up and restore patterns, settings and samples as one file
- Works offline once loaded

Play it: https://lamceol.github.io/RL-80/

On iPhone, open it in Safari and use Share → Add to Home Screen for a full-screen app.
