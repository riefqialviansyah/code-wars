function arrayPlusArray(arr1, arr2) {
  return [...arr1, ...arr2].reduce((tot, el) => {
    return tot + el;
  }, 0); //something went wrong
}
