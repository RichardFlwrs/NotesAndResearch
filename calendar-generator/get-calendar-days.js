const fs = require("fs");
const path = require("path");

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const dayNamesPrefixes = ["D", "L", "M", "M2", "J", "V", "S"];

const year = new Date().getFullYear();
const yearDir = path.join(__dirname, String(year));
fs.mkdirSync(yearDir, { recursive: true });

/**
 * Creating a different file for every month
 *
 */
function createFileMonth(monthNumber) {
  const monthIndex = monthNumber - 1;
  const month_name = monthNames[monthIndex];
  const listOfDays = [];
  const endOfMonth = new Date(year, monthNumber, 0);
  const dateInit_clome = new Date(year, monthIndex, 1);

  const monthDirName = `${monthNumber}-${month_name}`;
  const monthDir = path.join(yearDir, monthDirName);
  fs.mkdirSync(monthDir, { recursive: true });

  const fileName = `${year}-${month_name}.txt`;
  const filePath = path.join(monthDir, fileName);
  console.log(path.join(monthDirName, fileName));

  // using the clone_object we fill the days of the current month iteration
  for (; dateInit_clome <= endOfMonth; dateInit_clome.setDate(dateInit_clome.getDate() + 1)) {
    listOfDays.push(new Date(dateInit_clome));
  }

  // Template: 1-January/2026-January.txt , 2-February/2026-February.txt ... etc.
  const stream = fs.createWriteStream(filePath);
  stream.once("open", () => {
    stream.write(`Mes: ${month_name} \n`);
    stream.write(`\n`);

    listOfDays.forEach((_dayDate) => {
      const d = dayNamesPrefixes[_dayDate.getDay()];
      const n = _dayDate.getDate();
      stream.write(`{${d}}(${n}) . \n`);
      if (d == "D") stream.write(`--- \n`);
    });
    stream.end();
  });
}

for (let i = 1; i < 13; i++) {
  createFileMonth(i);
}
