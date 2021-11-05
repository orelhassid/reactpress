import React from "react";
import Styled from "./styles";

interface ITypography {
  text: string;
}

const Typography = ({ text }: ITypography) => {
  return <Styled.Typography>{text}</Styled.Typography>;
};

Typography.defaultProps = {
  text: "Type here",
};

export default Typography;
