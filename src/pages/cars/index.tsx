import React from "react";
import { Screen, Typography } from "../../library";

interface Iindex {}

const index = (props: Iindex) => {
  return (
    <Screen>
      <Typography text="Cars" />
    </Screen>
  );
};

index.defaultProps = {};

export default index;
