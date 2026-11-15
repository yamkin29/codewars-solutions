function reverseLetter(str) {
  const letters = [];
​
  for (let i = str.length - 1; i >= 0; i--) {
    const char = str[i];
​
    if (char >= 'a' && char <= 'z') {
      letters.push(char);
    }
  }
​
  return letters.join('');
}
​