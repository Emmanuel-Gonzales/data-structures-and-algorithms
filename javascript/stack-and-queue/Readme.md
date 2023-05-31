# Challenge Title

Create a new class called PseudoQueue.
Do not use an existing Queue.
Instead, this PseudoQueue class will implement our standard queue interface (the two methods listed below).
Internally, utilize 2 Stack instances to create and manage the queue.

### Node
Create a Node class that has properties for the value stored in the Node and a pointer to the next node.


### Stack
Create a Stack class that has a top property. It creates an empty Stack when instantiated.

This object should be aware of a default empty value assigned to top when the stack is created.

The class should contain the following methods:

#### push

Arguments: value

Adds a new node with that value to the top of the stack with an O(1) time performance.

#### pop

Arguments: none

Returns: the value from the node at the top of the stack

Removes the node from the top of the stack.
Should raise an exception when called on an empty stack.

#### peek

Arguments: none

Returns: the value of the node at the top of the stack

Should raise an exception when called on an empty stack.

#### isEmpty

Arguments: none

Returns: a boolean indicating whether or not the stack is empty.

### Queue
Create a Queue class that has a front property. It creates an empty Queue when instantiated.

This object should be aware of a default empty value assigned to front when the queue is created.

The class should contain the following methods:

#### enqueue

Arguments: value

Adds a new node with that value to the back of the queue with an O(1) time performance.

#### dequeue

Arguments: none

Returns: the value from the node at the front of the queue.

Removes the node from the front of the queue.
Should raise an exception when called on an empty queue.

#### peek

Arguments: none

Returns: the value of the node at the front of the queue.

Should raise an exception when called on an empty queue.

#### isEmpty

Arguments: none

Returns: a boolean indicating whether or not the queue is empty.

You have access to the Node class and all the properties on the Linked List class.

### Structure and Testing

Utilize the Single-responsibility principle: any methods you write should be clean, reusable, abstract component parts of the whole challenge. You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.

Be sure to follow your language/framework's standard naming conventions (e.g., C# uses PascalCasing for all method and class names).

Any exceptions or errors that come from your code should be contextual, descriptive, and capture-able errors. For example, rather than a default error thrown by your language, your code should raise/throw a custom error that describes what went wrong when calling the methods you wrote for this lab.

Write tests to prove the following functionality:

* should successfully enqueue into a queue
* should successfully enqueue multiple values into a queue
* should successfully dequeue out of a queue the expected value
* should successfully peek into a queue, seeing the expected value
* should raise an exception when calling dequeue on an empty queue
* should raise an exception when calling peek on an empty queue
* should return true if the queue is empty
* should return false if the queue is not empty


## Whiteboard Process
  Code Challenge 11
![image](../assets/Code-challenge-11.png)

## Approach & Efficiency

I took the approach of following along with this one and watching some videos on the side to better grasp stacks and queues. I focused on what we learned in class and used it to finish out the project.

## Collaboration

Thanks to Nick Mullaney

Thanks to chatgpt for helping with the testing

#### prompts

Using the below code as my standard, can you help make a series of tests that match the following asks for my new pseudoQueues

Write tests to prove the following functionality:

* should successfully enqueue into a queue
* should successfully enqueue multiple values into a queue
* should successfully dequeue out of a queue the expected value
* should successfully peek into a queue, seeing the expected value
* should raise an exception when calling dequeue on an empty queue
* should raise an exception when calling peek on an empty queue
* should return true if the queue is empty
* should return false if the queue is not empty
