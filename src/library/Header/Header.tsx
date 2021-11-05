import React from "react";
import Styled from "./styles";

interface IHeader {
  styles: {};
}

const Header = (props: IHeader) => {
  return (
    <Styled.Header>
      {/* Logo */}
      {/* Menu */}
      {/* CTA */}
    </Styled.Header>
  );
};

Header.defaultProps = {};

export default Header;
