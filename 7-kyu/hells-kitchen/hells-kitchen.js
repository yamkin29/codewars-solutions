function gordon(a) {
  const vowels = ['e', 'i', 'o', 'u'];
  
  return a.split(' ').map((word) => {
    return [...word].map((letter) => {
      if (letter.toLowerCase() === 'a') {
        return '@';
      } else if (vowels.includes(letter.toLowerCase())) {
        return '*';
      }
      return letter.toUpperCase();
    }).join('') + '!'.repeat(4);
  }).join(' ');
}
