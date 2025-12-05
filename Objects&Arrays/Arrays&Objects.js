export function solve(){
    function twoSumSorted(arr,target){
        let left = 0;
        let right = arr.length - 1;

        while (left < right ){
            const sum = arr[left] + arr[right];

            if (sum === target) 
                return [arr[left],arr[right]];
            
            if (sum < target ) left ++;
            else right--;
        }
        return null;
    }

    console.log(twoSumSorted([-50, -40, -30, -20, -10, 0, 5, 10],-25));

}