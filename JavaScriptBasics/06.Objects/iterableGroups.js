class Group {

    constructor() {
        this.members = [];
    }

    has(value) {
        return this.members.indexOf(value) !== -1;
    }

    add(value) {
        if (!this.has(value)) {
            this.members.push(value);
        }
    }

    delete(value) {
        if (this.has(value)) {
            this.members.splice(this.members.indexOf(value), 1);
        }
    }

    static from(iterable) {
        const group = new Group();

        iterable.forEach(element => {
            group.add(element);
        });

        return group;
    }

    [Symbol.iterator]() {
        return new GroupIterator(this);
    }
}

class GroupIterator {
    constructor(group) {
        this.group = group;
        this.position = 0;
    }

    next() {
        if (this.position >= this.group.members.length) {
            return { done: true };
        } else {
            let result = { value: this.group.members[this.position], done: false };
            this.position++;

            return result;
        }
    }
}

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}