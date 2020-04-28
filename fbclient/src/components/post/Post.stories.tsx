import { storiesOf } from "@storybook/react";
import * as React from "react";
import Post from "./Post";
storiesOf("Post", module)
  .add("with text", () => <Post />)
