const { queryString } = require("./queryString");

describe("Object to query string", () => {
  it("should creates a valid query string when a object is provided", () => {
    const obj = {
      name: "Silvio",
      profession: "dev",
    };
    expect(queryString(obj)).toBe("name=Silvio&profession=dev");
  });
});

describe("Query string to object", () => {});
