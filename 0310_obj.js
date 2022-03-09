let user = {
    name : "john",
    age : 27,
};

/*

console.log(user);

// 값 추가 시
user.weight = 70;
console.log(user);

// 값 삭제
delete user.age;
console.log(user);

*/


// 객체 복사 문제점
let admin = user;
console.log(admin);

admin.name = "andy";
console.log(admin.name); // output : andy
console.log(user.name); // output : andy -> 원래는 john

user.age = 30;
console.log(user.age); 
console.log(admin.age); // 27 -> 30



/*

console.log(typeof user); // output : object
console.log(typeof user.name); // output : string
console.log(typeof user.age); // output : number

console.log(user.name);
console.log(user.age);
// 값 변경시
user.age = 30;
console.log(user.age);

*/