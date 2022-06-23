const shell = require("shelljs");

//add your students github handles
const students = [
  "vicantlop",
  "tpham187",
  "KristinLevine",
  "emrebsbydr",
  "Burkelbear",
  "hitgub8",
  "chrisru-dotcom",
  "leebrian33",
  "wattychen",
  "rgomez07",
  "mcombs289",
  "kevinliang327",
];
//change the name of checkpoint you're going to check
const checkpoint = "Checkpoint.DOM";

shell.exec(`mkdir ${checkpoint}`);

for (let student of students) {
  shell.exec(
    `git clone git@github.com:${student}/${checkpoint}.git ../${checkpoint}/${student}`
  );
}

//just run this file in node:)
