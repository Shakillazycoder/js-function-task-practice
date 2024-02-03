function count_zero(){
let count = 0;
for (let i = 0; i <binaryString.length; i++){
    if (binaryString[i] === '0'){
        count = count + 1;
    }
}
console.log(count);
return count;
}

const binaryString = '10000100011111101010101010101010101';
const zeroCount = count_zero(binaryString);
console.log(zeroCount);