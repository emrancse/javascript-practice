// javascript call() function

var person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}


var myObject = {
    firstName:"Mary",
    lastName: "Doe",
}

var name = person.fullName.call(myObject); 

console.log(name);

console.log(person.fullName());