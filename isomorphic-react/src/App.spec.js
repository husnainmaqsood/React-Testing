import delay from "redux-saga";

it("async test 1", (done) => {
  // done is the parameter of the function
  setTimeout(done, 400); // call done after 100 milliseconds
});

it("async test 2", () => {
  // returning promise
  return new Promise((resolve) => setTimeout(resolve, 3000));
});

it("async test 3", async () => {
  await delay(4000);
});
