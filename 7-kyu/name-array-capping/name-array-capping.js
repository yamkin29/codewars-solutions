function capMe(names) {
  return names.map((item) => item[0].toUpperCase() + item.slice(1).toLowerCase());
}