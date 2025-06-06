function *sample(){
    yield
    console.log("reshna from calicut")
    yield 
    console.log("vishnu from calicut")
}
const gen = sample();   // Create generator object

gen.next();  // Pauses at first yield
gen.next();  // Runs console.log("reshna from calicut") and pauses again
gen.next();  // Runs console.log("vishnu from calicut")
 