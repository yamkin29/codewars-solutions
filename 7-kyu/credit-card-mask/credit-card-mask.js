function maskify(cc) {
  return cc
    .split("")
    .map((item, index) => index < cc.length - 4 ? "#" : item)
    .join("");
}