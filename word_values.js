function solution(arr) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return arr.map(
    (word, idx) =>
      word
        .split("")
        .reduce((acc, char) => acc + alphabet.indexOf(char) + 1, 0) *
      (idx + 1)
  );
}

console.log(solution(["abc", "abc abc", "abc"]));

function wordValue(a) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return a.map(
    (word, idx) =>
      word
        .split("")
        .reduce((acc, char) => acc + alphabet.indexOf(char) + 1, 0) *
      (idx + 1)
  );
}

console.log(wordValue(["abc", "abc abc", "abc"]));
