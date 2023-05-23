# Reversed Arrays

Write a function to reverse the items in an array

## Whiteboard Process

![Whiteboard](/assets/Whitebord-01.png)

## Approach & Efficiency

Time: O(n): constant time

Space:O(1)

## Solution

    let firstIndex = 0;
    let lastIndex = arr.length - 1;

while(lastIndex > firstIndex) {

let temp = arr[firstIndex]

arr[firstIndex] = arr[lastIndex]

    arr[lastIndex] = temp
    firstIndex++
    endIndex--

}
      return arr;
})
