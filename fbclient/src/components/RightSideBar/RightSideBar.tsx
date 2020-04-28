import * as React from 'react';
import { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'

import {
    Button,
    Checkbox,
    Grid,
    Header,
    Icon,
    Image,
    Menu,
    Segment,
    Sidebar,
  } from 'semantic-ui-react'

const RightSidebar = ({ direction, visible }:any) => (
    <Sidebar
      as={Menu}
      direction={direction}
      icon='labeled'
      vertical
      visible={visible}
      width='thin'
    >
      <Menu.Item as='a'>
      </Menu.Item>
      <h5>GROUP CONVERSATIONS</h5>
      <Menu.Item as='a'>
        create new group
        <Icon name='users' />
      </Menu.Item>
      <Menu.Item as='a'>
        More contacts
      </Menu.Item>
    </Sidebar>)

export default RightSidebar;  
