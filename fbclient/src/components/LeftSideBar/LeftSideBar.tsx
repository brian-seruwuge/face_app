import * as React from 'react';
import { Component } from 'react';

import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const LeftSideBar=({direction, visible}:any)=>
<Sidebar
as={Menu}
direction={direction}
icon='labeled'
vertical
visible={visible}
width='thin'
>
<Menu.Item as='a'>
  <Icon name='home' />
  profile
</Menu.Item>
<Menu.Item as='a'>
  <Icon name='image' />
  Newsfeed
</Menu.Item>
<Menu.Item as='a'>
  <Icon name='facebook messenger' />
  messanger
</Menu.Item>
<Menu.Item as='a'>
  <Icon name='play circle outline' />
  watch
</Menu.Item>
<h4>shortcuts</h4>
<Menu.Item as='a'>
  <Icon name='group' />
  Suffering African child
</Menu.Item>
<h4>Explore</h4>
<Menu.Item as='a'>
  <Icon name='shield alternate' />
  covid 19 information
</Menu.Item>
<Menu.Item as='a'>
  <Icon name='flag outline' />
  Pages
</Menu.Item>
<Menu.Item as='a'>
  <Icon name='heart' />
  Fund raisers
</Menu.Item>
<Menu.Item as='a'>
  <Icon name='calendar outline' />
  Events
</Menu.Item>
<Menu.Item as='a'>
  <Icon name='group' />
  groups
</Menu.Item>

</Sidebar>

export default LeftSideBar;
