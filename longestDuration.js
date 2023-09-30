function longestTime(hours, minutes, seconds) {
  let hoursToSeconds = hours * 3600;
  let minutesToSeconds = minutes * 60;

  let maxTime = Math.max(hoursToSeconds, minutesToSeconds, seconds);

  if (maxTime === hoursToSeconds) {
    return hours;
  } else if (maxTime === minutesToSeconds) {
    return minutes;
  }

  return seconds;
}

console.log(longestTime(1, 59, 3598));
console.log(longestTime(2, 300, 15000));
console.log(longestTime(15, 955, 59400));
