import * as React from 'react';
import { Component } from 'react';
import { Button, Checkbox, Form, Menu, Input, Dropdown, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

export interface MenuBarProps {
}
 
export interface MenuBarState {
    search: string
    
}
 
class MenuBar extends React.Component<MenuBarProps, MenuBarState> {
    constructor(props:any){
        super(props)
    this.state = { search:""  }}
    render() { 
        return (
            <Menu size = "tiny">
                   <Menu.Item as = "a" header>
              <Image    
              size="mini"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKTOk8IG-3lhh49-_bVie0vwk5RBlT5-XXlNiE6Za1J_LyoOTGnA&s"/>
            </Menu.Item>
            <Menu.Item>
              <Input className='icon' icon='search' placeholder='Search...' />
            </Menu.Item>
            <Menu.Menu position='right'>
            <Menu.Item href = "https://www.facebook.com/">
            <Button primary>Home</Button>
          </Menu.Item>
            <Dropdown item text='create'>
            <Dropdown.Menu>
              <Dropdown.Item href = "https://www.facebook.com/pages/create/?ref_type=universal_creation_hub">Page</Dropdown.Item>
              <Dropdown.Item href = "https://www.facebook.com/adsmanager/creation?act=2636820839927803&filter_set">Ad</Dropdown.Item>
              <Dropdown.Item href= "https://www.facebook.com/ajax/groups/create_get/?ref=www_header_dropdown">Group</Dropdown.Item>
              <Dropdown.Item>Event</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item>
    <Dropdown pointing className='link item'  icon='comment alternate outline'>
      <Dropdown.Menu>
        <Dropdown.Header>Friend Requests</Dropdown.Header>
        <Dropdown.Item>
          <Dropdown text='Clothing'>
            <Dropdown.Menu>
              <Dropdown.Header>Mens</Dropdown.Header>
              <Dropdown.Item>Shirts</Dropdown.Item>
              <Dropdown.Item>Pants</Dropdown.Item>
              <Dropdown.Item>Jeans</Dropdown.Item>
              <Dropdown.Item>Shoes</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header>Womens</Dropdown.Header>
              <Dropdown.Item>Dresses</Dropdown.Item>
              <Dropdown.Item>Shoes</Dropdown.Item>
              <Dropdown.Item>Bags</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Dropdown.Item>
        <Dropdown.Item>Home Goods</Dropdown.Item>
        <Dropdown.Item>Bedroom</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Header>Order</Dropdown.Header>
        <Dropdown.Item>Status</Dropdown.Item>
        <Dropdown.Item>Cancellations</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            </Menu.Item>
            <Menu.Item>
            <Dropdown pointing className='link item'  icon='whatsapp'>
      <Dropdown.Menu>
        <Dropdown.Header>New Messages</Dropdown.Header>
        <Dropdown.Item>
          <Dropdown text='Clothing'>
            <Dropdown.Menu>
              <Dropdown.Header>Mens</Dropdown.Header>
              <Dropdown.Item>Shirts</Dropdown.Item>
              <Dropdown.Item>Pants</Dropdown.Item>
              <Dropdown.Item>Jeans</Dropdown.Item>
              <Dropdown.Item>Shoes</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header>Womens</Dropdown.Header>
              <Dropdown.Item>Dresses</Dropdown.Item>
              <Dropdown.Item>Shoes</Dropdown.Item>
              <Dropdown.Item>Bags</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Dropdown.Item>
        <Dropdown.Item>Home Goods</Dropdown.Item>
        <Dropdown.Item>Bedroom</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Header>Order</Dropdown.Header>
        <Dropdown.Item>Status</Dropdown.Item>
        <Dropdown.Item>Cancellations</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            </Menu.Item>
          <Menu.Item>
          <Dropdown pointing className='link item'  icon='bell'>
      <Dropdown.Menu>
        <Dropdown.Header>Notifications</Dropdown.Header>
        <Dropdown.Item>
          <Dropdown text='Clothing'>
            <Dropdown.Menu>
              <Dropdown.Header>Mens</Dropdown.Header>
              <Dropdown.Item>Shirts</Dropdown.Item>
              <Dropdown.Item>Pants</Dropdown.Item>
              <Dropdown.Item>Jeans</Dropdown.Item>
              <Dropdown.Item>Shoes</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header>Womens</Dropdown.Header>
              <Dropdown.Item>Dresses</Dropdown.Item>
              <Dropdown.Item>Shoes</Dropdown.Item>
              <Dropdown.Item>Bags</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Dropdown.Item>
        <Dropdown.Item>Home Goods</Dropdown.Item>
        <Dropdown.Item>Bedroom</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Header>Order</Dropdown.Header>
        <Dropdown.Item>Status</Dropdown.Item>
        <Dropdown.Item>Cancellations</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            </Menu.Item>
            
            <Menu.Item>
            <Dropdown pointing className='link item'  icon='comment alternate outline'>
      <Dropdown.Menu>
        <Dropdown.Header>Quick Help</Dropdown.Header>
        <Dropdown.Item>
          <Dropdown text='Clothing'>
            <Dropdown.Menu>
              <Dropdown.Header>Mens</Dropdown.Header>
              <Dropdown.Item>Shirts</Dropdown.Item>
              <Dropdown.Item>Pants</Dropdown.Item>
              <Dropdown.Item>Jeans</Dropdown.Item>
              <Dropdown.Item>Shoes</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header>Womens</Dropdown.Header>
              <Dropdown.Item>Dresses</Dropdown.Item>
              <Dropdown.Item>Shoes</Dropdown.Item>
              <Dropdown.Item>Bags</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Dropdown.Item>
        <Dropdown.Item>Home Goods</Dropdown.Item>
        <Dropdown.Item>Bedroom</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Header>Order</Dropdown.Header>
        <Dropdown.Item>Status</Dropdown.Item>
        <Dropdown.Item>Cancellations</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            </Menu.Item>
          <Dropdown item icon='dropdown'>
            <Dropdown.Menu>
              <Dropdown.Item>Your Groups</Dropdown.Item>
              <Dropdown.Item>Advertising on Facebook</Dropdown.Item>
              <Dropdown.Item>Switch to New Facebook</Dropdown.Item>
              <Dropdown.Item>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

        </Menu.Menu>
          </Menu> 

         );
    }
}
 
export default MenuBar;
