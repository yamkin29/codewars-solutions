function evenChars(string) {
  if (string.length < 2 || string.length > 100) {
    return 'invalid string'
  }
  
  const array = string.split('').filter((item, index) => (index + 1) % 2 === 0);
  
  return array;
}