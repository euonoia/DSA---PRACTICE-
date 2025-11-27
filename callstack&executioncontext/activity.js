//We want you to write a recursive function that calculates the 
// nth Fibonacci number. Please also explain how the recursion works
// and how the call stack grows and shrinks as the function executes.

export function solve(){
    function fibonacci(n){
        console.log("calling fibonacci..(",n,")");
        if (n<=1) return n;
        const result = fibonacci(n-1)+fibonacci(n-1);
        console.log("returning..",result,"calling fibonacci..(",n,")");
        return result;
    }
    console.log(fibonacci(6));
    return;
}