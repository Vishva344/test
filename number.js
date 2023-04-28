function randamnumbergenerate(min = 1, max = 20) {
  let difference = max - min;
  let randomanumbers = Math.random();
  randomanumbers = Math.floor(randomanumbers * difference);
  randomanumbers = randomanumbers + min;
  return randomanumbers;
}
console.log(randamnumbergenerate());
//
function decimalSpecifiedPlace(decimal = 45.45678) {
  let fixDecimal = decimal.toFixed(2);
  return fixDecimal;
}
console.log(decimalSpecifiedPlace());
//
function isNatural(a = 12, b = 4) {
  let num;
  if ((num = Number.isInteger(a / b))) {
    return "it is naturalnumber";
  }
  return "it is not a natural number";
}

console.log(isNatural());

//
function checkPowerOfTwo(num = 19) {
  if (num % 2 != 0 && num != 1) {
    return "no";
  }
  return "yes";
}
console.log(checkPowerOfTwo());
//
function isNaturalll(num = 6) {
  if ((num = Number.isInteger())) {
    return "it is naturalnumber";
  }
  return "it is not a natural number";
}

console.log(isNaturalll());
//
function nthRootOfNumber(base = 64, root = 2) {
  let num;
  num = Math.pow(base, 1 / root);
  return num;
}
console.log(nthRootOfNumber());
//
