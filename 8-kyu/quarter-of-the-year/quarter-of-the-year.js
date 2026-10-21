const quarterOf = (month) => {
  const quarters = {
    '1': [1, 2, 3],
    '2': [4, 5, 6],
    '3': [7, 8, 9],
    '4': [10, 11, 12],
  }
  
  for (const [key, value] of Object.entries(quarters)) {
    if (value.includes(month)) {
      return +key;
    }
  }
}