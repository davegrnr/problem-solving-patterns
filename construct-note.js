// add whatever parameters you deem necessary
function freqCounter(str){
    const counter = {};
    for(let el of str.split('')){
        counter[el] = (counter[el] + 1 || 1)
    }
    return counter
}

function constructNote(str1, str2) {
    if(str1.length > str2.length) return false;
    let freq1 = freqCounter(str1);
    let freq2 = freqCounter(str2);

    // Check if letter freq is same in both objects
    for (let key in freq1){
        if(!freq2[key]) return false;
        if(freq1[key] > freq2[key]) return false;
    }
    return true;
}
