"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PriorityQueue = (function () {
    function PriorityQueue() {
        this.heap = [];
    }
    PriorityQueue.prototype.insert = function (item) {
        if (!this.heap.length || this.heap[this.heap.length - 1].priority > item.priority) {
            this.heap.push(item);
            return this.heap;
        }
        var tmp = [];
        var found = false;
        for (var i = 0; i < this.heap.length; i++) {
            var p = this.heap[i].priority;
            if (item.priority >= p && !found) {
                tmp.push(item);
                found = true;
            }
            tmp.push(this.heap[i]);
        }
        return (this.heap = tmp);
    };
    PriorityQueue.prototype.has = function (_a) {
        var id = _a.id;
        var foundNode = this.heap.find(function (val) { return val.id == id; });
        return !!foundNode;
    };
    PriorityQueue.prototype.get = function (_a) {
        var id = _a.id;
        var foundNode = this.heap.find(function (val) { return val.id == id; });
        return foundNode;
    };
    PriorityQueue.prototype.shift = function (priority) {
        return this.heap.shift();
    };
    PriorityQueue.prototype.pop = function () {
        return this.heap.pop();
    };
    PriorityQueue.prototype.priorities = function () {
        return this.heap.map(function (item) { return item.priority; });
    };
    PriorityQueue.prototype.values = function () {
        return this.heap.map(function (val) { return val; });
    };
    PriorityQueue.prototype.size = function () {
        return this.heap.length;
    };
    PriorityQueue.prototype.toArray = function () {
        return this.heap;
    };
    return PriorityQueue;
}());
exports.PriorityQueue = PriorityQueue;
//# sourceMappingURL=priorityqueue.js.map