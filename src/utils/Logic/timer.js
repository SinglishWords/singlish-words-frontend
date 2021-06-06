function start() {
  startTime = performance.now();
}

function end() {
  endTime = performance.now();
  const timeDiff = (endTime - startTime) / 1000;
  console.log(timeDiff + " seconds");
}

function sleep(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

let myAsyncFunc = async function () {
  console.log("Sleeping");
  await sleep(100);
  console.log("Done");
  end();
};

start();
myAsyncFunc();
