function getCount(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let result = [...str].filter((item) => vowels.includes(item))
  return result.length;
}
