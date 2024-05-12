// https://www.codewars.com/kata/58ee4db3e479611e6f000086/train/javascript

function bitMarch(n) {
  let result = [];
  let count = 9 - n;
  for (let i = 0; i < 8; i++) {
    let lastStep = result[result.length - 1];
    count--;
    if (lastStep && lastStep[0] == 1) {
      break;
    } else {
      let tmpCount = 0;
      result.push(
        Array(8)
          .fill(0)
          .map((el, idx) => {
            if (idx >= count && tmpCount < n) {
              tmpCount++;
              return 1;
            }
            return el;
          })
      );
    }
  }
  return result;
}

console.log(bitMarch(2));
