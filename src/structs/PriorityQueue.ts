/* eslint-disable prefer-destructuring */

type PriorityQueueItem<T> = {
  priority: number;
  item: T;
};

export class PriorityQueue<T> {
  private heap: PriorityQueueItem<T>[];

  private length: number;

  constructor() {
    this.heap = [];
    this.length = 0;
  }

  private bubbleUp() {
    let index = this.length - 1;
    while (index > 0) {
      const element = this.heap[index];
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];
      if (parent.priority <= element.priority) break;
      this.heap[index] = parent;
      this.heap[parentIndex] = element;
      index = parentIndex;
    }
  }

  private bubbleDown() {
    let index = 0;
    while (index >= 0) {
      const leftChildIndex = index * 2 + 1;
      const rightChildIndex = index * 2 + 2;
      let swapIndex = -1;
      if (leftChildIndex < this.length) {
        const leftChild = this.heap[leftChildIndex];
        if (leftChild.priority < this.heap[index].priority) {
          swapIndex = leftChildIndex;
        }
      }
      if (rightChildIndex < this.length) {
        const rightChild = this.heap[rightChildIndex];
        if (
          (swapIndex === null &&
            rightChild.priority < this.heap[index].priority) ||
          (swapIndex !== null &&
            rightChild.priority < this.heap[swapIndex].priority)
        ) {
          swapIndex = rightChildIndex;
        }
      }
      if (swapIndex === -1) break;
      const temp = this.heap[index];
      this.heap[index] = this.heap[swapIndex];
      this.heap[swapIndex] = temp;
      index = swapIndex;
    }
  }

  public enqueue(item: T, priority: number) {
    const element: PriorityQueueItem<T> = { item, priority };
    this.heap.push(element);
    this.length++;
    this.bubbleUp();
  }

  public dequeue(): T {
    const item = this.heap[0].item;
    this.heap[0] = this.heap[this.length - 1];
    this.length--;
    this.heap.pop();
    this.bubbleDown();
    return item;
  }

  public isEmpty(): boolean {
    return this.length === 0;
  }

  public size(): number {
    return this.length;
  }
}
