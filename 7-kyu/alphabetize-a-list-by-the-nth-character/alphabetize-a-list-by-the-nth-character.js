function sortIt(list, n) {
  return list.split(', ').sort((a, b) => {
    const charA = a[n - 1].toLowerCase();
    const charB = b[n - 1].toLowerCase();
    
    if (charA > charB) {
      return 1;
    }
    
    if (charA < charB) {
      return -1;
    }
    
    return a.localeCompare(b);
  }).join(', ')
}
