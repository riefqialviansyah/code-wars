// kyu 7
// https://www.codewars.com/kata/663fe90a04bdcc6db4c091b9/train/javascript

function snapshot(scene) {
  let camera = "[[   x   ]]";
  if (scene.length < camera.length) {
    return scene;
  }

  let nameBird = "seagull";
  let arrIdxBird = [];

  scene.split("").map((el, idx) => {
    if (arrIdxBird.length == 0 && nameBird.includes(el)) {
      arrIdxBird[0] = idx;
    } else if (nameBird.includes(el)) {
      arrIdxBird[1] = idx;
    }
  });

  let result;

  if (arrIdxBird[0] >= 2 && scene.length - 1 - arrIdxBird[1] >= 2) {
    let counter = -1;
    result = scene
      .split("")
      .map((el, idx) => {
        if (idx == arrIdxBird[0] - 2 || idx == arrIdxBird[0] - 1) {
          let tmp = "[";
          counter = idx + 4;
          return tmp;
        } else if (idx == arrIdxBird[1] + 1 || idx == arrIdxBird[1] + 2) {
          let tmp = "]";
          return tmp;
        } else if (counter == idx) {
          return "x";
        }
        return el;
      })
      .join("");
  } else if (arrIdxBird[0] >= 2 && scene.length - 1 - arrIdxBird[1] <= 2) {
    arrIdxBird[0] = scene.length - 1 - 8;
    let counter = -1;
    result = scene
      .split("")
      .map((el, idx) => {
        if (idx == arrIdxBird[0] - 2 || idx == arrIdxBird[0] - 1) {
          let tmp = "[";
          counter = idx + 4;
          return tmp;
        } else if (idx == scene.length - 1 || idx == scene.length - 2) {
          let tmp = "]";
          return tmp;
        } else if (counter == idx) {
          return "x";
        }
        return el;
      })
      .join("");
  } else if (arrIdxBird[0] <= 2 && scene.length - 1 - arrIdxBird[1] >= 2) {
    arrIdxBird[1] = 8;
    let counter = -1;
    result = scene
      .split("")
      .map((el, idx) => {
        if (idx == 0 || idx == 1) {
          let tmp = "[";
          counter = idx + 4;
          return tmp;
        } else if (idx == arrIdxBird[1] + 1 || idx == arrIdxBird[1] + 2) {
          let tmp = "]";
          return tmp;
        } else if (counter == idx) {
          return "x";
        }
        return el;
      })
      .join("");
  } else if (arrIdxBird[0] >= 2 && arrIdxBird[1] == undefined) {
    arrIdxBird[0] = scene.length - 1 - 8;
    let counter = -1;
    result = scene
      .split("")
      .map((el, idx) => {
        if (idx == arrIdxBird[0] - 2 || idx == arrIdxBird[0] - 1) {
          let tmp = "[";
          counter = idx + 4;
          return tmp;
        } else if (idx == scene.length - 1 || idx == scene.length - 2) {
          let tmp = "]";
          return tmp;
        } else if (counter == idx) {
          return "x";
        }
        return el;
      })
      .join("");
  } else if (arrIdxBird[0] == 0 && arrIdxBird[1] == undefined) {
    arrIdxBird[1] = 8;
    let counter = -1;
    result = scene
      .split("")
      .map((el, idx) => {
        if (idx == 0 || idx == 1) {
          let tmp = "[";
          counter = idx + 4;
          return tmp;
        } else if (idx == arrIdxBird[1] + 1 || idx == arrIdxBird[1] + 2) {
          let tmp = "]";
          return tmp;
        } else if (counter == idx) {
          return "x";
        }
        return el;
      })
      .join("");
  } else {
    result = scene;
  }

  return result;
}

// console.log(snapshot(".·..·····seagull·..·"));
// console.log(snapshot("···..·...··...··..seagu"));
// console.log(snapshot("ll·.··..·...··...··.."));
// console.log(snapshot("·······.·····"));
// console.log(snapshot("·..·se"));
// console.log(snapshot("ull·..·"));

console.log(snapshot("......··..···.·s"));
console.log(snapshot("l..··.·...·.·.·····"));
