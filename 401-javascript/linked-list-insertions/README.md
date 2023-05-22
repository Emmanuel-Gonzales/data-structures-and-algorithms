# Linked List Insertion

Create a linked list and methods to add nodes to the end of lists and before and after a speciffic index.

## Whiteboard Process

![Whiteboard](/assets/whiteboard-06-1.png)

![Whiteboard](/assets/whiteboard-06-2.png)

I collaberated with Heather Holcomb

## Approach & Efficiency

We teamed up and reviewed the code from friday and changed it slightly to match our agenda for today

## Solution

Define new class called Node constructor sets the initial state for value as value and next as null Define new class called LinkedList constructor sets the initial state for head as null define method for append(using argument of value for new node) define newNode as new Node(with value passed in as the argument) if the head of the list is null then set newNode as head else let current node equal head while traversing the linked list until it reaches a value of null and append the new node at the end define method for insertBefore(using argument for reference value, and newValue of new node) if head equals null (meaning there are no nodes in the list), throw an error if head value equals the reference value, then append new node with newValue before the head and update the head to the new node else traverse the linked list to check for reference value if found then append new node with newValue before the node with the found value else return an error define method for insertAfter (using argument for reference value, and newValue of new node) if head equals null (meaning there are no nodes in the list), throw an error if head value equals the reference value, then append new node with newValue after the head and update the head to the new node else traverse the linked list to check for reference value if found then append new node with newValue after the node with the found value else return an error
