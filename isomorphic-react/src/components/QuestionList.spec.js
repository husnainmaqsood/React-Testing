describe("The Question List", () => {
  beforeEach(() => {
    console.log("in before each");
  });
  afterEach(() => {
    console.log("in after each");
  });
  beforeAll(() => {
    console.log("in the beforeAll block");
  });
  afterAll(() => {
    console.log("in the afterAll block");
  });
  it.only("should display the items of list", () => {
    expect(2 + 2).toEqual(4);
  });
});
