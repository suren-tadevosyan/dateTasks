let date = new Date(2023, 8, 28);

// function getWeekOfMonth(inp){

// }

const getWeekOfMonth = (date) => {
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const diff = date.getDate() + firstDayOfMonth.getDay() - 1;
  return Math.ceil(diff / 7);
};

console.log(getWeekOfMonth(date));
