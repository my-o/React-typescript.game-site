import React, { ChangeEvent, ReactElement, useCallback, useState } from "react";
import GameList from "./GameList";
import { Filter } from "types";
import useFetch from "../../hooks/useFetch";

// GameListRender component
const GameListRender = (): ReactElement => {
  // set initial state
  const [filter, setFilter] = useState<Filter>({
      platform: "browser",
      sort: "relevance",
    }),
    { games, error } = useFetch(filter);

  // change selected option's display when filter select has changed
  const onFilterChange = useCallback((e: ChangeEvent<HTMLFormElement>) => {
    setFilter((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
    e.preventDefault();
  }, []);

  return <GameList err={error} games={games} onFilterChange={onFilterChange} />;
};

export default GameListRender;
