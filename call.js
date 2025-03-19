function setUsername(username){
    this.username = username

    console.log("called")
}

function createUser(username, email, password){
    setUsername(this, username)

    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai)


// if we are using call() method.
// so as we know whenever a funxction is called, an execution context for tat funcrion is created
// and if this function is calling another function then there  a new ec created for this function
// and also as soon as the second function execution completed, the ec is also poped out from call stack
// which results the deletion of all the variables and functions from memory related to that function.
// so in such case, if we want to preserv the context ,we use the call() method.