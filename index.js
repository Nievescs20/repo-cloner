const shell = require("shelljs");

//add your students github handles
const students = [
  "student-github",
  "student-github",
  "student-github",
  "student-github",
  "student-github",
  "student-github",
  "student-github",
  "student-github",
  "student-github",
  "student-github",
  "student-github",
  "student-github",
];
//change the name of checkpoint you're going to check
//these are the previous names of the checkpoints. possible that they may have changed

const checkpoints = [
  "Checkpoint.DOM",
  "Checkpoint-Node-Express",
  "Checkpoint-Pillars-v2",
  "Checkpoint-React-v2",
  "Checkpoint-Redux",
];

const checkpoint = checkpoints[0];

shell.exec(`mkdir ${checkpoint}`);

for (let student of students) {
  shell.exec(
    `git clone git@github.com:${student}/${checkpoint}.git ../${checkpoint}/${student}`
  );
}
