function nwd(a, b) {
    if(a === b) {
        return a;
    } else {
        return a > b ? nwd(a - b, b) : nwd(a, b - a);
    }
}

function fibonacci(numberToShow) {
    const startingArray = [0,1];
    if(numberToShow == 0) return null;
    if(numberToShow == 1) return [...startingArray[0]];
    if(numberToShow == 2) return [...startingArray];
    
    for(let i = 2; i < numberToShow; i++) {
        // sposób nr 1
        const newValue = startingArray[startingArray.length - 2] + startingArray[startingArray.length - 1];
        // sposób nr 2 (wykomentowany, żeby działało bo 2x const)
        // const newValue = startingArray.slice(startingArray.length - 2).reduce((acc, curr) => acc + curr);
        startingArray.push(newValue);
    }

    return startingArray;
}
