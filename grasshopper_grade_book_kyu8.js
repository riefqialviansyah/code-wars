function getGrade(s1, s2, s3) {
  const avg = (s1 + s2 + s3) / 3;
  return avg >= 90
    ? "A"
    : avg >= 80
    ? "B"
    : avg >= 70
    ? "C"
    : avg >= 60
    ? "D"
    : "F";
}

console.log(getGrade(95, 90, 93));
