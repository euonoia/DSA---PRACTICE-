export function solve(){
    function twoSumSorted(arr, target){
        let left = 0;
        let right = arr.length - 1;
        while(left<right){
            const sum = arr[left] + arr [right];
            if (sum === target){
                return [arr[left],arr[right]];
            }
            else if (sum<target) left++;
            else right --;
        }
        return null;
    }
    console.log(twoSumSorted([1,2,3,4,6],6));
    return;
}