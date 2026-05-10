function antiOptimizeAsync(task) {
  return new Promise((resolve, reject) => {
    let result;
​
    setTimeout(() => {
      resolve(result);
    }, 11000);
​
    result = task();
  })
}