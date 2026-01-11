export class Stack<T> {
	private items : T[] = [];
	
	peek(): T {
		if(this.isEmpty()){
			throw new Stack.EmptyStackError();
		}

		return this.items[this.items.length - 1]!;
	}
 
	size(): number {
		return this.items.length;
	}

	pop() : T {
		if(this.isEmpty()){
			throw new Stack.EmptyStackError();
		}

		return this.items.pop()!;
	}
	
	push(value: T) {
		this.items.push(value)
	}

	isEmpty(): boolean {
		return this.size() === 0;
	}

	static EmptyStackError = class extends Error {
	constructor() {
	  super("Stack is empty");
	  this.name = "EmptyStackError";
	}
  };
}