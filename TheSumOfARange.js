let range = (start, end, step) => {
  let arr = [];
  if (step === null) step === 1;
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      arr.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      arr.push(i);
    }
  }
  return arr;
};

let sum = array => {
  let sum = 0;
  for (let i of array) {
    sum += i;
  }
  return sum;
}

console.log(range(1,10,2));
console.log(range(5,2,-1));
console.log(sum(range(1,10,2)));
