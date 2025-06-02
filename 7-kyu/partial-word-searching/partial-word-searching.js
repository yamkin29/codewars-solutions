function wordSearch(query, seq){
  const resultArray = seq.filter((item) => item.toLowerCase().includes(query.toLowerCase()))
  
  return resultArray.length > 0 ? resultArray : ['Empty']
}