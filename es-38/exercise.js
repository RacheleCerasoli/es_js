function printName() {
    let helloName = "Hello John";
  
    function inner() {
      return helloName;
    }
  
    return inner;
  }
  
  const closureFunction = printName();

  setTimeout(function() {
    console.log(closureFunction());
  }, 1000);