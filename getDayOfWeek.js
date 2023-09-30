function getDay(input) {
  let date = new Date(input);
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let currDay = date.getDay();

  return daysOfWeek[currDay];
}

console.log(getDay("12/07/2016"));
console.log(getDay("09/04/2016"));
console.log(getDay("12/08/2011"));
