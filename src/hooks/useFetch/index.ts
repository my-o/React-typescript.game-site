import axios from "axios";
import { useEffect, useState } from "react";
import { Filter, Game } from "../../types";
import { API_KEY, API_HOST } from "./const";

type Response = {
  games: Game[];
  error?: string;
};

// fetch games data method
const useFetch = (params: Filter): Response => {
  // set initial state
  const [games, setGames] = useState<Game[]>([]),
    [err, setErr] = useState<string>(""),
    { platform, genre, tag, sort } = params;

  useEffect(() => {
    axios
      .get("/games", {
        baseURL: `https://${API_HOST}/api`,
        headers: {
          "x-rapidapi-key": API_KEY,
          "x-rapidapi-host": API_HOST,
        },
        params: {
          platform,
          category: genre,
          tag,
          "sort-by": sort,
        },
      })
      .then((res) => setGames(res.data))
      .catch((e) => setErr(e.message));
  }, [platform, genre, tag, sort]);

  return {
    games,
    error: err,
  };
};

export default useFetch;
