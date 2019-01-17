let isEven = num => {
  if (num === 0) return true;
  else if (num === 1) return false;
  else if (num < 0) {
    return isEven(-num)
  }
  else {
    return isEven(num - 2);
  }
}

console.log(isEven(24))
console.log(isEven(5))
console.log(isEven(-10))
