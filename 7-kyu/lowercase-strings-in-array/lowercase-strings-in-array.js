function arrayLowerCase(arr) {
  return arr.map((item) => {
    if (typeof item === 'string') {
      return item.toLowerCase();
    } else {
      return item;
    }
  })
}