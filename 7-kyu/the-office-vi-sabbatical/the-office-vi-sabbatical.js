function sabb(s, val, happiness){
  const word = 'sabbatical';
  
  let sum = [...s].filter(letter => word.includes(letter)).length;
  
  return (sum + val + happiness) > 22 ? 'Sabbatical! Boom!' : 'Back to your desk, boy.' 
}
