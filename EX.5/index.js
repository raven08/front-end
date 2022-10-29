function helloWorld(){
    let promise = new promise ((resolve, callback) => {
        setTimeout(function () {
            console.log("Hello World!");
            callback();
          }, 2000);
    });
    helloWorld();
} 