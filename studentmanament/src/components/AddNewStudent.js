import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const defaultValue = {
  id: "",
  studentName: "",
  studentClass: "",
  math: "",
  chem: "",
  phy: "",
};
const AddNewStudent = (props) => {
  const { newStudent, editStudentEle } = props;
  const [addNewStudent, setAddNewStudent] = useState(defaultValue);
  const [formMode, setFormMode] = useState("");
  useEffect(() => {
    const hasEditValue =
      editStudentEle.studentName &&
      editStudentEle.studentClass &&
      editStudentEle.math &&
      editStudentEle.chem &&
      editStudentEle.phy;
      if(hasEditValue){
        setFormMode("Edit")
        setAddNewStudent({...editStudentEle})
      }
  },[editStudentEle] );
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setAddNewStudent({
      ...addNewStudent,
      [name]: value,
    });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    newStudent(addNewStudent);
    setAddNewStudent(defaultValue);
  };
  const updateStudentEle = (editStudentEle) => {
    setAddNewStudent(editStudentEle);
  };
  return (
    <form className="row g-3" onSubmit={onSubmitHandler}>
      <div className="col-md-4">
        <label htmlFor="validationDefault01" className="form-label">
          Họ tên
        </label>
        <input
          type="text"
          className="form-control"
          id="studentName"
          name="studentName"
          value={addNewStudent.studentName}
          onChange={onChangeHandler}
        />
      </div>
      <div className="col-md-4">
        <label htmlFor="validationDefault02" className="form-label">
          Lớp
        </label>
        <input
          type="text"
          className="form-control"
          id="studentClass"
          name="studentClass"
          value={addNewStudent.studentClass}
          onChange={onChangeHandler}
        />
      </div>
      <div className="col-md-4">
        <label htmlFor="validationDefault02" className="form-label">
          Điểm toán
        </label>
        <input
          type="number"
          className="form-control"
          id="math"
          name="math"
          value={addNewStudent.math}
          onChange={onChangeHandler}
        />
      </div>
      <div className="col-md-4">
        <label htmlFor="validationDefault02" className="form-label">
          Điểm lý
        </label>
        <input
          type="number"
          className="form-control"
          id="phy"
          name="phy"
          value={addNewStudent.phy}
          onChange={onChangeHandler}
        />
      </div>
      <div className="col-md-4">
        <label htmlFor="validationDefault02" className="form-label">
          Điểm Hóa
        </label>
        <input
          type="number"
          className="form-control"
          id="chem"
          name="chem"
          value={addNewStudent.chem}
          onChange={onChangeHandler}
        />
      </div>

      <div className="col-12">
        <button className="btn btn-primary" type="submit">
          {formMode === "Edit" ? "Cập nhật" : "Thêm mới học sinh"}
        </button>
      </div>
    </form>
  );
};
export default AddNewStudent;
