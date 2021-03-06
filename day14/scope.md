# JavaScript Scope

Scope in JavaScript refers to the current context of code, which determines the accessibility of variables to JavaScript. The two types of scope are local and global:

> The scope is a space policy that rules the accessibility of variables.

- Block Scope `variable is declared inside a code block`
- Global variables `are those declared outside of a block`
- Local variables `are those declared inside of a block`

## Global Scope

- If a variable is declared outside all functions or curly braces (`{}`), it is said to be defined in the global scope.
- The global scope is the outermost scope. It is accessible from any inner (aka local) scope.

In the example below, we will create a global variable.

// Initialize a global variable
let data = "pass123";

A variable declared inside the global scope is named global variable. Global variables are accessible from any scope.

## Local Scope

Variables that are usable only in a specific part of your code are considered to be in a local scope. These variables are also called local variables.

In JavaScript, there are two kinds of local scope: `function scope` and `block scope`.

### Function Scope

When you declare a variable in a function, you can access this variable only within the function. You can’t get this variable once you get out of it.

In the example below, the variable hello is in the sayHello scope:

```js
function sayHello() {
  const hello = "Hello Coders!";
  console.log(hello);
}

sayHello(); // 'Hello Coders!'

console.log(hello); // Error, hello is not defined
```

### Block scope

When you declare a variable with const or let within a curly brace (`{}`), you can access this variable only within that curly brace.

In the example below, you can see that hello is scoped to the curly brace:

```js
{
  const hello = "Hello JS Coders!";
  console.log(hello); // 'Hello JS Coders!'
}

console.log(hello); // Error, hello is not defined
```

- The block scope is a subset of a function scope since functions need to be declared with curly braces

## Nested scopes

When a function is defined in another function, the inner function has access to the outer function’s variables. This behavior is called lexical scoping.

However, the outer function does not have access to the inner function’s variables.

```js
function outerFunction() {
  const outer = `I'm the outer function!`;

  function innerFunction() {
    const inner = `I'm the inner function!`;
    console.log(outer); // I'm the outer function!
  }

  console.log(inner); // Error, inner is not defined
}
```
