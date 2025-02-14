function findShort(s){
  let result = s.split(' ').map(item => item.length)
  return Math.min(...result)
}