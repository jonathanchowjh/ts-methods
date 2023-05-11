/* eslint-disable max-classes-per-file */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-bitwise */

class HashNode<K, V> {
  public key: K;

  public value: V;

  public next: HashNode<K, V> | null;

  constructor(key: K, value: V) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

export class HashMap<K, V> {
  private capacity: number;

  private size: number;

  private buckets: Array<HashNode<K, V> | null>;

  constructor(capacity: number = 16) {
    this.capacity = capacity;
    this.size = 0;
    this.buckets = new Array<HashNode<K, V> | null>(capacity);
  }

  private hashCode(key: K): number {
    const hash = JSON.stringify(key);
    let hashVal = 0;

    for (let i = 0; i < hash.length; i++) {
      const char = hash.charCodeAt(i);
      hashVal = (hashVal << 5) - hashVal + char;
      hashVal &= hashVal;
    }

    return hashVal;
  }

  public put(key: K, value: V): void {
    const index = this.hashCode(key) % this.capacity;
    let currentNode = this.buckets[index];

    while (currentNode !== null && currentNode !== undefined) {
      if (currentNode.key === key) {
        currentNode.value = value;
        return;
      }
      currentNode = currentNode.next;
    }

    const newNode = new HashNode(key, value);
    newNode.next = this.buckets[index];
    this.buckets[index] = newNode;
    this.size++;
  }

  public get(key: K): V | null {
    const index = this.hashCode(key) % this.capacity;
    let currentNode = this.buckets[index];

    while (currentNode !== null && currentNode !== undefined) {
      if (currentNode.key === key) {
        return currentNode.value;
      }
      currentNode = currentNode.next;
    }

    return null;
  }

  public remove(key: K): void {
    const index = this.hashCode(key) % this.capacity;
    let prevNode: HashNode<K, V> | null = null;
    let currentNode = this.buckets[index];

    while (currentNode !== null && currentNode !== undefined) {
      if (currentNode.key === key) {
        if (prevNode === null) {
          this.buckets[index] = currentNode.next;
        } else {
          prevNode.next = currentNode.next;
        }
        this.size--;
        return;
      }
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  public clear(): void {
    this.buckets = new Array<HashNode<K, V> | null>(this.capacity);
    this.size = 0;
  }

  public isEmpty(): boolean {
    return this.size === 0;
  }

  public getSize(): number {
    return this.size;
  }
}
