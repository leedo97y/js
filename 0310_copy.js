let user = {
    name : "john",
    age : 23,
};

let admin = {};

// shallow copy
for (let key in user) {
    admin[key] = user[key];
}

admin.name = "mary"

console.log(admin.name);
console.log(user.name);