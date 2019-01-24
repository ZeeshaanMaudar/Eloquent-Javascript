let flatten = arr => {
  return arr.reduce((acc, current) => acc.concat(current), []);
}

console.log(flatten([[1, 2, 3], [4, 5], [6]]));
