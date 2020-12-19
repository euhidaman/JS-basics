function rangeOfNumbers(startNum, endNum) {
    if(endNum<startNum){
        return [];
    }
    else if (endNum==startNum) {
        return [startNum];
    }
    else {
        var countArray = rangeOfNumbers(startNum+1 , endNum);
        countArray.unshift(startNum);
        return countArray;
    }
}

console.log(rangeOfNumbers(5, 5));