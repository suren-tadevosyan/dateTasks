let date = new Date("2020-05-14");

function formatDate(input) {
  const MonthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return `${input.getDate()} ${
    MonthNames[input.getMonth()]
  } ${input.getFullYear()} `;
}

console.log(formatDate(date));
