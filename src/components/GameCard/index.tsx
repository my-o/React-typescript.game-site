import React, { ReactElement } from "react";
import {
  StyledLink,
  Img,
  Title,
  Details,
  Description,
  Genre,
  Icon,
} from "./styles";
import { Game } from "types";
import browserIcon from "assets/icons/browser.svg";
import windowsIcon from "assets/icons/windows.svg";
import { BROWSER, WINDOWS } from "./const";

interface Props {
  content: Game;
}

// GameCard component
const GameCard = ({ content }: Props): ReactElement => {
  const { id, title, thumbnail, short_description, genre, platform } = content;
  // platform icons
  const icons = platform.split(",").map((p) => {
    let icon = null;
    switch (p.trim()) {
      case BROWSER:
        icon = (
          <Icon key={`$(id)-browser`} alt="browser icon" src={browserIcon} />
        );
        break;
      case WINDOWS:
        icon = (
          <Icon key={`$(id)-windows`} alt="windows icon" src={windowsIcon} />
        );
        break;
      default:
        break;
    }
    return icon;
  });
  const link = `/game/${id}`;

  return (
    <StyledLink to={link}>
      <Img alt={`${title} logo`} src={thumbnail} />
      <Details>
        <Title>{title}</Title>
        <Description>{short_description}</Description>
        <Genre>{genre}</Genre>
        {icons}
      </Details>
    </StyledLink>
  );
};

export default GameCard;
