import * as React from 'react';
import { Component } from 'react';
import { Button, Checkbox, Form, Message, Segment, Divider } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { format } from 'path';
import axios from 'axios'



export interface SignUpProps {
    
}

export interface SignUpData {
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    gender: string,
    birthday:[]
}
 
export interface SignUpState {
   form: SignUpData,
   isLoading: boolean,
   error: null,
   hits:[],
}
 
class SignUp extends React.Component<SignUpProps, SignUpState> {
    constructor(props: any){
        super(props)
    this.state = { 
        form:{firstname:"", 
        lastname:"", 
        email:"", 
        password:"", 
        gender:"Male",
        birthday:[]
     },
        isLoading: false,
        error:null,
        hits:[]
    }
  
}

handleFirstName=(event:any): void=>{
    let value = event.target.value
    this.setState((prevState)=>({form: {...prevState.form, firstname: value}}))
}

handleLastName=(event:any)=>{
    let value = event.target.value
    this.setState((prevState)=>({form: {...prevState.form, lastname:value}}))
}

handleEmail=(event:any)=>{
    let value = event.target.value
    this.setState((prevState)=>({form: {...prevState.form, email: value}}))

}

handlePassword=(event:any)=>{
    let value = event.target.value
    this.setState((prevState)=>({form:{...prevState.form, password: value}}))
}

handleDate=(event:any)=>{
    let value = event.target.value
    this.setState((prevState)=>({form:{...prevState.form, birthday:value},
    }))
}



handleSubmit=(event:any): Promise<void>=>{
    alert("form submitted successfully");
    event.preventDefault();
     console.log(this.state.form)

    return axios.post("http://localhost:3001/face_users", this.state.form)
    .then(response=>{
        console.log(response)
    } )
    .catch(error=> {console.log(error)})
}

handleRadio=(event:any)=>{
    let value = event.target.value
    this.setState((prevState)=>({form:{...prevState.form, gender: value},
    }))
}

componentDidMount(){
    this.setState({ isLoading: true})
    fetch("http://localhost:3001/face_users")
    .then(response=>response.json())
    .then(hits => this.setState({hits, isLoading:false}))
    .catch(error => this.setState({error, isLoading:false}))
}


    render() { 
        const title2 = "Create a New Account"
        const subtitle = "its quick and easy"
        const {isLoading} = this.state
        if(isLoading){
            return <p>Loading...</p>
        }
        return ( 
            <React.Fragment>
        <h1>{title2}</h1>
        <h2>{subtitle}</h2>
            <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Input placeholder='First Name' name="firstname" type="text" value={this.state.form.firstname} onChange={this.handleFirstName} width={3} />
              <Form.Input placeholder='Last Name' name="lastname" type="text" value={this.state.form.lastname} onChange={this.handleLastName} width={3} />
            </Form.Group>
            <Form.Group>
              <Form.Input placeholder='Mobile number or email' name="email" type="email" value={this.state.form.email} onChange={this.handleEmail} width={6} />
            </Form.Group>
            <Form.Group>
              <Form.Input placeholder='New password' name="password" type="password" value={this.state.form.password} onChange={this.handlePassword} width={6} /> 
              </Form.Group>
              <Form.Group>
              <Form.Input type="date" name="birthday" label='Birthday' value={this.state.form.birthday} onChange={this.handleDate} width={6} /> 
              </Form.Group>
              <Form.Group grouped>
                <label>Gender</label>
                <Form.Field
                label = "Female"
                control = "input"
                type= "radio"
                name="Female"
                checked = {this.state.form.gender === "Female"}
                value="Female"
                onChange={this.handleRadio}
                />
                <Form.Field
                label = "Male"
                control = "input"
                type= "radio"
                name="Male"
                checked = {this.state.form.gender === "Male"}
                value="Male"
                onChange={this.handleRadio}
                />
                <Form.Field
                label = "Custom"
                control = "input"
                type= "radio"
                name="Custom"
                checked = {this.state.form.gender === "Custom"}
                value="Custom"
                onChange={this.handleRadio}
                />
                </Form.Group>
                <Message>
                By clicking Sign Up, you agree to our <a href="https://www.facebook.com/legal/terms/update">Terms, </a><a href="https://www.facebook.com/about/privacy/update">Data Policy</a> and <a href="https://www.facebook.com/policies/cookies/">Cookies Policy.</a>
                You may receive SMS Notifications from us and can opt out any time.
                </Message>
            <Button type='submit'>Sign Up</Button>

          </Form>
          <ul>
          {this.state.hits.map((hit:any)=>(
              <li key={hit.id}>{hit.firstname}</li>
          ))}
          </ul>
          <Divider />
          <Message>
              <a href="https://www.facebook.com/pages/create/?ref_type=registration_form">Create a Page</a> for a celebrity, band or business.

          </Message>
          </React.Fragment>
           );
    }

}
 
export default SignUp;
