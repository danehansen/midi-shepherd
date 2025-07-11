import { MidiRange, OCTAVE_SIZE } from "./const";
import { Pitch } from "./types";

// TODOD: determine max length for all notes and max length for piano range
export default function getOctavesOfPitch(pitch: Pitch): Pitch[] {
  const lowestNote = pitch % OCTAVE_SIZE;
  const pitchs: Pitch[] = [];
  for (let i = lowestNote; i <= MidiRange.HIGH; i += OCTAVE_SIZE) {
    pitchs.push(i);
  }
  return pitchs;
}

export function getMajorChordOfNote(pitch: Pitch): Pitch[] {
  const pitchs: Pitch[] = [pitch, pitch + 4, pitch + 7];
  return pitchs;
}

export function getMinorChordOfNote(pitch: Pitch): Pitch[] {
  const pitchs: Pitch[] = [pitch, pitch + 3, pitch + 7];
  return pitchs;
}