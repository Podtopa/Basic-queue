const MAX_LENGTH = 18;

class Queue {
    constructor(value = []) {
        this.data = value;
    }

    print = () => {
        return this.data;
    }

    length = () => {
        return this.data.length;
    }

    push = (value) => {
        this.data.push(value);
    }

    shift = () => {
        return this.data.shift();
    }
}

function newElement(number) {
    const newBlock = document.createElement('div');
    newBlock.classList.add('element');
    const newNumber = document.createElement('p');
    newNumber.textContent = number;
    newBlock.appendChild(newNumber);
    return newBlock;
}

function addElement(value) {
    const list = document.getElementById('queue');
    const child = newElement(value);
    list.appendChild(child);
}

function setQueue(queue) {
    localStorage.setItem('queue', JSON.stringify(queue));
}

function getQueue() {
    const queue = localStorage.getItem('queue') || '';
    return queue ? JSON.parse(queue) : [];
}

const storedValue = getQueue();
const queue = new Queue(storedValue);
const values = queue.print();
values.forEach(value => {
    addElement(value);
});

function pushElement(){
    const input = document.getElementById('input');
    const { value } = input;
    if (value) {
        if (queue.length() !== MAX_LENGTH) {
            addElement(value);

            queue.push(value);
            setQueue(queue.print());
            input.value = '';
        } else {
            alert('You have reached the max length')
        }
    } else {
        alert('Impossible actions');
    }
}

function deleteElement() {
    const list = document.getElementById('queue');
    list.removeChild(list.firstElementChild);
    queue.shift();
    setQueue(queue.print());
}
