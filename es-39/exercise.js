function multiplyByTwo(value) {
  let number = 2;

  function inner() {
    return value * number;
  }

  return inner;

}

const closureFunction = multiplyByTwo(7);
console.log(closureFunction());

