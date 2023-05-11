/* eslint-disable max-classes-per-file */

class DoublyLinkedListNode<T> {
  public value: T;

  public next: DoublyLinkedListNode<T> | null;

  public prev: DoublyLinkedListNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export class DoublyLinkedList<T> {
  private head: DoublyLinkedListNode<T> | null;

  private tail: DoublyLinkedListNode<T> | null;

  private _length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this._length = 0;
  }

  public get length(): number {
    return this._length;
  }

  public append(value: T) {
    const node = new DoublyLinkedListNode<T>(value);
    if (this.tail === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this._length++;
  }

  public prepend(value: T) {
    const node = new DoublyLinkedListNode<T>(value);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this._length++;
  }

  public insert(index: number, value: T) {
    if (index < 0 || index > this._length) {
      throw new Error(
        `Index ${index} out of range for list of length ${this._length}`
      );
    }
    if (index === 0) {
      this.prepend(value);
      return;
    }
    if (index === this._length) {
      this.append(value);
      return;
    }
    const node = new DoublyLinkedListNode<T>(value);
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current!.next!;
    }
    node.prev = current;
    node.next = current!.next;
    current!.next!.prev = node;
    current!.next = node;
    this._length++;
  }

  public remove(index: number) {
    if (index < 0 || index >= this._length) {
      throw new Error(
        `Index ${index} out of range for list of length ${this._length}`
      );
    }
    if (index === 0) {
      this.head = this.head?.next ?? null;
      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }
    } else if (index === this._length - 1) {
      this.tail = this.tail?.prev ?? null;
      if (this.tail) {
        this.tail.next = null;
      } else {
        this.head = null;
      }
    } else {
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current?.next ?? null;
      }
      if (current) {
        current.prev!.next = current.next;
        current.next!.prev = current.prev;
      }
    }
    this._length--;
  }

  public toArray(): T[] {
    const result: T[] = [];
    let current = this.head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }
}
