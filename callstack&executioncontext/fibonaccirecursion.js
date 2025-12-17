export function solve(){
    function fibonacci(n){
        if(n <=1 ) return n;
        return fibonacci(n-1) + fibonacci(n-2);
    }

    return fibonacci(5);
}