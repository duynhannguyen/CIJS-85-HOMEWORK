import StudentRow from "./StudentRow"
const StudentTable = (props) => {
    const {studentData=[] } = props
    console.log(studentData);
    const studentList = studentData &&studentData.map((student) => <StudentRow {...student}/>)
    return (
        <div className = "student-table">
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