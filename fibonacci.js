
function fibonacci(n){
    let arr = []
    let a = 0;
    let b = 1;
    arr.push(a)
    for(let i = 1; i < n; i++){
        let c = a + b;
        a = b;
        b = c;
        arr.push(a)
    }
    return arr
}

function fibonacciRecursive(n, a = 0, b = 1, arr = [a]){
    if(arr.length === n){
        return arr
    }
    let c = a + b;
    a = b;
    b = c;
    arr.push(a)
    return fibonacciRecursive(n, a, b, arr)
}
console.log(fibonacciRecursive(12))
console.log(fibonacci(10))

