export function solve(){
    function twoSumSorted(arr,target){
        let left = 0, right = arr.lenght - 1;

        while(left<right){
            const sum = arr[left] + arr[right];
            if (sum === target) return [left,right];
            if ( sum < target ) left++;
            else right--;
        }
    }
    return;
}