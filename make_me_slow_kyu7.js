function makeMeSlow() {
  console.log(new Date().getTime());
  setTimeout(() => {
    console.log(new Date().getTime());
  }, 7000);
}

makeMeSlow();

// https://www.codewars.com/kata/57f59da8d3978bb31f000152/train/javascript
