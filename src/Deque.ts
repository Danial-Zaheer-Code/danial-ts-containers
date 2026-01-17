export class Deque<T>{
	private items : T[] = [];
	private capacity = 100;
	private head : number = 0;
	private tail : number = 0;
	private length : number = 0;
	
	pushFront(value : T){
		
	} 

	pushBack(value : T){
		this.resizeIfFull();

		this.items.push(value);
		this.length++;
		this.tail = this.tail === this.capacity ? 0 : this.tail + 1;
	}
	
	private resizeIfFull() {
		if(this.isFull()){
			this.resize();
		}
	}

	private isFull() : boolean{
		return this.size() === this.capacity;
	}

	popBack() {
		if(this.isEmpty()){
			throw new Deque.EmptyDequeError();
		}

		const item = this.items.pop();
		this.length--;
		this.tail = this.tail === 0 ? this.capacity : this.tail - 1;
	}


	private resize() {

	}
	
	isEmpty(): boolean {
		return this.size() === 0;
	}

	size() : number {
		return this.length;
	}

	clear() {
		this.items = [];
		this.head = 0;
		this.tail = 0;
		this.length = 0;
	}

	static EmptyDequeError = class extends Error {
		constructor() {
			super("Deque is empty");
			this.name = "EmptyDequeError";
		}
	};
}