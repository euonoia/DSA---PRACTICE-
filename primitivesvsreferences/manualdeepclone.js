export function solve(){
    function deepclone(value){
        if (typeof value !== "object" || value==null){
            return value;
        }
        if (Array.isArray(value)){
            return value.map((item)=>deepclone(item));
        }
        const obj = {};
         for (let key in value){
            obj[key] = deepclone(value[key]);
         }
         return obj;
    }
    const data = {name: "ken", skills:["react","java"]};
    const clone = deepclone(data);
    
    clone.skills.push("css");

    console.log(data.skills);

    return solve;
}