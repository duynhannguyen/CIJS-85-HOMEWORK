import StudentRow from "./StudentRow";
import AddNewStudent from "./AddNewStudent";
import { useState } from "react";
const StudentTable = (props) => {
  const { studentDataEle = [], newStudentData, deleteStudent } = props;
const [studentTabe , setstudentTable] = useState(studentDataEle)
  const studentList =
    studentDataEle &&
    studentDataEle.map((student, index) => (
      <StudentRow {...student} index={index} deleteStudentEle={deleteStudent} />
    ));
  const [sortOption, setsortOption] = useState("default");
  const onSortStudent = (e) => {
    setsortOption(e.target.value);
    console.log(e.target.value);
  };
  const gpaStudent = (student) => {
    (
      (Number(student.math) + Number(student.chem) + Number(student.phy))/
      3
    ).toFixed(1);
  };
  const sortStudentHandler = (sortOption , studentDataEle ) => {
    let sortStudentlist = [...studentDataEle]
    switch (+sortOption){
      case 2: {
        sortStudentlist = studentDataEle.sort((studentA, studentB) => gpaStudent(studentA) -  gpaStudent(studentB)
        
        );
      }
      break;
      case 3:{ sortStudentlist = studentDataEle.sort((studentA, studentB) => gpaStudent(studentB) -  gpaStudent(studentA)
        
        );
      }
      break;
    }
  }
  const sortedStudentValue = sortStudentHandler(sortOption , studentDataEle);

  return (
    <div className="student-table">
      <AddNewStudent newStudent={newStudentData} />

      <select class="form-select" onChange={onSortStudent} value={sortOption}>
        <option selected value="1">
          Sắp xếp
        </option>
        <option value="2">Tăng dần</option>
        <option value="3">Giảm dần</option>
        <option value="4">A {"->"} Z </option>
        <option value="5">Z {"->"} A </option>
      </select>
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
