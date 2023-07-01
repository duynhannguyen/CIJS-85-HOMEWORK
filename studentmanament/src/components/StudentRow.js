const StudentRow  = () => {
    return(
        <div className = "student-row">
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
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>Otto</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
    {/* <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colSpan={2}>Larry the Bird</td>
      <td>@twitter</td>
    </tr> */}
  </tbody>
</table>

        </div>
    )
}
export default StudentRow;