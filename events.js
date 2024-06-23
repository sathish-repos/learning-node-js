import { EventEmitter } from "events";

const myEmitter = new EventEmitter();

function greetHandler(name) {
  console.log("hello " + name);
}

function goodbyeHandler() {
  console.log("goodbye...");
}

// register event listeners
myEmitter.on("greet", greetHandler);
myEmitter.on("goodbye", goodbyeHandler);

myEmitter.emit("greet", "sathish");
myEmitter.emit("goodbye");

myEmitter.on("error", (error) => {
  console.log("an error occurred: ", error);
});

myEmitter.emit("error", new Error("something went wrong"));
