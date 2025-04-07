/*
async/await = 

async = make a function return a promise
await = makes an async function wait for a promise

allows you write asynchronous code in a synchronous manner 
async doesnt have resolve or reject parameters
everything after await is placed in an event queue
*/

async function doChores() {
  try {
    const walkDog1 = await walkDog();
    console.log(walkDog1);

    const cleanKitchen1 = await cleanKitchen();
    console.log(cleanKitchen1);

    const trashOut1 = await trashOut();
    console.log(trashOut1);

    console.log("all done");
  } catch (error) {
    console.error(error);
  }
}
doChores();
