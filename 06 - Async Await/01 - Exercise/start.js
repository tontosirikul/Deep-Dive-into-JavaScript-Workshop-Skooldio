// 1. Convert the code snippet to use async/await
// Bonus: Rewrite the code snippet using Promise

function simulateAsyncAPI(text, timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (text == "B") return reject("B got reject");
      console.log(text);
      resolve();
    }, timeout);
  });
}

async function run() {
  try {
    await simulateAsyncAPI("A", 1000);
    await simulateAsyncAPI("B", 500);
    await simulateAsyncAPI("C", 100);
  } catch (error) {
    console.error(error);
  }
}

run();
