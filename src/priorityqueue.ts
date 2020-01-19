export interface QueueItem {
  id: string;
  priority: number;
}

export class PriorityQueue<T extends QueueItem> {
  heap: T[] = [];

  constructor() {}

  insert(item: T) {
    if (!this.heap.length || this.heap[this.heap.length - 1].priority > item.priority) {
      this.heap.push(item);
      return this.heap;
    }

    const tmp: T[] = [];
    let found = false;

    for (let i = 0; i < this.heap.length; i++) {
      const p = this.heap[i].priority;

      if (item.priority >= p && !found) {
        tmp.push(item);
        found = true;
      }

      tmp.push(this.heap[i]);
    }

    return (this.heap = tmp);
  }

  has({ id }: T) {
    const foundNode = this.heap.find((val) => val.id == id);

    return !!foundNode;
  }

  get({ id }: T) {
    const foundNode = this.heap.find((val) => val.id == id);

    return foundNode;
  }

  shift(priority: boolean) : T | undefined {
    return this.heap.shift();
  }

  pop() : T | undefined {
    return this.heap.pop();
  }

  priorities(): number[] {
    return this.heap.map((item) => item.priority);
  }

  values(): T[] {
    return this.heap.map((val) => val);
  }

  size(): number {
    return this.heap.length;
  }

  toArray(): T[] {
    return this.heap;
  }
}
