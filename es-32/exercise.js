function printName(name) {
    setTimeout(function() {
        console.log(name);
    }, 1000);
}

function sayHelloName(callback) {
    setTimeout(function() {
        console.log('Ciao');
        callback('Cosimo');

    }, 1000);

}

sayHelloName(printName);