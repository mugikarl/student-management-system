import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from './components/SearchBar'
import FilterStudentTable from './components/FilterStudentTable'
import StudentTable from './components/StudentTable'

const students = [
  {id:1, lastname:"Natividad", firstname:"Karl", course:"IT", dob:"2004/04/12"},
  {id:2, lastname:"Arapoc", firstname:"Beatrice", course:"DS", dob:"2003/01/17"},
  {id:3, lastname:"Lim", firstname:"Joash", course:"CS", dob:"2001/05/22"},
  {id:4, lastname:"Alcaide", firstname:"Hannah", course:"IS", dob:"2001/10/25"},
];

function App() {
  const [query, setQuery] = useState("");
  const [minDate, setMinDate] = useState("");
  const [maxDate, setMaxDate] = useState("");
  
  const calculateAge = (dob) => {
    const year = parseInt(dob.substr(0, 4));
    const month = parseInt(dob.substr(5, 2)) - 1;
    const day = parseInt(dob.substr(8, 2));
    const today = new Date();
    let age = today.getFullYear() - year;

    if (today.getMonth() < month || (today.getMonth() === month && today.getDate() < day)) {
        age--;
    }

    return age;
  };

  const filteredStudents = students.filter(
    (student) => {
      const studentFullName = `${student.firstname} ${student.lastname}`.toLowerCase();
      const studentCourse = student.course.toLowerCase();
      const studentAge = calculateAge(student.dob);
      const filterQuery = studentFullName.includes(query.toLowerCase()) ||
                          studentCourse.includes(query.toLowerCase()) ||
                          studentAge.toString().includes(query);
                          
      const birthdate = new Date(student.dob); 
      const dobRange = (!minDate || birthdate >= new Date(minDate)) &&
                       (!maxDate || birthdate <= new Date(maxDate));
      
      return filterQuery && dobRange
    })
    .map(student => ({...student, age: calculateAge(student.dob)}));
  return <FilterStudentTable>
    <SearchBar query={query} setQuery={setQuery} minDate={minDate} setMinDate={setMinDate} maxDate={maxDate} setMaxDate={setMaxDate}/>
    <StudentTable students={filteredStudents}/>
  </FilterStudentTable>
}

export default App
