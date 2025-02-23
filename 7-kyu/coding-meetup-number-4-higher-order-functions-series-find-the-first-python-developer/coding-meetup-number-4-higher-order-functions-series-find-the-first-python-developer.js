function getFirstPython(list) {
  let index = 0;
  let count = 0;
  
  for (let i = 0; i < list.length; i++) {
    if (list[i].language === 'Python') {
      index = i;
      count++;
      break;
    }
  }
  
  if (count === 0) {
    return 'There will be no Python developers'
  }
  
  return `${list[index].firstName}, ${list[index].country}`
}
