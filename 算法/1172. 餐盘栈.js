/**
 * @param {number} capacity
 */
var DinnerPlates = function(capacity) {
    this.capacity = capacity;
    this.stacks = []; // 存放栈的栈
    this.indexes = []; // 未满栈的索引
};

/**
 * @param {number} val
 * @return {void}
 */
DinnerPlates.prototype.push = function(val) {
    const { indexes, capacity, stacks } = this;
    if (indexes.length > 0) {
        const index = indexes[0];
        const stack = stacks[index];
        stack.push(val);
        if (stack.length === capacity) {
            this.indexes.shift();
        }
    } else {
        if (capacity > 1) {
            this.indexes.push(this.stacks.length);
        }
        this.stacks.push([val]);
    }
};

/**
 * @return {number}
 */
DinnerPlates.prototype.pop = function() {
    const { indexes, stacks, capacity } = this;
    let lastStack;
    while (stacks.length) {
        const stack = stacks[stacks.length - 1];
        if (stack.length) {
            lastStack = stack;
            break;
        } else {
            stacks.pop();
            indexes.pop();
        }
    }
    if (lastStack) {
        if (lastStack.length === capacity) {
            this.insertIndex(this.stacks.length - 1);
        }
        return lastStack.pop();
    } else {
        return -1;
    }
};

/**
 * @param {number} index
 * @return {number}
 */
DinnerPlates.prototype.popAtStack = function(index) {
    const { stacks, capacity } = this;
    const stack = stacks[index];
    if (!stack || !stack.length) {
        return -1;
    } else {
        if (stack.length === capacity) {
            this.insertIndex(index);
        }
        return stack.pop();
    }
};

DinnerPlates.prototype.insertIndex = function(index) {
    const i = this.indexes.findIndex(i => index < i);
    if (i !== -1) {
        this.indexes.splice(i, 0, index);
    } else {
        this.indexes.push(index);
    }
}

/**
 * Your DinnerPlates object will be instantiated and called as such:
 * var obj = new DinnerPlates(capacity)
 * obj.push(val)
 * var param_2 = obj.pop()
 * var param_3 = obj.popAtStack(index)
 */