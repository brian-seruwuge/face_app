import { storiesOf } from "@storybook/react";
import * as React from "react";
import Login from "./Login";
storiesOf("Login", module)
  .add("with text", () => <Login/>)
