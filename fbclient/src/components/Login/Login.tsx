import * as React from 'react';
import { Component } from 'react';
import { Button, Checkbox, Form, Segment, Header, Message, Grid  } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'


export interface LoginProps { 
}
 
export interface LoginState {
    email: string,
    password: string
}
 
class Login extends React.Component<LoginProps, LoginState> {
    constructor(props:any){
        super(props)
    this.state = {email:"", password:""}

}

handleEmail=(event:any) =>{
    this.setState({email: event.target.email})

}

handlePassword=(event:any)=>{
  this.setState({password: event.target.password})
}

handleSubmit=(event:any): void =>{
    alert("form submitted successfully");
    event.preventDefault()
    console.log(this.state)
}
    render() { 
      let title = "facebook"
        return ( 
          <Segment raised>
          <Header as="h1" textAlign="left">{title}</Header>
         <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Input
            placeholder='Email or phone'
            type="text"
            name='email'
            value={this.state.email}
            onChange={this.handleEmail}
          />
          <Form.Input
            placeholder='Password'
            type="text"
            name='password'
            value={this.state.password}
            onChange={this.handlePassword}
          />
           
          <Form.Button content='Log In' />
         
        </Form.Group>
      </Form>
      <Grid columns ={6}>
        <Grid.Column>
      <Message size= "mini" compact attached="bottom" ><a href="https://www.facebook.com/login/identify/?ctx=recover&ars=royal_blue_bar">Forgot account?</a></Message>
      </Grid.Column>
      </Grid>
      </Segment>
           
         );
    }
}
 
export default Login;
