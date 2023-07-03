let balance = 0;
let day = 1;
let week = 0;
let n=7
for (let i = 1; i <= n; i++) {
    balance = balance + (week + day );
    console.log(balance,"balance amount")
    day++;
    console.log(day,"day count")

    
    if (i % 7 === 0) {
        week++;
        day = 1;
    }
}

// return balance;
console.log(balance)