import React from "react";
import Styled from "./styles";

interface ISection {}

const Section = ({ title, children }: ISection) => {
  return (
    <Styled.Section>
      <h1>{title}</h1>
      <p>{children}</p>
    </Styled.Section>
  );
};

Section.defaultProps = {};

export default Section;
