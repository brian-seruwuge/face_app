import * as React from 'react';
import { Component } from 'react';
import {Table} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

export interface UsersProps {
    
}

export interface UsersState{
   users:[],
   error:null,
   isLoading:boolean
}
class Users extends React.Component<UsersProps, UsersState> {
  constructor(props:any){
    super(props)
    this.state={users:[],
      error:null,
      isLoading:false
    }
  }

  componentDidMount=()=>{
    this.setState({isLoading:true})
    fetch('http://localhost:3001/face_users')
    .then(res=>res.json())
    .then(users=> this.setState({users, isLoading:false}))
    .catch(error=>this.setState({error, isLoading:false}))
  }

  render(){
    const {isLoading} = this.state
    if(isLoading){
      return <p>from facebook</p>
    }
    return(
    <Table striped>
    <Table.Header>
      <Table.Row>
      <Table.HeaderCell>ID</Table.HeaderCell>
        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.HeaderCell>Last Name</Table.HeaderCell>
        <Table.HeaderCell>password</Table.HeaderCell>
        <Table.HeaderCell>birthday</Table.HeaderCell>
        <Table.HeaderCell>email</Table.HeaderCell>
        <Table.HeaderCell>gender</Table.HeaderCell>

      </Table.Row>
    </Table.Header>
    {this.state.users.map((user: any) => (
          <Table.Body key={user.id}>
            <Table.Row>
            <Table.Cell>{user.id}</Table.Cell>
            <Table.Cell>{user.firstname}</Table.Cell>
            <Table.Cell>{user.lastname}</Table.Cell>
              <Table.Cell>{user.password}</Table.Cell>
              <Table.Cell>{user.birthday}</Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell>{user.gender}</Table.Cell>
      </Table.Row>
       </Table.Body>))}  
  </Table>
    

    )   
}
}

export default Users
