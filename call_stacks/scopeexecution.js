export function solve(){

    let globalVar = "I am globalVar";

    function outer(){
        let outerVar = "I am outerVar";

        function innerVar(){
            let innerVar=" I am innerVar";
            console.log(globalVar);
            console.log(outerVar);
            console.log(innerVar);
        }
        innerVar()

    }
    outer();
    return;
}