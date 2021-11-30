import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export default function GifExpertApp({ defaultCategories = [] }) {
  const [categories, setCategories] = useState(defaultCategories);

  // const handleAdd = () => {
  //   const newItem = "One Piece";
  //   setCategories([...categories, newItem]);
  // };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory categories={categories} setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
}
