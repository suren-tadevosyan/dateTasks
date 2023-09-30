function zeroInStart(number) {
  return number < 10 ? `0${number}` : `${number}`;
}

function threeDaysAgo(date) {
  let currDateMills = date.getTime();
  let threeDayMills = 3 * 24 * 60 * 60 * 1000;

  let threeDays = currDateMills - threeDayMills;

  const threeDaysAgoDate = new Date(threeDays);

  const year = threeDaysAgoDate.getFullYear();
  const month = zeroInStart(threeDaysAgoDate.getMonth() + 1);
  const day = zeroInStart(threeDaysAgoDate.getDate());

  return `${year}-${month}-${day}`;
}

console.log(threeDaysAgo(new Date(2018, 0, 1)));
console.log(threeDaysAgo(new Date(2015, 5, 17)));
console.log(threeDaysAgo(new Date(1965, 3, 15)));
console.log(threeDaysAgo(new Date(1965, 3, 10)));
