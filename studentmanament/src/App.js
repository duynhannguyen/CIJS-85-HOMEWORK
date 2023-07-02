import { v4 as uuidv4 } from 'uuid'
import StudentTable from './components/StudentTable';
import './App.css';
import { useState } from "react";
function App() {
  const studentData = [
    {
      id: uuidv4(),
      studentName: 'Nguyễn Văn A',
      studentClass: '12A',
      math: 10,
      chem: 6,
      phy:8, 
    },
    {
      id: uuidv4(),
      studentName: 'Nguyễn Văn D',
      studentClass: '12B',
      math: 6,
      chem: 9,
      phy:2, 
    },
    {
      id: uuidv4(),
      studentName: 'Lê Văn B',
      studentClass: '12G',
      math: 3,
      chem: 9,
      phy: 2, 
    },
    {
      id: uuidv4(),
      studentName: 'Nguyễn Văn V',
      studentClass: '12A',
      math: 10,
      chem: 4,
      phy: 10, 
    },
  ]
  const [NewStudenEle , setNewStudent ] = useState(studentData);
  const newStudentData = (addNewStudent) => {
    const studentEle = {...addNewStudent, id: uuidv4(),}
    setNewStudent([...NewStudenEle , studentEle]);
  }
  return (
    <div className="App">
      <h1> Dự Án Quản Lí Học Sinh </h1>
      <StudentTable studentDataEle = {NewStudenEle} newStudentData = {newStudentData} />
    </div>
  );
}

export default App;
