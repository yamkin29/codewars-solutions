function correct(str)
{
  const mapping = {
    '5': 'S',
    '0': 'O',
    '1': 'I',
  }
  
  return [...str].map((item) => {
    if (item in mapping) {
      return mapping[item];
    } else {
      return item;
    }
  }).join('');
}