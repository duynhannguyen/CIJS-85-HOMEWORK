const StudentRow  = (props) => {
  const {studentName, studentClass, math, chem, phy} = props
    return(
    <tr>
      <th scope="row">1</th>
      <td>{studentName}</td>
      <td>{studentClass}</td>
      <td>{math}</td>
      <td>{phy}</td>
      <td>{chem}</td>
      <td></td>
    </tr>
    )
}
export default StudentRow;