function make_avg(numbers, size){
    let sum = 0
    for (i = 0; i < size; i++){
        sum = sum + numbers[i];
    }
    console.log(sum);
    return sum/size;
}

const numbers = [10, 20, 30, 40, 50];
const size = numbers.length;
const avg = make_avg(numbers, size);
console.log(avg);