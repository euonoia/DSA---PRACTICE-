export function solve(){
    let a = 5;
    let b = 10;

    let temp = a;
    a=b;
    b=temp;

    console.log(a,b) // 10 5
    return;
}