import { storiesOf } from "@storybook/react";
import * as React from "react";
import Comments from "./comments";

storiesOf("Comments", module)
  .add("with text", () => <Comments />)
