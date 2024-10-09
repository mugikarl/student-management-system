import React from 'react'
import Table from '../Table'

const Student = (props) => {
  return (
      <Table.Row>
        <Table.Column>{props.lastname}</Table.Column>
        <Table.Column>{props.firstname}</Table.Column>
        <Table.Column>{props.course}</Table.Column>
        <Table.Column>{props.dob}</Table.Column>
        <Table.Column>{props.age}</Table.Column>
      </Table.Row>
  )
}

export default Student
