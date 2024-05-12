const quarterOf = (month) => {
  // Your code here
  return month >= 10 ? 4 : month >= 7 ? 3 : month >= 4 ? 2 : 1;
};

console.log(quarterOf(4));
