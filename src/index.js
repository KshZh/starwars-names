import uniqueRandomArray from "unique-random-array";

const names = [
  "4-LOM",
  "Aayla Secura",
  "Admiral Ackbar",
  "Admiral Ackbar",
  "Admiral Ackbar",
  "Admiral Ackbar"
];

export default {
  all: () => names,
  random: uniqueRandomArray(names)
};
