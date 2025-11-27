export function solve(){
    let obj1 = { name: "derrick"};
    let obj2 = obj1;
     
    obj2.name = "derrick";

    console.log(obj1.name);
    console.log(obj2.name);
    return;
}