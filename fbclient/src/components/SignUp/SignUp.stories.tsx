import * as React from 'react';
import SignUp from './SignUp';
import { storiesOf } from "@storybook/react";

export default {
title:"SignUp",
component: SignUp
}

storiesOf("SignUp", module)
  .add("with text", () => <SignUp/>)
