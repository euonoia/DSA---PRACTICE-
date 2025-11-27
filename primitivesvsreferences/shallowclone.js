export function solve(){
    const obj = {name:"ken",address:{ city:"cebu" }};

    const clone =  {...obj}

    clone.address.city = "manila";

    console.log(obj.address.city);
    return;
}