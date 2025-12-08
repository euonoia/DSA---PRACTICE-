export function solve(){
    function deepClone(value){
        if(typeof value !== 'object' || value == null){
            return value;
        }
        if (Array.isArray(value)){
            return value.map((item)=>deepClone(item));
        }
        const obj ={};
        for (let key in value){
            obj[key] = deepClone(value[key]);
        }
        return obj;
    }
    const data = {name:"john", skills:["js","java"]};
    const clone = deepClone(data);

    clone.skills.push("python");

    console.log(data.skills);
}