# RL-80

A 16-step drum machine that runs in the browser, inspired by 80s rhythm machines.

Every built-in drum plays real recordings of the original machine (see Credits), blended
between the recorded knob positions. While they load, sounds rebuilt from measurements of
the same recordings (`sounds.js`, in a background worker) stand in.

- 11 voices: kick, snare, three toms, rimshot, clap, closed and open hats, crash, ride
- Play the drums live by tapping them, with or without the sequencer running; Rec saves your taps into the pattern (from a blank one if you like), with an optional metronome and count-in
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
changes, so RL-80 is free and non-commercial. RL-80 plays these recordings for all its
built-in drums; the stand-in sounds in `sounds.js` are rebuilt from measurements of the same set.
