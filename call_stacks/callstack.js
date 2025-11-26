export function solve(){


    function first(){
        console.log(" i am first");
        second();
    }
    function second(){
        console.log("i am second");
    }

    first();
    return;
}