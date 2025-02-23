function commonGround(s1, s2){
  let words1 = new Set(s1.split(' '));
  let words2 = s2.split(' ');
  let result = words2.filter((item) => words1.has(item));
  
  return result.length ? result.join(' ') : 'death';
}
