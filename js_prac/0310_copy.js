let user = {
    name : "john",
    age : 23,
};

// SHALLOW COPY
let admin = {... user}; 
// 단순히 ...(전개 연산자)을 통해서 user 내의 내용을 나열 - 얕은 복사


/*
// using Object
let admin = Object.assign({}, user);


//for loop
let admin = {};


for (let key in user) {
    admin[key] = user[key];
}
*/


admin.name = "mary"

console.log(admin.name);
console.log(user.name);

user.age = 30;
console.log(user.age);
console.log(admin.age);


// SHALLOW COPY'S PROBLEM
let user = {
  name : "janet",
  age : 23,
  sizes : {
      height : 180,
      weight : 72,
  },
};

let admin_obj = Object.assign({}, user);

admin_obj.sizes.weight++;
--admin_obj.sizes.height;

console.log(admin_obj.sizes.weight); // output : 73
console.log(admin_obj.sizes.height); // output : 179
console.log(user.sizes.weight); // output : 73
console.log(user.sizes.height); // output : 179



// DEEP COPY : using 'for loop' - 이런게 있다 정도
let user = {
    name : "john",
    age : 23,
    sizes : { height : 180, weight : 72 },
};

function copyObj(obj) {
    let result = {};
    for (let key in obj) {
        if (typeof obj[key] === "object") result[key] = copyObj(obj[key]);
        else result[key] = obj[key];
    }
    return result;
}
let admin = copyObj(user);

admin.sizes.weight++;

console.log(admin.sizes.weight);
console.log(user.sizes.weight);

//  DEEP COPY : using JSON 
let user = {
    name : "elle",
    age : 23,
    sizes : {
        height : 150,
        weight : 48,
    },
};
// stringfy : js object -> string, parse : string -> js object
let admin_json = JSON.parse(JSON.stringify(user));

admin_json.sizes.weight++;
--admin_json.sizes.height;

console.log(admin_json.sizes.weight);
console.log(admin_json.sizes.height);
console.log(user.sizes.weight);
console.log(user.sizes.height);