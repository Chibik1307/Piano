const noteNames = [
  "A",
  "Ab",
  "B",
  "Bb",
  "C",
  "D",
  "Db",
  "E",
  "Eb",
  "F",
  "G",
  "Gb",
];

const notes = noteNames.reduce((acc, cur) => {
  acc.push({
    note: cur,
    audio: new Audio(`./Audio/${cur}.mp3`),
    elem: document.getElementsByClassName(cur),
  });
  return acc;
}, []);

notes.forEach((el) => {
  for (const key of el.elem) {
    key.addEventListener("mouseenter", () => el.audio.play());
  }
});
