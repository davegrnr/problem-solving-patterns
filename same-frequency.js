// add whatever parameters you deem necessary
function freqCount(num){
    let counter = {};
    let numArr = num.toString().split('');

    for(el in numArr){
        counter[numArr[el]] = (counter[numArr[el]]) + 1 || 1;
    }
    return counter;
}   

function sameFrequency(num1, num2) {
    if(num1.length !== num2.length) return false;
    let num1Freq = freqCount(num1);
    let num2Freq = freqCount(num2);

    for (let key in num1Freq) {
        if(!num2Freq[key]) return false;
        if(num1Freq[key] !== num2Freq[key]) return false;
    }
    return true;
}
