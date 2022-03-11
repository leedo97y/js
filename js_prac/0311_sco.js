// global scope
let x = 1;
let y = 2;
let z = 3;

console.log(x); // 1
console.log(y); // 2
console.log(z);

// local scope
{
let x = 3;
let y = 4;
console.log(x); // 3
console.log(y); // 4
}

// local scope
function scope() {
  let x = 5;
  let y = 6;
  console.log(x); // 5
  console.log(y); // 6
}

// global scope
console.log(x); // 1
console.log(y); // 2


// 예제 1
//global scope
let A = 1;
let B = 2;

// local scope
{
  let C = 3;
  let D = 4;

  console.log(A); // 1
  console.log(C); // 3
}

console.log(C); // RefferenceError : C is not defined



// 예제 2
// global scope
let E = 1;

{
  // local scope (1)
  let C = 3;
  let D = 4;

  console.log(C); // 3

  {
    // local scope (2)
    let C = 5;
    let D = 6;

    console.log(C); // 5
  }
}


// 예제 3
// global scope
let index = 1000;

// function level scope = local scope 
function local_func() {
  let index = 100;

  // block level scope = local scope
  for (let index = 0; index < 10; index++) {
    console.log(index); // 0 ~ 9
  }

  console.log(index); // 100
}

local_func();
console.log(index); // 1000