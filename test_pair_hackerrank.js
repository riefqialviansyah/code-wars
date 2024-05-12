function taskOfPairing(freq) {
  let allDumbbells = [];
  for (let i = 0; i < freq.length; i++) {
    allDumbbells = allDumbbells.concat(Array(freq[i]).fill(i + 1));
  }
  let pairs = [];
  for (let i = 0; i < allDumbbells.length; i++) {
    if (pairs.length == 0) {
      pairs.push([allDumbbells[i]]);
    } else if (pairs[pairs.length - 1].length == 1) {
      pairs[pairs.length - 1].push(allDumbbells[i]);
    } else {
      pairs.push([allDumbbells[i]]);
    }
  }
  let result = pairs.filter((el) => el.length == 2);
  return result.length;
}

console.log(
  taskOfPairing([
    349147651, 497242660, 102717431, 70871969, 876274615, 209499459, 196009865,
    434338680, 869568426, 437878169, 646614305, 183102985, 872935824, 803489320,
    170780886, 137909910, 362361255, 705867407, 288690329,
  ])
);
