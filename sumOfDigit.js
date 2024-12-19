// Q2: Sum of digits of a number

//1234 = 1+2+3+4

// 1234%10, remainder = 4, Q = 123%10 

function sumOfDigit(num){
    let sum = 0;
    // Loop through the number until it becomes 0
    while (num > 0) {
        let rem = num % 10;
        sum += rem;
        num = Math.floor(num / 10);
    }
    
    return sum;
}

console.log(sumOfDigit(123456789))
