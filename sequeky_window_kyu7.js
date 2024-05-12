// let resutl = [];

// function solution(widow, k) {
//   for (let i = 0; i < widow.length; i++) {
//     const tmp = widow.slice(i, i + k);
//     if (tmp.length < k) {
//       break;
//     }

//     resutl.push(Math.max(...tmp));
//   }
// }

const data = [1, 3, -1, -3, 5, 3, 6, 7];
// solution(data, 3);

function sliding(nums, k) {
  k--;
  return nums.reduce((t, x, i) => {
    // console.log(t, x, i, k, "<<<<<<");
    if (i >= k) {
      //   console.log(nums.slice(i - k, i + 1));
      t.push(Math.max(...nums.slice(i - k, i + 1)));
    }
    return t;
  }, []);
}

console.log(sliding(data, 3));

console.log(data.slice(0, 3));
