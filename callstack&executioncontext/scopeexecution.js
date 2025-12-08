export function solve(){
    let outerVar = "i am the outer";
    function innerVar(){
        let innerVar = "i am the inner";
        function middleVar(){
            let middleVar="i am the middle";
            console.log(outerVar);
            console.log(innerVar);
            console.log(middleVar);
        }
        middleVar();
    }
    innerVar();

}