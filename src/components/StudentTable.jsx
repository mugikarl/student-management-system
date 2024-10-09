import React from 'react'
import Table from './Table'
import Student from './students/student'

const StudentTable = ({ students }) => {
    return (
        <div>
        <Table.TableContainer>
            <Table.THead>
                <Table.Row>
                    <Table.ColumnHeader>Last Name</Table.ColumnHeader>
                    <Table.ColumnHeader>First Name</Table.ColumnHeader>
                    <Table.ColumnHeader>Course</Table.ColumnHeader>
                    <Table.ColumnHeader>Birthdate</Table.ColumnHeader>
                    <Table.ColumnHeader>Age</Table.ColumnHeader>
                </Table.Row>
            </Table.THead>
            <Table.TBody>
                {students.map(({ id,lastname,firstname,course,dob,age }) =>(
                <Student key={`${id}`}lastname={lastname} firstname={firstname} course={course} dob={dob} age={age}/>
                ))}
            </Table.TBody>
        </Table.TableContainer>
        </div>
    )
}

export default StudentTable
