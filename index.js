//The Net Ninja: Object Oriented JavaScript

//object literal
/*
let userOne = {
    email: 'someEmail@gmail.com',
    name: 'Johnson',
    login() {
        console.log(this.email + ' has logged in');
    },
    logout() {
        console.log(this.email + ' has logged out')
    }
}

console.log(userOne.name);
userOne.login();
userOne.logout();
*/

// class
/*
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
    login() {
        console.log(this.email + ' has logged in');
    }
    logout() {
        console.log(this.email + ' has logged out');
    }
}

let userOne = new User('one@gmail.com', 'Bob');

let userTwo = new User('two@gmail.com', 'Tom');

userOne.login();
userTwo.logout();
*/

// method chaining
/*
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    login() {
        console.log(this.email + ' has logged in');
        return this
    }
    logout() {
        console.log(this.email + ' has logged out');
        return this
    }
    updateScore() {
        this.score ++
        console.log(this.email, ' score is now ', this.score)
        return this;
    }
}

let userOne = new User('one@gmail.com', 'Bob');

let userTwo = new User('two@gmail.com', 'Tom');

userOne.login().updateScore().updateScore().logout();
*/

// Class inheritance
/*
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    login() {
        console.log(this.email + ' has logged in');
        return this
    }
    logout() {
        console.log(this.email + ' has logged out');
        return this
    }
    updateScore() {
        this.score ++
        console.log(this.email, ' score is now ', this.score)
        return this;
    }
}

class Admin extends User {
    deleteUser() {
        users = users.filter(u => {
            return u.email != userOne.email;
        })
    }
}

let userOne = new User('one@gmail.com', 'Bob');

let userTwo = new User('two@gmail.com', 'Tom');

let admin = new Admin('three@gmail.com', 'Chick');

let users = [userOne, userTwo, admin];

admin.deleteUser(userTwo);

console.log(users);
*/

//Constructor
/*
function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
    this.login =  function() {
        console.log(this.email, 'has logged in')
        this.online = true;
    }
}

let userOne = new User('one@gmail.com', 'Bob');
let userTwo = new User('two@gmail.com', 'Tom');

console.log(userOne);
userTwo.login();
console.log(userTwo.online);
*/

// Prototype - when you use the class keyword this is going on in the background
/*
function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
}

User.prototype.login =  function() {
    console.log(this.email, 'has logged in')
    this.online = true;
}

User.prototype.logout =  function() {
    console.log(this.email, 'has logged out')
    this.online = false;
}

let userOne = new User('one@gmail.com', 'Bob');
let userTwo = new User('two@gmail.com', 'Tom');

console.log(userOne);
userTwo.login();
console.log(userTwo.online);
userTwo.logout();
console.log(userTwo.online);
*/

//Prototype inheritance
/*
function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
}

User.prototype.login =  function() {
    console.log(this.email, 'has logged in')
    this.online = true;
}

User.prototype.logout =  function() {
    console.log(this.email, 'has logged out')
    this.online = false;
}

function Admin(...args) {
    User.apply(this, args);
    this.role = 'super admin'
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.deleteUser = function(u) {
   users = users.filter(user => {
        return user.email != u.email;
    })
}

let userOne = new User('one@gmail.com', 'Bob');
let userTwo = new User('two@gmail.com', 'Tom');
let admin = new Admin('four@gmail.com', 'Christy');

let users = [userOne, userTwo, admin];

console.log(admin);
admin.login();
admin.logout();
*/

