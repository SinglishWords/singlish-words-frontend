export function startTimer() {
  return performance.now();
}

export function endTimer() {
  return performance.now();
}

/* This function calculates date time in Singapore in ISO format*/
export function currentDateTime() {
  let date = new Date(); 
  let isoDateTime = new Date(
    date.getTime() - date.getTimezoneOffset() * 60000
  ).toISOString();
  return isoDateTime;
}
