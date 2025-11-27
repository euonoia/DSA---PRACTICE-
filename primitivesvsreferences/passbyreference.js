export function solve(){
    function change(obj){
        obj.name = "changed";
    }

    let user = {name:"lebron"};
    change(user);

    console.log(user.name);
    return;
}