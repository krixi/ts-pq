export interface QueueItem {
    id: string;
}
export declare type Tuple<T> = [T, number];
export declare class PriorityQueue<T extends QueueItem> {
    heap: Tuple<T>[];
    constructor();
    insert(val: T, priority: number): Tuple<T>[];
    has({ id }: T): boolean;
    get({ id }: T): T | undefined;
    shift(priority: boolean): T | Tuple<T> | undefined;
    pop(priority: boolean): T | Tuple<T> | undefined;
    priorities(): number[];
    values(): T[];
    size(): number;
    toArray(values: boolean): Tuple<T>[] | T[];
}
