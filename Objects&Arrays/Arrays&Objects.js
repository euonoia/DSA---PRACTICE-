// TWO-POINTER TECHNIQUE
//reverse arrays
//two sum on sorted arrays
//removing duplicates
//sliding window
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
//two pointers are 0(n) insted of nested loops 0(n2)