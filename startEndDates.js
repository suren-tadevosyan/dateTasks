function monthsInterval(startDate, endDate) {
  const months = [
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

  const result = [];

  let currentMonth = startDate.getMonth();
  let currentYear = startDate.getFullYear();

  while (
    currentYear < endDate.getFullYear() ||
    (currentYear === endDate.getFullYear() &&
      currentMonth <= endDate.getMonth())
  ) {
    let addMonth = months[currentMonth];
    if (!result.includes(addMonth)) {
      result.push(addMonth);
    }
    currentMonth++;
    if (currentMonth === 12) {
      currentMonth = 0;
      currentYear++;
    }
  }

  return result.sort((a, b) => months.indexOf(a) - months.indexOf(b));
}

const january2016 = new Date(2016, 0, 1);
const january2017 = new Date(2017, 0, 1);
console.log(monthsInterval(january2016, january2017));

const december = new Date(2017, 11, 1);
const januaryNextYear = new Date(2018, 0, 1);
console.log(monthsInterval(december, januaryNextYear));
