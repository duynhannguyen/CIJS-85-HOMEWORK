const StudentRow  = (props) => {
  const {studentName, studentClass, math, chem, phy, index} = props
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
    </tr>
    )
}
export default StudentRow;