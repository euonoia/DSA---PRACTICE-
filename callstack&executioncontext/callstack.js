export function solve(){
    function first(){
        console.log("first");
        second();
    }
    function second(){
        console.log("second");
    }
    first();
    return;
}