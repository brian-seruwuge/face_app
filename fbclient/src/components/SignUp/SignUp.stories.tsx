import * as React from 'react';
import SignUp from './SignUp';
import { storiesOf } from "@storybook/react";

storiesOf("SignUp", module)
  .add("with text", () => <SignUp/>)
