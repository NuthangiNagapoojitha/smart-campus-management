function Attendance() {

  const attendanceData = [
    {
      subject: "Java",
      attended: 28,
      total: 30
    },

    {
      subject: "Python",
      attended: 25,
      total: 30
    },

    {
      subject: "DBMS",
      attended: 27,
      total: 30
    },

    {
      subject: "Web Development",
      attended: 29,
      total: 30
    }
  ];

  return (

    <div style={{padding:"30px"}}>

      <h1>Attendance Module</h1>

      <table
        border="1"
        cellPadding="10"
        style={{
          width:"100%",
          marginTop:"20px",
          borderCollapse:"collapse",
          backgroundColor:"white",
          color:"black"
        }}
      >

        <thead>

          <tr>
            <th>Subject</th>
            <th>Attended Classes</th>
            <th>Total Classes</th>
            <th>Percentage</th>
          </tr>

        </thead>

        <tbody>

          {
            attendanceData.map((item,index)=>{

              const percentage =
              ((item.attended/item.total)*100).toFixed(2);

              return(

                <tr key={index}>

                  <td>{item.subject}</td>

                  <td>{item.attended}</td>

                  <td>{item.total}</td>

                  <td>{percentage}%</td>

                </tr>

              );

            })
          }

        </tbody>

      </table>

    </div>

  );

}

export default Attendance;