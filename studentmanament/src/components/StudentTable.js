import StudentRow from "./StudentRow"
import AddNewStudent from "./AddNewStudent"
const StudentTable = (props) => {
    const {studentDataEle=[] , newStudentData } = props
    const studentList = studentDataEle &&studentDataEle.map((student , index) => <StudentRow {...student} index={index} />)
    return (
        <div className = "student-table">
          <AddNewStudent newStudent = {newStudentData} />
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
  <tbody>
    {studentList}
  </tbody>
</table>
        </div>
    )
}
export default StudentTable; 