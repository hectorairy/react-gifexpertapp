import React from "react";
import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe("Pruebas en <GifGridItem />", () => {
  const title = "Un titulo";
  const url = "https://localhost/algo.jpg";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("Debe de mostrar el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de tener un parrafo con el title", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });
  test("Debe de tener una imagen igual al url y alt de los props", () => {
    const img = wrapper.find("img");
    expect(img.props()).toEqual({
      src: url,
      alt: title,
    });
  });

  test("Debe de tener la clase animate__fadeInDown", () => {
    const div = wrapper.find("div");
    // console.log(div.prop("className"));
    expect(div.prop("className").includes("animate__fadeInDown")).toBe(true);
  });
});
