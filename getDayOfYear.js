let date1 = "12/13/2020";
let date2 = "12/17/2020";
let date3 = "11/16/2020";
let date4 = "1/9/2019";
let date5 = "12/31/2000";
function getDayOfYear(date) {
  let dateArr = date.split("/");
  let year = +dateArr[2];
  let month = +dateArr[0];
  let day = +dateArr[1];

  let currDate = new Date(year, month - 1, day);
  let startOfYear = new Date(year, 0, 1);

  let millsInDay = 24 * 60 * 60 * 1000;

  const dayOfYear = Math.floor((currDate - startOfYear) / millsInDay) + 1;

  return dayOfYear;
}

console.log(getDayOfYear(date1));
console.log(getDayOfYear(date2));
console.log(getDayOfYear(date3));
console.log(getDayOfYear(date4));
console.log(getDayOfYear(date5));
