# Array Insert Shift

Create a function to that placed a number in the middle of an array

## Whiteboard Process

![Whiteboard](/assets/whiteboard-02.png)

I collaberated with Tim and Tricia Sawyer

## Approach & Efficiency

We teamed up and wrote code in a replit. We played around with dividing the array length to get the middle index and using a for loop to insert the number in the array without using a method.

We decied to stop after an hour like we were instructed.

## Solution

function insertShiftArray(arr, num) {
  let lastIndex = arr.length -1;
  let middleIndex = Math.floor(arr.length / 2)
    for(let i = lastIndex; i > middleIndex; i--) {
      arr[i + 1] = arr[i]
    }
  let value = {}

  arr[middleIndex] = value;
  return arr
}

const arr = [ 2,4,6,-8], 5
