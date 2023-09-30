function myTimeout(fn, interval) {
  const startTime = new Date().getTime();
  let currTime = startTime;
  while (currTime - startTime < interval) {
    currTime = new Date().getTime();
  }

  fn(interval);
}

function callback(time) {
  console.log(`This function executed after ${time} seconds `);
  return `This function executed after ${time} seconds `;
}
console.log(myTimeout(callback, 2000));
