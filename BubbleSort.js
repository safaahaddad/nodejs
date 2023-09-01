
const bblSort = (arr) => {

    for (let i = 0; i < arr.length; i++) {
  
        // Last i elements are already in place  
        for (let j = 0; j < (arr.length - i - 1); j++) {
  
            // Checking if the item at present iteration 
            // is greater than the next iteration
            if (arr[j] > arr[j + 1]) {
  
                // If the condition is true
                // then swap them
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
  
    // Print the sorted array
    console.log(arr);
}
  
// This is our unsorted array
const arr = [200, 40, 30, 308, 5, 1280, 20, 15];
  
// Now pass this array to the bblSort() function
bblSort(arr);





// Optimized implementation of bubble sort Algorithm
  
const OptmizeBubbleSort = (arr) => {

    let i, j;
    let len = arr.length;
  
    let isSwapped = false;
  
    for (i = 0; i < len; i++) {
  
        isSwapped = false;
  
        for (j = 0; j < len; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                isSwapped = true;
            }
        }
  
        // IF no two elements were swapped
        // by inner loop, then break 
        if (!isSwapped) {
            break;
        }
    }
  
    // Print the array
    console.log(arr)
}
  
const arr = [200, 40, 30, 308, 5, 1280, 20, 15];
  
// calling the bubbleSort Function
OptmizeBubbleSort(arr)