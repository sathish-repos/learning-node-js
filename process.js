// console.log(process);
console.log(process.argv);
console.log(process.argv[1]);

// process.env
// console.log(process.env);
console.log(process.env.USERNAME);

// pid
console.log(process.pid);
console.log(process.cwd());
console.log(process.title);

// memory usage
console.log(process.memoryUsage());

console.log(process.uptime());

process.on("exit", (code) => {
  console.log(`about to exit with code ${code}`);
});

// exit()
console.log(process.exit(0));
console.log("from this line of code will not be executed");
