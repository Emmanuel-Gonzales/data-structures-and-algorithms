# Binary Search

Create a function that identifies which index the number of an array a number is.

## Whiteboard Process

![WhiteBoard](/assets/whiteboard-03.png)

## Approach & Efficiency

I worked on this assignment with Hayden Cooper.

We split the whiteboad and trial and erroed the code.

## Solution

function BinarySearch(arr, num){

  for(let i = 0; i < arr.length; i++){

    if(arr[i] === num){
      return i
    }
  }
  return -1
};

