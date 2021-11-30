import { getGifs } from "../../helpers/getGifs";

describe("Pruebas con fetchGifs", () => {
  test("Debe de traer 10 elementos", async () => {
    const gifs = await getGifs("One punch");
    expect(gifs.length).toBe(10);
  });

  test("No debe de traer elementos", async () => {
    const gifs = await getGifs("");
    expect(gifs.length).toBe(0);
  });
});
