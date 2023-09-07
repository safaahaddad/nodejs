function findSecondLargest(arr){
    let first = -1 , second = -1;

    for(let i = 0; i <= arr.length-1; i++){
        if(arr[i] > first){
            second = first;
            first = arr[i];
        }
        else if( arr[i] > second && arr[i] != first){ // if If the current element is in between first and second
            second = arr[i];
        }
    }
    console.log(second);
}
let arr = [9, 20, 1, 25, 70, 3]
findSecondLargest(arr);