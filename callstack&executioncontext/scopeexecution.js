export function solve(){
    let globalVar = "i am global var";
        function outer(){
            let outerVar = " i am outerVar";
            function innerVar(){
                let innerVar = " i am innerVar";
                console.log(globalVar);
                console.log(outerVar);
                console.log(innerVar);
            }
            innerVar()
        }
        outer();
    return;
}