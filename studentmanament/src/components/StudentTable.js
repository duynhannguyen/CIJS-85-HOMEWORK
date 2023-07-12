import StudentRow from "./StudentRow";
import { v4 as uuidv4 } from "uuid";
import AddNewStudent from "./AddNewStudent";
import { useState } from "react";
import { FILTER_OPTIONS } from "../utils/constants";
const StudentTable = (props) => {
  const [sortOption, setSortOption] = useState(FILTER_OPTIONS.DEFAULT);
  const { studentDataEle = [] } = props;
  const [studentTable, setStudentTable] = useState(studentDataEle);
  const [editingStudent , setEditingStudent] = useState({});
  const newStudentData = (addNewStudent) => {
    const studentEle = { ...addNewStudent, id: uuidv4() };
    setStudentTable([...studentTable, studentEle]);
  };
  const deleteStudent = (id) => {
    const filterDeleteStudent = studentTable.filter(
      (deleteStudent) => deleteStudent.id !== id
    );
    setStudentTable(filterDeleteStudent);
  };
  const gpaStudent = (studentTable) =>
    // console.log(
    (
      (Number(studentTable.math) +
        Number(studentTable.chem) +
        Number(studentTable.phy)) /
      3
    ).toFixed(1);
  // );
  const SortStudent = (e) => {
    setSortOption(e.target.value);
  };
  const sortedStudent = ( studentTable, sortOption ) => {
    
    let sortedStudentData = [...studentTable];
    switch (+sortOption) {
      case FILTER_OPTIONS.GPA_ASCENDING:
        sortedStudentData = studentTable.sort(
          (studentA, studentB) => gpaStudent(studentA) - gpaStudent(studentB)
        );
        break;
      case FILTER_OPTIONS.GPA_DESCENDING:
        sortedStudentData = studentTable.sort(
          (studentA, studentB) => gpaStudent(studentB) - gpaStudent(studentA)
        );
        break;
      case FILTER_OPTIONS.A_TO_Z:
        sortedStudentData = studentTable.sort((studentA, studentB) =>
          studentA.studentName
            .toLowerCase()
            .localeCompare(studentB.studentName.toLowerCase())
        );
        break;
      case FILTER_OPTIONS.Z_TO_A:
        sortedStudentData = studentTable.sort((studentA, studentB) =>
          studentB.studentName
            .toLowerCase()
            .localeCompare(studentA.studentName.toLowerCase())
        );
        break;
      case FILTER_OPTIONS.DEFAULT:
      default:
        console.log("studentTable" , studentTable)
        return sortedStudentData;
    }
    return sortedStudentData;
  };
  const value = sortedStudent(studentTable ,sortOption );
  const editStudentEle = (id) =>{
    const editEle = value.find((student) => student.id === id  )
    console.log(editEle)
    setEditingStudent(editEle)
  }
  // const changeFormMode = () => {}
  const studentList =
  value &&
  value.map((student, index) => (
      <StudentRow {...student} index={index} deleteStudentEle={deleteStudent} editStudentEle={editStudentEle}   />
    ));


  return (
    <div className="student-table">
      <AddNewStudent newStudent={newStudentData} editStudentEle={editingStudent} />
      <div className="sort-container">
        <select
          className="form-select"
          onChange={SortStudent}
          value={sortOption}
        >
          <option selected value={FILTER_OPTIONS.DEFAULT}>
            Sắp xếp
          </option>
          <option value={FILTER_OPTIONS.GPA_ASCENDING}>Tăng dần</option>
          <option value={FILTER_OPTIONS.GPA_DESCENDING}>Giảm dần</option>
          <option value={FILTER_OPTIONS.A_TO_Z}>A {"->"} Z</option>
          <option value={FILTER_OPTIONS.Z_TO_A}>Z {"->"} A</option>
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
