import { storiesOf } from "@storybook/react";
import * as React from "react";
import LeftSideBar from "./LeftSideBar";

const props:any = {
  direction: 'left',
  visible: true
}

storiesOf("LeftSideBar", module)
  .add("with text", () => <LeftSideBar {...props}/>)
