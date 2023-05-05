// export class PriorityQueue {
//   heap: number[];
// 	constructor() {
// 		this.heap = [];
// 	}

// 	// Helper Methods
// 	getLeftChildIndex(parentIndex: number) {
// 		return 2 * parentIndex + 1;
// 	}

// 	getRightChildIndex(parentIndex: number) {
// 		return 2 * parentIndex + 2;
// 	}

// 	getParentIndex(childIndex: number) {
// 		return Math.floor((childIndex - 1) / 2);
// 	}

// 	hasLeftChild(index: number) {
// 		return this.getLeftChildIndex(index) < this.heap.length;
// 	}

// 	hasRightChild(index: number) {
// 		return this.getRightChildIndex(index) < this.heap.length;
// 	}

// 	hasParent(index: number) {
// 		return this.getParentIndex(index) >= 0;
// 	}

// 	leftChild(index: number) {
// 		return this.heap[this.getLeftChildIndex(index)];
// 	}

// 	rightChild(index: number) {
// 		return this.heap[this.getRightChildIndex(index)];
// 	}

// 	parent(index: number) {
// 		return this.heap[this.getParentIndex(index)];
// 	}

// 	swap(indexOne: number, indexTwo: number) {
// 		const temp = this.heap[indexOne];
// 		this.heap[indexOne] = this.heap[indexTwo];
// 		this.heap[indexTwo] = temp;
// 	}

// 	peek() {
// 		if (this.heap.length === 0) {
// 			return null;
// 		}
// 		return this.heap[0];
// 	}

// 	// Removing an element will reomve the
// 	// top element with highest priority then
// 	// heapifyDown will be called
// 	remove() {
// 		if (this.heap.length === 0) {
// 			return null;
// 		}
// 		const item = this.heap[0];
// 		this.heap[0] = this.heap[this.heap.length - 1];
// 		this.heap.pop();
// 		this.heapifyDown();
// 		return item;
// 	}

// 	add(item: number) {
// 		this.heap.push(item);
// 		this.heapifyUp();
// 	}

// 	heapifyUp() {
// 		let index = this.heap.length - 1;
// 		while (this.hasParent(index) && this.parent(index) < this.heap[index]) {
// 			this.swap(this.getParentIndex(index), index);
// 			index = this.getParentIndex(index);
// 		}
// 	}

// 	heapifyDown() {
// 		let index = 0;
// 		while (this.hasLeftChild(index)) {
// 			let smallerChildIndex = this.getLeftChildIndex(index);
// 			if (this.hasRightChild(index) && this.rightChild(index) > this.leftChild(index)) {
// 				smallerChildIndex = this.getRightChildIndex(index);
// 			}
// 			if (this.heap[index] > this.heap[smallerChildIndex]) {
// 				break;
// 			} else {
// 				this.swap(index, smallerChildIndex);
// 			}
// 			index = smallerChildIndex;
// 		}
// 	}
// }

// // Creating The Priority Queue
// var PriQueue = new PriorityQueue();
// PriQueue.add(32);
// PriQueue.add(45);
// PriQueue.add(12);
// PriQueue.add(65);
// PriQueue.add(85);

// // Removing and Checking elements of highest Priority
// console.log(PriQueue.peek());
// console.log(PriQueue.remove());
// console.log(PriQueue.peek());
// console.log(PriQueue.remove());
// console.log(PriQueue.peek());
// console.log(PriQueue.remove());
