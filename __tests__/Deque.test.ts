import { mock } from "node:test";
import {Deque} from "../src/Deque"


describe("Deque Tests", () => {
	let deque : Deque<number>;

	beforeEach(() => {
		deque = new Deque<number>();
	})

	test("Size is 0 when nothing is pushed.", () => {
		expect(deque.size()).toEqual(0);
	})

	test("Size is 1 when 10 is pushed.", () => {
		deque.pushBack(10);
		expect(deque.size()).toEqual(1);
	})

	test("Size is 0 when 10 is pushed and pop.", () => {
		deque.pushBack(10);
		deque.popBack();
		expect(deque.size()).toEqual(0);
	})

	test("Size is 2 when after pushing 10 and 20.", () => {
		deque.pushBack(10);
		deque.pushBack(20);
		expect(deque.size()).toEqual(2);
	})

	test("Size is 1 after pushing 10, 20 and popping once.", () => {
		deque.pushBack(10);
		deque.pushBack(20);
		deque.popBack();
		expect(deque.size()).toEqual(1);	
	})

	test("Size is 0 when deque is cleared.",() => {
		deque.pushBack(10);
		deque.pushBack(20);
		deque.clear();
		expect(deque.size()).toEqual(0);			
	})

	test("Is empty when nothing is pushed.", () => {
		expect(deque.isEmpty()).toBe(true);
	})

	test("Is not empty when 10 is pushed.", () => {
		deque.pushBack(10);
		expect(deque.isEmpty()).toBe(false);
	})

	test("Is empty after deque is cleared.", () => {
		deque.pushBack(10);
		deque.pushBack(20);
		deque.clear();
		expect(deque.isEmpty()).toBe(true);
	})

});