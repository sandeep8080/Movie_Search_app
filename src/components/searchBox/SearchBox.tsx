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
