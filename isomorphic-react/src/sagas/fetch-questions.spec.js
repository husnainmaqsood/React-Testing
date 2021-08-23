import { handleFetchQuestion } from "./fetch-question-saga";
import fetch from "isomorphic-fetch";
describe("Fetch question saga", () => {
  beforeAll(() => {
    fetch.__setValue([{ question_id: 42 }]);
  });
  it("should fetch the questions", async () => {
    const gen = handleFetchQuestion({ question_id: 42 }); // we have created the generator
    const { value } = await gen.next(); // running the generator
    expect(value).toEqual([{ question_id: 42 }]);
    expect(fetch).toHaveBeenCalledWith("/api/questions/42");
  });
});
