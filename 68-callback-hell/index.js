// callback hell = situasion in javascript where callbacks are nested within other callbacks to the defree where the code is difficult to read. old pattern to handle asynchronous functions. use promises + async/await to avoid callback hell.

function task1(callback) {
  setTimeout(() => {
    console.log("task 1 complete");
    callback();
  }, 2000);
}

function task2(callback) {
  setTimeout(() => {
    console.log("task 2 complete");
    callback();
  }, 1000);
}

function task3(callback) {
  setTimeout(() => {
    console.log("task 3 complete");
    callback();
  }, 4000);
}

function task4() {
  console.log("task 4 complete");
}

task1(() => {
  task2(() => {
    task3(() => {
      console.log("all task complete");
    });
  });
});
