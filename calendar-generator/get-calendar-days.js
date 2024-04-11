const fs = require("fs");

const monthNames = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
const dayNamesPrefixes = ["D", "L", "M", "M2", "J", "V", "S"];

/**
 * Creating a different file for every month
 *
 */
function createFileMonth(monthNumber) {
  const now = new Date(monthNumber + "-01-" + new Date().getFullYear());
  const month_name = monthNames[now.getMonth()];
  const _year = now.getFullYear();
  const _month = now.getMonth();
  const listOfDays = [];
  const endOfMonth = new Date(_year, _month + 1, 0);
  const dateInit = new Date(_year, _month, 1);
  const dateInit_clome = new Date(_year, _month, 1);

  console.log(`${dateInit.getMonth() + 1}-${month_name}.txt`);

  // using the clone_object we fill the days od the current month iteration
  for (dateInit_clome; dateInit_clome <= endOfMonth; dateInit_clome.setDate(dateInit_clome.getDate() + 1)) {
    listOfDays.push(new Date(dateInit_clome));
  }

  // Template: 1-Enero , 2-Febrero , 3-Marzo ... etc.
  const stream = fs.createWriteStream(`${dateInit.getMonth() + 1}-${month_name}.txt`);
  stream.once("open", (fd) => {
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
