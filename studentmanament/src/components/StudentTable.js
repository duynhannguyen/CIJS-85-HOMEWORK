import StudentRow from "./StudentRow";
import AddNewStudent from "./AddNewStudent";
import { useState } from "react";
const StudentTable = (props) => {
  const [sortOption, setSortOption] = useState("default");
  const { studentDataEle = [], newStudentData, deleteStudent } = props;
  const studentList =
    studentDataEle &&
    studentDataEle.map((student, index) => (
      <StudentRow {...student} index={index} deleteStudentEle={deleteStudent} />
    ));
  const gpaStudent = (studentDataEle) => {
    (
      (Number(studentDataEle.math) +
        Number(studentDataEle.chem) +
        Number(studentDataEle.phy)) /
      3
    ).toFixed(1);
  };
  const SortStudent = (e) => {
    // console.log(sortOption);
    setSortOption(e.target.value);
  };
  const sortedStudent = (sortOption, studentDataEle) => {
    const sortedStudentData = [];
    switch (sortOption) {
      case "Ascd":
        break;
      case "Dscd":
        break;
      case "aToZ":
        break;
      case "ztoA":
        break;
      case "default":
        return studentDataEle;
    }
  };
  return (
    <div className="student-table">
      <AddNewStudent newStudent={newStudentData} />
      <div className="sort-container">
        <select
          className="form-select"
          onChange={SortStudent}
          value={sortOption}
        >
          <option selected value={"default"}>
            Sắp xếp
          </option>
          <option value={"Ascd"}>Tăng dần</option>
          <option value={"Dscd"}>Giảm dần</option>
          <option value={"aToZ"}>A {"->"} Z</option>
          <option value={"ztoA"}>Z {"->"} A</option>
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
