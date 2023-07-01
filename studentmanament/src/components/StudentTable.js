import StudentRow from "./StudentRow"
const StudentTable = (props) => {
    const {studentData } = props
    return (
        <div className = "student-table">
            <StudentRow />
        </div>
    )
}
export default StudentTable; 