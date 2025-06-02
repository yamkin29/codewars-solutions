function countDevelopers(list) {
  let count = 0;
  
  list.forEach((item) => {
    if (item.continent === 'Europe' && item.language === 'JavaScript') {
      count++;
    }
  })
  
  return count > 0 ? count : 0;
}