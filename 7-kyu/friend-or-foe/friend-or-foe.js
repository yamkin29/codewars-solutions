function friend(friends){
  const result = [];
  friends.forEach((item) => {
    if (item.length === 4) {
      result.push(item);
    }
  }) ;
  return result;
}