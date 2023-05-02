import axios from "axios";
import { useEffect, useState } from "react";

const dummy = [
  {
    "Title": "Laisse tes mains sur mes hanches",
    "Year": "2003",
    "imdbID": "tt0339279",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjI3NDM5MzU1OF5BMl5BanBnXkFtZTcwNjg2ODc4Mw@@._V1_SX300.jpg"
  },
  {
    "Title": "Dans tes bras",
    "Year": "2009",
    "imdbID": "tt1320372",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ4ZDY3NzQtNTJjYy00Zjc4LWIxYTQtZDZjZjk0ODU2MWRhL2ltYWdlXkEyXkFqcGdeQXVyNzIyODY5MDk@._V1_SX300.jpg"
  },
  {
    "Title": "Fadily Camara: La plus drôle de tes copines",
    "Year": "2019",
    "imdbID": "tt11168150",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMGUxYTcyMDItY2QzZS00MmIzLTg4NDEtYjNiODg0NGY1MGE4XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
  },
  {
    "Title": "Sous tes doigts",
    "Year": "2015",
    "imdbID": "tt4985124",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZGY1M2E4MDUtN2IwYy00MTdiLWJmN2ItYzEwYWMyOTY0NjU2XkEyXkFqcGdeQXVyMTA2Njc5Nzc0._V1_SX300.jpg"
  },
  {
    "Title": "Chérie, ôte tes raquettes",
    "Year": "1975",
    "imdbID": "tt0228139",
    "Type": "movie",
    "Poster": "N/A"
  },
  {
    "Title": "inter.m@tes",
    "Year": "2004",
    "imdbID": "tt0410945",
    "Type": "movie",
    "Poster": "N/A"
  },
  {
    "Title": "Marie Trintignant: Tes rêves brisés",
    "Year": "2022",
    "imdbID": "tt17446552",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZTAyMzc1MWUtNGU4Yi00OWUyLWFjNzQtMTNiMzNmNzEwYmQ5XkEyXkFqcGdeQXVyMjIwNjIxNjc@._V1_SX300.jpg"
  },
  {
    "Title": "Dans tes yeux",
    "Year": "2012–",
    "imdbID": "tt2283569",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYTkzMjkyZWItNjE5NS00ZjMzLWFmMTQtZGU5N2M5NWNlMjc2XkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_SX300.jpg"
  },
  {
    "Title": "À tes côtés",
    "Year": "2021",
    "imdbID": "tt15662542",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZDZhMjFmMzUtNTIzNS00MWVlLWIxN2ItNjlmM2U4MjdjNzIzXkEyXkFqcGdeQXVyMzE2ODIxNA@@._V1_SX300.jpg"
  },
  {
    "Title": "À tes amours",
    "Year": "2001",
    "imdbID": "tt0328714",
    "Type": "movie",
    "Poster": "N/A"
  }
];

export const useCallAPI = (url: string, searchText: String) => {
  const [data, setData] = useState(dummy);
  const [status, setStaus] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  async function callApi() {
    try {
      const res = await axios.get(url, {
        params: {
          apikey: '7eab3a7a',
          s: searchText,
        }
      });
      if (res.data?.Search) {
        setStaus('Success');
        setData(res.data.Search);
      } else {
        setStaus('Error');
        setError(res.Error);
      }

    } catch (err) {
      setStaus('Error');
      setError(res.Error);
    } finally {
      // setLoading(false);
      console.log('Finished');
    }
  }
  useEffect(() => {
    if (searchText) {
      // callApi();
    }
  }, [url, searchText]);

  return {
    data,
    status,
    loading,
    error
  }
}