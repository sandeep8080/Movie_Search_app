import { useState, useEffect } from "react";
import "./App.css";
import { SEARCH_URL } from "./utils/constants";
import Layout from "./components/layout";
import AppHeader from "./components/header";
import AppFooter from "./components/footer";
import SearchBox from "./components/searchBox/SearchBox";
import MovieCard from "./components/movieCard/MovieCard";
import { useCallAPI } from "./utils/util";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const { data, status, loading, error } = useCallAPI(SEARCH_URL, searchText);
  console.log(data, status, error);

  const handleChange = (evt) => {
    const { value } = evt.target;
    setSearchText(value);
  };

  return (
    <>
      <Layout>
        <AppHeader />
        <main>
          <SearchBox handleChange={handleChange} />
          <div className='movies-layout'>
            {data.map((searchItem) => {
              return <MovieCard searchItem={searchItem} />;
            })}
          </div>
        </main>
        <AppFooter />
      </Layout>
    </>
  );
};

export default App;
