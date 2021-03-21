import React, { ReactElement, useEffect, useState } from "react";
import axios from "axios";
import GameList from "./GameList";
import { Game } from "types";
import { API_HOST } from "./const";
import { API_KEY } from "./const";

// GameListRender component
const GameListRender = (): ReactElement => {
  // set initial state
  const [games, setGames] = useState<Game[]>([]);
  const [err, setErr] = useState<string>("");

  useEffect(() => {
    axios
      .get("/games", {
        baseURL: `https://${API_HOST}/api`,
        headers: {
          "x-rapidapi-key": API_KEY,
          "x-rapidapi-host": API_HOST,
        },
        params: {
          platform: "browser",
        },
      })
      .then((res) => setGames(res.data))
      .catch((e) => setErr(e.message));
  });

  return <GameList err={err} games={games} />;
};

export default GameListRender;
