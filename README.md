# RL-80

A 16-step drum machine that runs in the browser, inspired by 80s rhythm machines.

Most built-in sounds are rebuilt from measurements of a real vintage drum machine
(pitch sweeps, ringing tones and noise loudness over time), generated on the device by
`sounds.js` in a background worker. The toms play real recordings (see Credits).

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

## Credits and licence of the included samples

`samples/aminet-tr909/` is the free **Roland TR-909 Sample Set** (Rob Roy Recordings, 1995,
by Jason Baker; from machines.hyperreal.org, distributed on Aminet as `mods/smpl/tr-909`),
included complete and unmodified with its own text file (`tr909set.txt`) and the Aminet
readme. Its terms allow free copying and distribution but not for profit and not with
changes, so RL-80 is free and non-commercial. RL-80 uses its tom recordings; the other
files are kept so the set stays complete. The measurements behind the other built-in
sounds were taken from the same set.
