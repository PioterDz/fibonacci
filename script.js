function fibonacci(startingNumber) {
    function calc(arr) {
        const sumUp = arr[arr.length - 2] + arr[arr.length - 1];
        if(sumUp === startingNumber) {
            return arr;
        } else if(sumUp > startingNumber) {
            throw Error('Podano numer nienależący do ciągu Fibonnaciego');
        } else {
            arr.push(sumUp);
            return calc(arr);
        }
    }
    return startingNumber === 0 ? [0] : calc([0,1]);
}

function nwd(a, b) {
    if(a === b) {
        return a;
    } else {
        return a > b ? nwd(a - b, b) : nwd(a, b - a);
    }
}
