let name = {
    firstName: "Neha",
    lastName: "Sinha"
}

//we can use multiple parameters by comma separated: 
let printFullName = function (hometown, state){
    console.log(this.firstName + " " + this.lastName + " from " + hometown + ", " + state)
}

//the first argument should be contex and then we can pass the arguments for functio parameters

printFullName.call(name, "Noida", "UP")


let name2 = {
    firstName: "Riya",
    lastName: "Singh"
}

// So basically call() method borrow a function and provides the current context i.e. "this"
//function borrowing
printFullName.call(name2, "Gurugram", "Haryana")

//apply method()

//the only differece between call() and apply() is: in call(), we pas the individual arguements
// while in case of apply() we pass the arguements as an array

printFullName.apply(name2, ["Gurugram", "Haryana"])

//bind()
// so the bind method is same as call(), only difference is call() is immediately invoked while 
// bind() binds the current context a keep a copy for future use or future invocation

let printName = printFullName.bind(name2, "Delhi", "Delhi")
console.log(printName)
printName()

