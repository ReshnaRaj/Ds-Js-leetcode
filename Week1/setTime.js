function x() {
    for(let i = 1; i<=10; i++){
    setTimeout(()=> {
    console.log(i*5);
    }, i*1000);
    }
    console.log("Namaste Javascript");
    }
    x();