class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    prepend(value) {
        const node = new Node(value);

        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    print() {
        if (this.isEmpty()) {
            console.log('List is empty.');
        } else {
            let curr = this.head;
            let listValues = '';
            while (curr) {
                listValues += `${curr.value} `;
                curr = curr.next;
            }
            console.log(listValues);
        }
    }

    removeEnd() {
        if (this.isEmpty()) {
            console.log('List is empty. Nothing to remove.');
        } else if (this.getSize() === 1) {
            // Only one node in the list, set head to null
            this.head = null;
            this.size = 0;
        } else {
            let prev = null;
            let curr = this.head;
            // Traverse to the end of the list
            while (curr.next) {
                prev = curr;
                curr = curr.next;
            }
            // Set the next of previous node to null to remove the last node
            prev.next = null;
            this.size--;
        }
    }
}

const list = new LinkedList();
list.prepend(10);
list.prepend(20);
list.prepend(30);
list.prepend(40);
console.log('Original List:');
list.print(); // Output: 40 30 20 10
list.removeEnd();
console.log('List after removing end node:');
list.print(); // Output: 40 30 20
