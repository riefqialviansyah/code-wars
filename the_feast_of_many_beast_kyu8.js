function feast(beast, dish) {
  //your function here
  return beast[0] == dish[0] && beast.slice(-1) == dish.slice(-1)
    ? true
    : false;
}

console.log(feast("great blue heron", "garlic naan"));
console.log(feast("chickadee", "chocolate cake"));
console.log(feast("brown bear", "bear claw"));
