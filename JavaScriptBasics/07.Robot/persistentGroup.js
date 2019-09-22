class PGroup {
    constructor() {
        this.members = [];
    }

    has(value) {
        return this.members.indexOf(value) != -1;
    }

    add(value) {
        const group = new PGroup();
        group.members = this.members.slice();
        if (!group.has(value)) {
            group.members.push(value);
        }

        return group;
    }

    delete(value) {
        const group = new PGroup();
        group.members = this.members.slice();
        if (group.has(value)) {
            group.members.splice(group.members.indexOf(value), 1);
        }

        return group;
    }
}

PGroup.empty = new PGroup();

let a = PGroup.empty.add('a');
let ab = a.add('b');
let b = ab.delete('a');

console.assert(b.has('b'), 'PGroup should have b');
console.assert(!a.has('b'), 'PGroup should not have b');
console.assert(!b.has('a'), 'PGroup should not have a');

console.log('PGroup a: ', a);
console.log('PGroup ab: ', ab);
console.log('PGroup b: ', b);