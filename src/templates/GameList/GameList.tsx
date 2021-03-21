import React, { ReactElement } from "react";
import GameCard from "components/GameCard";
import { Game } from "types";
import { List, ListItem } from "./styles";

interface Props {
  err?: string;
  games: Game[];
}

// GameList component
const GameList = ({ err, games }: Props): ReactElement => {
  // if caught error while fetch games data
  if (err) {
    return <p>Unable to fetch games</p>;
  }
  // if result data is empty
  if (!games?.length) {
    return <p>No games available</p>;
  }
  return (
    <List>
      {games.map((game) => (
        <ListItem key={game.id}>
          <GameCard content={game} />
        </ListItem>
      ))}
    </List>
  );
};

export default GameList;
