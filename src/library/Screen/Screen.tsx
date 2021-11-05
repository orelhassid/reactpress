import React from "react";
import Styled from "./styles";

interface IScreen {
  children: React.ReactChild;
}

const Screen = ({ children }: IScreen) => {
  return <Styled.Screen>{children}</Styled.Screen>;
};

Screen.defaultProps = {};

export default Screen;
