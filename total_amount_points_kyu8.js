function points(games) {
  return games.reduce((tot, el) => {
    const [x, y] = el.split(":");
    if (+x == +y) {
      return tot + 1;
    } else if (+x > +y) {
      return tot + 3;
    }
    return tot;
  }, 0);
}

console.log(points(["3:1", "2:2", "0:1"]));

const points2 = (games) =>
  games.reduce((output, current) => {
    return (output +=
      current[0] > current[2] ? 3 : current[0] === current[2] ? 1 : 0);
  }, 0);

console.log(points2(["3:1", "2:2", "0:1"]));

const points3 = (games) =>
  games.reduce(
    (cum, [x, _, y]) => (+x > +y ? cum + 3 : +x < +y ? cum + 0 : cum + 1),
    0
  );

console.log(points3(["3:1", "2:2", "0:1"]));
