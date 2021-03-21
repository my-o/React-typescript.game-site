import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  backgroundColor,
  primaryTextColor,
  secondaryColor,
  secondaryTextColor,
  thirdTextColor,
  breakpoints,
} from "styles";

// game card base (link) style
export const StyledLink = styled(Link)`
  display: inline-block;
  width: 100%;
  background-color: ${secondaryColor};
  border-radius: 4px;
  text-decoration: none;
`;

// game card image style
export const Img = styled.img`
  width: 100%;
`;

// game card details style
export const Details = styled.div`
  padding: 20px;
`;

// game card title style
export const Title = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: 510;
  color: ${primaryTextColor};

  @media (min-width: ${breakpoints.tablet}) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

// game card description style
export const Description = styled.p`
  font-size: 16px;
  color: ${secondaryTextColor};

  @media (min-width: ${breakpoints.tablet}) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

// game card genre style
export const Genre = styled.p`
  padding: 2px 4px;
  margin: 0 8px 0 0;
  border-radius: 4px;
  font-size: 12px;
  color: ${thirdTextColor};
  background-color: ${backgroundColor};
  float: right;
`;

// game card svg icon style
export const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;
