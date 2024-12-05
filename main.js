const _2 = 15;
var n = 32;

// console.log(_2 * (n = 22) + _1);

if (_2 > n) {
  console.log(`${_2} is less than ${n}`);
} else {
  console.log(`${_2} is not less than ${n}`);
}

// function declaration
function nobody(a, b) {
  a = 3;
  b = 4;
  return a + b;
}

// callback function
var result = nobody();
console.log(result);

const subtract = (a, b) => {
    a = 10;
    b = 20;
    return a - b;
};
console.log(subtract())



for(var i = 1; i < 50; i++){
    console.log(i);
    
}