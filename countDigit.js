// Q3: Count the number of digits


function countDigit(num){
    num = Math.abs(num);
    let sum = 0;
    // Loop through the number until it becomes 0
    while (num > 0) {
        let rem = num % 10;
        sum += 1;
        num = Math.floor(num / 10);
    }
    return sum;
}

console.log(countDigit(123456789))
