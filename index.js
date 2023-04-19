// С помощью setInterval

function printNumbers(from, to) {
  let intervalId = setInterval(() => {
    console.log(from);
    if (from === to) {
      clearInterval(intervalId);
    }
    from++;
  }, 1000);
}
printNumbers(1, 5);

// С помощью рекурсивного setTimeout

function printNumbersRecursive(from, to) {
  let timerId = setTimeout(function start() {
    console.log(from);
    if (from < to) {
      timerId = setTimeout(start, 1000);
    }
    from++;
  }, 1000);
}
printNumbersRecursive(1, 5);