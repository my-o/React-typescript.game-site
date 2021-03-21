import styled from "styled-components";
import { backgroundColor, secondaryTextColor, breakpoints } from "styles";

// filter form base style
export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  max-width:542px;
  padding 0 16px;
  margin: 30px auto;
  color: ${secondaryTextColor};
  box-sizing: border-box

  @media (min-width: ${breakpoints.tablet}) {
    max-width: ${breakpoints.tablet};
  }

  @media (min-width: ${breakpoints.desktop}) {
    max-width: 810px;
  }
`;

// filter label style
export const Label = styled.label`
  margin-right: 16px;
  flex-basis: 25%;

  &:last-of-type {
    margin-right: 0;
  }
`;

// filter select style
export const Select = styled.select`
  width: 100%;
  height: 25px;
  margin-top: 0;
  color: white;
  background-color: ${backgroundColor};
  border-radius: 3px;
`;
