"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PriorityQueue = (function () {
    function PriorityQueue() {
        this.heap = [];
    }
    PriorityQueue.prototype.insert = function (val, priority) {
        if (!this.heap.length || this.heap[this.heap.length - 1][1] > priority) {
            this.heap.push([val, priority]);
            return this.heap;
        }
        var tmp = [];
        var found = false;
        for (var i = 0; i < this.heap.length; i++) {
            var p = this.heap[i][1];
            if (priority >= p && !found) {
                tmp.push([val, priority]);
                found = true;
            }
            tmp.push(this.heap[i]);
        }
        return (this.heap = tmp);
    };
    PriorityQueue.prototype.has = function (_a) {
        var id = _a.id;
        var foundNode = this.heap.find(function (_a) {
            var val = _a[0];
            return val.id == id;
        });
        return !!foundNode;
    };
    PriorityQueue.prototype.get = function (_a) {
        var id = _a.id;
        var foundNode = this.heap.find(function (_a) {
            var val = _a[0];
            return val.id == id;
        });
        return foundNode && foundNode[0];
    };
    PriorityQueue.prototype.shift = function (priority) {
        var tuple = this.heap.shift();
        if (priority) {
            return tuple;
        }
        return tuple ? tuple[0] : undefined;
    };
    PriorityQueue.prototype.pop = function (priority) {
        var tuple = this.heap.pop();
        if (priority) {
            return tuple;
        }
        return tuple ? tuple[0] : undefined;
    };
    PriorityQueue.prototype.priorities = function () {
        return this.heap.map(function (_a) {
            var _ = _a[0], p = _a[1];
            return p;
        });
    };
    PriorityQueue.prototype.values = function () {
        return this.heap.map(function (_a) {
            var val = _a[0];
            return val;
        });
    };
    PriorityQueue.prototype.size = function () {
        return this.heap.length;
    };
    PriorityQueue.prototype.toArray = function (values) {
        if (values) {
            return this.heap.map(function (_a) {
                var val = _a[0];
                return val;
            });
        }
        return this.heap;
    };
    return PriorityQueue;
}());
exports.PriorityQueue = PriorityQueue;
//# sourceMappingURL=priorityqueue.js.map