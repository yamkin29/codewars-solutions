function longest(s1, s2) {  
  const resultSet = new Set([...s1, ...s2]);
  
  return [...resultSet].sort().join('');
}