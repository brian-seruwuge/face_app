import * as React from 'react';
import { Component } from 'react';
import { Button, Checkbox, Form, Message, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'


export interface SignUpProps {
    
}
 
export interface SignUpState {
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    birthday: string
}
 
class SignUp extends React.Component<SignUpProps, SignUpState> {
    constructor(props: any){
        super(props)
    this.state = { firstname:"", lastname:"", email:"", password:"", birthday:""}
}

handleChange=(event:any): void=>{
    this.setState({firstname: event.target.firstname, lastname: event.target.lastname, email: event.target.email, password: event.target.password})

}

handleSubmit=(event:any): void=>{
    alert("form submitted successfully");
    event.preventDefault();

}
    render() { 
        return ( 
            <Form>
            <Form.Group>
              <Form.Input placeholder='First Name' type="text" value={this.state.firstname} onChange={this.handleChange} width={3} />
              <Form.Input placeholder='Last Name' type="text" value={this.state.email} onChange={this.handleChange} width={3} />
            </Form.Group>
            <Form.Group>
              <Form.Input placeholder='Mobile number or email' type="text" value={this.state.email} onChange={this.handleChange} width={6} />
            </Form.Group>
            <Form.Group>
              <Form.Input placeholder='New password' type="text" value={this.state.email} onChange={this.handleChange} width={6} /> 
              </Form.Group>
              <Form.Group>
              <Form.Input label='Birthday' type="text" value={this.state.birthday} onChange={this.handleChange} width={6} />    
              </Form.Group>
              <Form.Group grouped>
                <label>Gender</label>
                <Form.Field
                label = "Female"
                control = "input"
                type= "radio"
                name= "htmlRadios"/>
                <Form.Field
                label = "Male"
                control = "input"
                type= "radio"
                name= "htmlRadios"/>
                <Form.Field
                label = "Custom"
                control = "input"
                type= "radio"
                name= "htmlRadios"/>
                </Form.Group>
                <Message>
                By clicking Sign Up, you agree to our <a href="https://www.facebook.com/legal/terms/update">Terms, </a><a href="https://www.facebook.com/about/privacy/update">Data Policy</a> and <a href="https://www.facebook.com/policies/cookies/">Cookies Policy.</a>
                You may receive SMS Notifications from us and can opt out any time.
                </Message>
            <Button type='submit'>Sign Up</Button>

          </Form>
           );
    }
}
 
export default SignUp;
