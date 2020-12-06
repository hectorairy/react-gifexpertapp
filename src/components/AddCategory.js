import React, { useState } from "react";
import PropTypes from "prop-types";

export default function AddCategory({ setCategories }) {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // * No es necesario mandar las categorias, puede hacerlo unicamente con la función
    // * setCategories([...categories, inputValue]);
    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue, ...cats]);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
