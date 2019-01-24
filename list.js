let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};

let arrayToList = arr => {
  console.log(arr)
  let list = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    list = {value: arr[i], rest: list}
  }
  console.log(list)
  return list;
}

let listToArray = list => {
  console.log(list)
  let arr = [];
  for (let node = list; node; node = node.rest) {
    arr.push(node.value);
  }
  console.log(arr);
  return arr;
}

let prepend = (elem, list) => {
  return {value: elem, rest: list};
}

let nth = (list, number) => {
  if (!list) return undefined;
  else if (number === 0) return list.value;
  else return nth(list.rest, number - 1);
}

console.log(arrayToList([1,2,3,4]))
console.log(listToArray(arrayToList([1,2,3,4])))
console.log(prepend(-1,arrayToList([1,2,3,4])))
console.log(nth(arrayToList([1,2,3,4]), 2))
