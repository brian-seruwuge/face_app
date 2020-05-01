import * as React from 'react';
import { Component } from 'react';
import {Table} from 'semantic-ui-react'

const Users=(props:any)=>{
    return(
    <Table striped>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.HeaderCell>Last Name</Table.HeaderCell>
        <Table.HeaderCell>Department</Table.HeaderCell>
        <Table.HeaderCell>Mzo</Table.HeaderCell>

      </Table.Row>
    </Table.Header>
    {props.staffs.map((staff: any) => (
          <Table.Body key={staff.id}>
            <Table.Row>
              <Table.Cell>{staff.firstName}</Table.Cell>
              <Table.Cell>{staff.lastName}</Table.Cell>
              <Table.Cell>{staff.department}</Table.Cell>
              <Table.Cell>{staff.MZO}</Table.Cell>
      </Table.Row>
       </Table.Body>))}
  </Table>
    

    )   
}

export default Users
