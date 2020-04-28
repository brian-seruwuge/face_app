import { storiesOf } from "@storybook/react";
import * as React from "react";
import RightSidebar from "./RightSideBar";

const props:any = {
    direction: 'right',
    visible: true
}


storiesOf("RightSidebar", module)
  .add("with text", () => <RightSidebar {...props}/>)
