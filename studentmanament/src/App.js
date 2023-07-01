import StudentTable from './components/StudentTable';
import './App.css';
function App() {
  const studentData = [
    {
      studentName: 'Nguyễn Văn A',
      studentClass: '12A',
      math: 10,
      chem: 6,
      phy:8, 
    },
    {
      studentName: 'Nguyễn Văn D',
      studentClass: '12B',
      math: 6,
      chem: 9,
      phy:2, 
    },
    {
      studentName: 'Lê Văn B',
      studentClass: '12G',
      math: 3,
      chem: 9,
      phy: 2, 
    },
    {
      studentName: 'Nguyễn Văn V',
      studentClass: '12A',
      math: 10,
      chem: 4,
      phy: 10, 
    },
  ]
  return (
    <div className="App">
      {/* <StudentTable studentName = {studentData.studentName} studentClass = {studentData.studentClass} math = {studentData.math} chem = {studentData.chem} phy = {studentData.phy}/> */}
      <StudentTable studentName = {studentData} />
    </div>
  );
}

export default App;