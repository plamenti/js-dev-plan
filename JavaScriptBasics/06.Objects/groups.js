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
}

let group = Group.from([10, 20]);
console.log(group.has(10));
console.log(group.has(30));
group.add(10);
group.delete(10);
console.log(group.has(10));