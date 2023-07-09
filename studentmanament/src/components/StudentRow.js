const StudentRow  = (props) => {
  const {studentName, studentClass, math, chem, phy, index,deleteStudentEle, id, editStudentEle } = props
  const gpa = ((+math + +phy + +chem)/3).toFixed(1);
  const order = index +1 ;
    return(
    <tr>
      <th scope="row">{order}</th>
      <td>{studentName}</td>
      <td>{studentClass}</td>
      <td>{math}</td>
      <td>{phy}</td>
      <td>{chem}</td>
      <td>{gpa}</td> 
      <td> <button className="btn btn-danger" onClick={ () => deleteStudentEle(id)} >Xóa</button></td>
      <td> <button className="btn btn-success" onClick={ () => editStudentEle(id)}  >Cập nhật</button></td>
    </tr>
    )
}
export default StudentRow;