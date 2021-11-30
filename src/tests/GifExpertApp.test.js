import React from "react";
import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe("Pruebas en el componente <GifExpertApp />", () => {
  test("Debe de hacer match con el componente <GifExpertApp />", () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar una lista de categorias", () => {
    const categories = ["One Punch Man", "Dragon Ball"];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
