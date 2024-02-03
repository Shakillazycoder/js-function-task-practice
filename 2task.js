function oddOREven (number){
    if (number % 2 ===1){
        number = number * 2;
        console.log(number);
    } else{
        number = number / 2;
    }
    
    return number;
}

const number = oddOREven(45);
console.log('odd or even number is', number);