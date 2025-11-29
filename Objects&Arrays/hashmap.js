export function solve(){
    function twoSum(sum,target){
        const map = {};

        for(let i = 0; i < nums.length; i++){
            const needed = target - nums[i]
            if (needed in map ) return [map[needed],i];
            map[nums[i]] = i;
        }
    }
    return;
}
//complexity 0(n)