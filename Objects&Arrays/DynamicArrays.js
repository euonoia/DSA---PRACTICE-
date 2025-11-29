//| Operation                   | Big-O          | Why                  |
//| --------------------------- | -------------- | -------------------- |
//| Access by index             | O(1)           | direct memory access |
//| Insert at end (`push`)      | O(1) amortized | fast append          |
//| Remove at end (`pop`)       | O(1)           | fast delete          |
//| Insert at start (`unshift`) | O(n)           | shifts all elements  |
//| Delete at start (`shift`)   | O(n)           | shifts all elements  |
//| Insert in middle            | O(n)           | shifts elements      |
//| Search by value             | O(n)           | linear scan          |

export function solve(){
    const arr = [10,20,30];
    //push(add)
    arr.push(40); //[10,20,30,40]
    //pop(delete)
    arr.pop();// [10,20,30] removes the push
    //shift
    arr.shift(); // [10,20] removes the left side value of the existing array
    //unshift
    arr.unshift(5); // adds the number on the left side starting point the value and changes the array
    return;
}