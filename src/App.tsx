import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useState, useEffect } from "react";
import "./App.css";
import { SEARCH_URL } from "./utils/constants";
import Layout from "./components/layout";
import AppHeader from "./components/header";
import AppFooter from "./components/footer";
import SearchBox from "./components/searchBox/SearchBox";
import MovieCard from "./components/movieCard/MovieCard";

function App() {
  const { searchText, setSearchText } = useState("");

  const handleChange = (evt) => {
    const { value } = evt.target;
    console.log(evt.target.value);
    setSearchText(value);
  };

// TODO: Implement the useFetch hook and get the data from the api s='Search Value'
  useEffect(() => {
    const { data, status, loading, error } = useFetch(SEARCH_URL);
  }, [searchText]);

  return (
    <>
      <Layout>
        <AppHeader />
        <main>
          <SearchBox handleChange={handleChange} />
          <MovieCard />
        </main>
        <AppFooter />
      </Layout>
    </>
  );
}

export default App;
