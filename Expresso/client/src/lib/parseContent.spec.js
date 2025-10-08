import parseContent from "./parseContent.js";

describe("parseContent", () => {

  test("returns an object with name, image_url, ingredients, and steps properties", () => {
    expect(
      parseContent({
        name: "",
        image_url: "",
        ingredients: "",
        steps: "",
      })
    ).toMatchObject({
      name: "",
      image_url: "",
      ingredients: [],
      steps: [],
    });
  });

  test("does not modify the image_url field", () => {
    expect(
      parseContent({
        name: "",
        image_url: "teststring123",
        ingredients: "",
        steps: "",
      }).image_url
    ).toBe("teststring123");
  });

  test("trims whitespace and splits ingredients and steps into separate lines", () => {
    const result = parseContent({
      name: "",
      image_url: "",
      ingredients: " espresso    \n milk \n ice ",
      steps: " grind beans    \n  boil water  \n  brew ",
    });

    expect(result.ingredients).toEqual(["espresso", "milk", "ice"]);
    expect(result.steps).toEqual(["grind beans", "boil water", "brew"]);
  });

  test("formats name to title case", () => {
    const out = parseContent({ name: "  my AMAZING latte  " });
    expect(out.name).toBe("My Amazing Latte");
  });

});
