function freqSeq(str, sep) {
  return [...str].map((item) => str.split(item).length - 1).join(sep);
}
​