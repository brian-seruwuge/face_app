import { storiesOf } from "@storybook/react";
import * as React from "react";
import Users from "./Users";

storiesOf("Users", module)
  .add("with text", () => <Users />)
