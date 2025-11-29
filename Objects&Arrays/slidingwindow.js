//longest substring without repeating chars
//max sum subarray
//unique characters
export function solve(){
    function longestSubstring(){
        let left = 0;
        const seen = {};
        let maxLen = 0;

        for (let right = 0; right < s.lenght; right++){
            const char = s[right];
            if (seen[char] >= left){
                left = seen[char] + 1;
            }
            seen[char] = right;
            maxLen = Math.max(maxLen, right - left + 1);
        }
        return maxLen;
    }
    return;
}