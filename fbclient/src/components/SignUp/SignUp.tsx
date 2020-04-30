import * as React from 'react';
import { Component } from 'react';
import { Button, Checkbox, Form, Message, Segment, Divider } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { format } from 'path';
//import SemanticDatepicker from 'react-semantic-ui-datepickers';
//import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';


export interface SignUpProps {
    
}

export interface SignUpData {
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    selectedOption: string,
    currentDate:[]
}
 
export interface SignUpState {
   form: SignUpData,
   isLoading: boolean,
   error: null
   hits:[]
}
 
class SignUp extends React.Component<SignUpProps, SignUpState> {
    constructor(props: any){
        super(props)
    this.state = { 
        form:{firstname:"", 
        lastname:"", 
        email:"", 
        password:"", 
        selectedOption:"Male",
        currentDate:[]
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
    this.setState((prevState)=>({form:{...prevState.form, currentDate:value},
    }))
}



handleSubmit=(event:any): void=>{
    alert("form submitted successfully");
    event.preventDefault();
    console.log(this.state)

}

handleRadio=(event:any)=>{
    let value = event.target.value
    this.setState((prevState)=>({form:{...prevState.form, selectedOption: value},
    }))
}

componentDidMount(){
    this.setState({ isLoading: true})
    fetch("https")
    .then(response=>response.json())
    .then(data => this.setState({hits:data.hits, isLoading:false}))
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
              <Form.Input placeholder='First Name' type="text" value={this.state.form.firstname} onChange={this.handleFirstName} width={3} />
              <Form.Input placeholder='Last Name' type="text" value={this.state.form.lastname} onChange={this.handleLastName} width={3} />
            </Form.Group>
            <Form.Group>
              <Form.Input placeholder='Mobile number or email' type="email" value={this.state.form.email} onChange={this.handleEmail} width={6} />
            </Form.Group>
            <Form.Group>
              <Form.Input placeholder='New password' type="password" value={this.state.form.password} onChange={this.handlePassword} width={6} /> 
              </Form.Group>
              <Form.Group>
              <Form.Input type="date" label='Birthday' value={this.state.form.currentDate} onChange={this.handleDate} width={6} /> 
              </Form.Group>
              {/* <Form.Group>
              <SemanticDatepicker label='Birthday' onChange={this.handleDate} value={this.state.form.currentDate}/>    
              </Form.Group> */}
              <Form.Group grouped>
                <label>Gender</label>
                <Form.Field
                label = "Female"
                control = "input"
                type= "radio"
                checked = {this.state.form.selectedOption === "Female"}
                value="Female"
                onChange={this.handleRadio}
                />
                <Form.Field
                label = "Male"
                control = "input"
                type= "radio"
                checked = {this.state.form.selectedOption === "Male"}
                value="Male"
                onChange={this.handleRadio}
                />
                <Form.Field
                label = "Custom"
                control = "input"
                type= "radio"
                checked = {this.state.form.selectedOption === "Custom"}
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
          <Divider />
          <Message>
              <a href="https://www.facebook.com/pages/create/?ref_type=registration_form">Create a Page</a> for a celebrity, band or business.

          </Message>
          </React.Fragment>
           );
    }

}
 
export default SignUp;
