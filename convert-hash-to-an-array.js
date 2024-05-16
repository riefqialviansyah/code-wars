function solution(hash) {
  let result = [];

  for (key in hash) {
    result.push([key, hash[key]]);
  }

  return result;
}

// console.log(solution({ name: "Jeremy", age: 24, role: "Software Engineer" }));

// other solution
const convertHashToArray = (o) =>
  Object.entries(o).map((el) => {
    console.log(el);
  });
console.log(
  convertHashToArray({
    name: { xx: "Jeremy" },
    age: 24,
    role: "Software Engineer",
  })
);
