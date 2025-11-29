//anagrams
//checking permutations
//counting char/number appearances
export function solve(){
    function isAnagram(a,b){
        if (a.lengh !== b.length)
            return false;

        const count = {};
        
        for(let char of a){
            count[char] = (count[char] || 0) + 1;
        }

        for (let char of b){
            if(!count[char]) return false;
            count[char]--;
        }
        return true;
    }
    return;
}