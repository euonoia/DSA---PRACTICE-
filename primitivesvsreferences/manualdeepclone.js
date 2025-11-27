export function solve(){
    function deepclone(value){
        if(typeof value !== "object" || value == null ){
            return value;
        }
        if(Array.isArray(value)){
            return value.map((item)=>deepclone(item));
        }
        const obj = {};
        for (let key in value){
            obj[key] = deepclone(value[key]);
        }
        return obj;
    }
    const original = {name:"ken", skills:["js","react"]};
    const copy = deepclone(original);

    copy.skills.push("node");

    console.log(original.skills); // [js, react]
    return;
}