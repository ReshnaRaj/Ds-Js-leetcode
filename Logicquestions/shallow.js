const original = { a: 1, b: { c: 2 } };
const data={
    name:"reshna",
    works:{
        kitchenworks:"data123",
        officeWorks:"datat34"
    }
}
// let datacopy=Object.assign({},data)
datacopy.name="Vishnu"

console.log(datacopy)
console.log(data)
// { name: 'Vishnu' }
// { name: 'reshna' }
datacopy=data
// change the original object
// { name: 'Vishnu' }
// { name: 'Vishnu' }


const shallow = { ...original };  
shallow.b.c = 100;
shallow.a=23
// console.log(original.b.c);  
// console.log(original.a)
const original1 = { a: 1, b: { c: 2 } };
const deep = JSON.parse(JSON.stringify(original));
deep.b.c = 100;

// console.log(original1.b.c); // ✅ Still 2
// shallow copy will chnage the original object .so if dont want ot chnage the original we can use object.assign()
// if we try to chnage the nested object .so we can use JSON.parse(JSON.stringify(original));
