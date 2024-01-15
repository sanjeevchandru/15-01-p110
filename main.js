document.write("74. to find the largest value between the first and last elements and set all the other elements to that value. Display the updated array."+"<br>");
function test74(arr){
    if(arr[0]>arr[1] && arr[0]>arr[2] ){
        // return arr[0].repeat(arr.length);
        arr[0]=arr[0],arr[1]=arr[0],arr[2]=arr[0];
        return arr; 
    }
    else if(arr[1]>arr[0] && arr[1]>arr[2]){
        arr[0]=arr[1],arr[1]=arr[1],arr[2]=arr[1];
        return arr;
    }
    else{
        arr[0]=arr[2],arr[1]=arr[2],arr[2]=arr[2];
        return arr;
    }
}
document.write("The array :[1,2,4] ,Ans :"+test74([1,2,4])+"<br><br>");