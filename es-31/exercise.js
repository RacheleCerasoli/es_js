function printName(name) {
    console.log(name);
}

function sayHelloName(callback) {
    console.log('Ciao');

    callback('Cosimo');
}

sayHelloName(printName);