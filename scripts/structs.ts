import structs from "../src/structs";

/* eslint-disable */

const main = async () => {
  // Priority Queue
  const pq = new structs.PriorityQueue<string>();
  pq.enqueue("item1", 2);
  pq.enqueue("item2", 1);
  pq.enqueue("item3", 3);

  console.log(pq.dequeue()); // Output: item2
  console.log(pq.dequeue()); // Output: item1
  console.log(pq.dequeue()); // Output: item3

  // Doubly Linked List
  const list = new structs.DoublyLinkedList<number>();

  list.append(1);
  list.append(2);
  list.prepend(0);
  list.insert(2, 1.5);
  list.remove(3);

  console.log(list.toArray()); // output: [0, 1, 1.5]
  console.log(list.length); // output: 3

  // HashMap
  const map = new structs.HashMap<string, number>();
  map.put("one", 1);
  map.put("two", 2);
  map.put("three", 3);

  console.log(map.get("one")); // Output: 1
  console.log(map.get("two")); // Output: 2
  console.log(map.get("three")); // Output: 3
  console.log(map.get("four")); // Output: undefined

  console.log(map.getSize()); // Output: 3

  map.remove("two");

  console.log(map.get("two")); // Output: undefined
  console.log(map.getSize()); // Output: 2

  map.clear();

  console.log(map.get("one")); // Output: undefined
  console.log(map.get("three")); // Output: undefined
  console.log(map.getSize()); // Output: 0
};

main()
  .then((val) => console.log(val))
  .catch((err) => console.log(err));
