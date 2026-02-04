# danial-ts-containers

## Introduction

This repository provides a collection of reusable and well-tested data structures implemented in TypeScript.  
The goal of this project is to offer clean, generic, and easy-to-use implementations for learning and practical use.

## List of Data Structures

- Stack
- Queue
- Deque

## Documentation

Detailed documentation for each data structure is available in the `/docs` directory.

## Installation

You can install **danial-ts-containers** via npm, yarn, or pnpm:

```bash
# Using npm
npm install ts-collections

# Using yarn
yarn add ts-collections

# Using pnpm
pnpm add ts-collections

### Usage
Import the data structures you need in your TypeScript project:

```ts
import { Stack, Queue, Deque } from "ts-collections";

// Example: Using Stack
const stack = new Stack<number>();
stack.push(10);
stack.push(20);
console.log(stack.pop()); // Output: 20

### Notes

- Written in TypeScript with full type declarations (.d.ts) for type safety.
- Compatible with Node.js, browser, or any TypeScript project.

## Versioning

This project follows Semantic Versioning (SemVer):
MAJOR.MINOR.PATCH (e.g., 1.0.0).

## Contribution Guidelines

Contributions are welcome!  
Please open an issue or submit a pull request for improvements or new data structures.
Just remember to throughly test your code before opening a pull request.

## License

This project is licensed under the MIT License.
