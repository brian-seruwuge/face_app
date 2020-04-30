import * as React from 'react';
import { Component } from 'react';
import { Button, Checkbox, Form, Segment, Header, Message, Grid  } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'


export interface LoginProps { 
}

export interface LoginData {
  email:string,
  password:string
}
 
export interface LoginState {
 form: LoginData;
 isLoading: boolean,
 error: null,
 hits:[]
}
 
class Login extends React.Component<LoginProps, LoginState> {
    constructor(props:any){
        super(props)
    this.state = {
      form:{email:"", password:""},
      isLoading: false,
      error: null,
      hits:[]
    }

}

handleEmail=(event:any) =>{
  let value = event.target.value
    this.setState((prevState)=> ({form:{...prevState.form, email: value}}))
}

handlePassword=(event:any)=>{
  let value = event.target.value
    this.setState((prevState)=> ({form:{...prevState.form, password: value}}))
}

handleSubmit=(event:any): void =>{
    alert("form submitted successfully");
    event.preventDefault()
    console.log(this.state)
}

componentDidMount(){
  this.setState({isLoading: true})
  fetch('https://api.mydomain.com')
  .then(response => response.json())
  .then(data => this.setState({hits: data.hits, isLoading:false}))
  .catch(error => this.setState({error, isLoading:false}))
}
    render() { 
      let title = "facebook"
      const {isLoading} = this.state;
      if(isLoading){
        return <p>Loading...</p>
      }
        return ( 
  
          <Segment raised>
          <Header as="h1" textAlign="left">{title}</Header>
         <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Input
            placeholder='Email or phone'
            type="email"
            name='email'
            value={this.state.form.email}
            onChange={this.handleEmail}
          />
          <Form.Input
            placeholder='Password'
            type="password"
            name='password'
            value={this.state.form.password}
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
