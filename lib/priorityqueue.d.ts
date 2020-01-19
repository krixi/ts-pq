export interface QueueItem {
    id: string;
    priority: number;
}
export declare class PriorityQueue<T extends QueueItem> {
    heap: T[];
    constructor();
    insert(item: T): T[];
    has({ id }: T): boolean;
    get({ id }: T): T | undefined;
    shift(priority: boolean): T | undefined;
    pop(): T | undefined;
    priorities(): number[];
    values(): T[];
    size(): number;
    toArray(): T[];
}
