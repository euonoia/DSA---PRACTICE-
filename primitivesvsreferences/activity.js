export function solve(){
        
        function deepclone(value){
            if(typeof value !== "object" || value==null){
                return value;
            }
            if(Array.isArray(value)){
                return value.map((item)=>deepclone(item));
            }
            const obj = {};
            for(let key in value){
                obj[key] = deepclone(value[key]);
            }
            return obj;
        }

        const config = {
        theme: "dark",
        settings: {
            font: "small"
        }
        };

        const userConfig = config;
        const copy = deepclone(userConfig);

        copy.settings.font = "big";
        
        console.log(userConfig.settings);
        return;
}
