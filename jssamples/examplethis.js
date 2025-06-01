console.log(this)
this.name="reshna"
console.log(this.name)  
// reshna
console.log(name)
// reshna
console.log(window.name)
// reshna
// so the name can access anywhere by putting this.name like this
// window.name==this.name

function checkThis(){
    console.log(this)
}
checkThis()
  

const person={
    checkThiss:function(){
        console.log(this)
    }
}
person.checkThiss() 
console.log(person)
// both this will give 
// { checkThiss: [Function: checkThiss] }
// { checkThiss: [Function: checkThiss] }

// from this checkThiss function is pointting to the obejct person