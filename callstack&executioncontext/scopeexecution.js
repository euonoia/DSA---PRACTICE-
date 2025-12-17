export function solve(){
    let outerVar = "I am outside";
    function middleVar(){
        let middleVar = "I am in the middle"
        function insideVar(){
            let innerVar = "I am inside";
            console.log(outerVar);
            console.log(middleVar);
            console.log(innerVar);
        }
        insideVar();
    }
    middleVar();

    return;
}