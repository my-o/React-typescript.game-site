import React, { ChangeEvent, ReactElement } from "react";
import GameCard from "components/GameCard";
import GameFilter from "components/GameFilter";
import { Game } from "types";
import { List, ListItem } from "./styles";

interface Props {
  err?: string;
  games: Game[];
  onFilterChange: (e: ChangeEvent<HTMLFormElement>) => void;
}

// GameList component
const GameList = ({ err, games, onFilterChange }: Props): ReactElement => {
  // if caught error while fetch games data
  if (err) {
    return <p>Unable to fetch games</p>;
  }
  // if result data is empty
  if (!games?.length) {
    return <p>No games available</p>;
  }
  return (
    <>
      <GameFilter onChange={onFilterChange} />
      <List>
        {games.map((game) => (
          <ListItem key={game.id}>
            <GameCard content={game} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GameList;
