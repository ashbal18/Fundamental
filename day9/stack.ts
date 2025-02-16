class stack{
    #maxsize: number;
    #container: number[] = [];

    constructor(maxsize: number = 10){
        this.#maxsize = maxsize;
       
    }

    isFull(){
        return this.#container.length === this.#maxsize;
    }

    isEmpty(){
        return this.#container.length === 0;
    }
    push(element: number){
        if(this.isFull()){
           console.log("Stack Overflow");
           return;
        }
        this.#container.push(element);
    }

    pop(){
        if (this.isEmpty()){
            console.log("Stack Underflow");
            return;
        }
        this.#container.pop();
    }

    getElements(){
        return this.#container;
    }
}

const stack1 = new stack();

stack1.push(1)
stack1.push(2)
stack1.push(3)
console.log(stack1.getElements());

stack1.pop()
console.log(stack1.getElements());