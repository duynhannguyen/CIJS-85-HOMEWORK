import StudentRow from "./StudentRow";
import AddNewStudent from "./AddNewStudent";
// import SortOption from "./SortStudent";
import { useState } from "react";
const StudentTable = (props) => {
  const { studentDataEle = [], newStudentData, deleteStudent } = props;
  
    const [sortValue , setsortValue] = useState('')
    const SortOption = (e) => {
      setsortValue(e.target.value)
    }
    const gpaStudent = (studentDataEle) => ((Number(studentDataEle.math) + Number(studentDataEle.chem) + Number(studentDataEle.phy))/3).toFixed(1);
    console.log('gpa', gpaStudent);
    const SortedStudent = (studentDataEle, sortValue ) => {
      let sortStudent = [];
      switch(sortValue){
        case "Acsd" :
          sortStudent = studentDataEle.sort((studentA , studentB) => gpaStudent(studentA) - gpaStudent(studentB) )
          break
        case "Dcsd" :
          sortStudent = studentDataEle.sort((studentA , studentB) => gpaStudent(studentB) - gpaStudent(studentA) )
          break
        case "aToZ" :
          break
        case "zToA" :
          break
        case "default" :
          return studentDataEle;
      }
    }
    const a =  studentDataEle;
    
    console.log(a)
    const studentList =
    a &&
    a.map((SortedStudent, index) => (
      <StudentRow {...SortedStudent} index={index} deleteStudentEle={deleteStudent} />
    ));
  return (
    <div className="student-table">
      <AddNewStudent newStudent={newStudentData} />
      <div>
      <select onChange={SortOption} className="form-selec filter-option">
        <option selected value = {"default"} >Sắp xếp</option>
        <option value={"Acsd"}>Tăng dần</option>
        <option value={"Dcsd"}>Giảm dần</option>
        <option value={"aToZ"}>A {'->'} Z</option>
        <option value={"zToA"}>Z {'->'} A</option>
      </select>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Họ tên</th>
            <th scope="col">Lớp</th>
            <th scope="col">Điểm toán</th>
            <th scope="col">Điểm lý</th>
            <th scope="col">Điểm Hóa</th>
            <th scope="col">GPA</th>
          </tr>
        </thead>
        <tbody>{studentList}</tbody>
      </table>
    </div>
  );
};
export default StudentTable;
