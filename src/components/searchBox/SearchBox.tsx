import { useState } from "react";
import SearchInput from "../searchInput/SearchInput";

const SearchBox = ({ handleChange }) => {

  return (
    <section id="isSearchBox">
      <input
        type="search"
        placeholder="Maybe Avengers?"
        onChange={handleChange}
      />
    </section>
  );
};

export default SearchBox;
