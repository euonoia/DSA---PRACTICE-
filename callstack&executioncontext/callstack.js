export function solve(){
    function first(){
        console.log("Inside first");
        second();
    }
    function second(){
        console.log("Inside second");
    }
    first();
}