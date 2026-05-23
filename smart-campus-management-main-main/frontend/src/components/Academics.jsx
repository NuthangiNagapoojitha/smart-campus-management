function Academics() {

  const subjects = [

    {
      subject: "Java",
      marks: 85,
      grade: "A"
    },

    {
      subject: "Python",
      marks: 90,
      grade: "A+"
    },

    {
      subject: "DBMS",
      marks: 80,
      grade: "A"
    },

    {
      subject: "Web Development",
      marks: 88,
      grade: "A+"
    }

  ];

  return (

    <div style={{padding:"30px"}}>

      <h1>Academic Performance</h1>

      <div style={{
        display:"flex",
        gap:"20px",
        marginTop:"20px"
      }}>

        <div style={cardStyle}>
          <h2>SGPA</h2>
          <p>8.7</p>
        </div>

        <div style={cardStyle}>
          <h2>CGPA</h2>
          <p>8.5</p>
        </div>

        <div style={cardStyle}>
          <h2>Result</h2>
          <p>PASS</p>
        </div>

      </div>

      <h2 style={{marginTop:"40px"}}>
        Subject Marks
      </h2>

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
            <th>Marks</th>
            <th>Grade</th>
          </tr>

        </thead>

        <tbody>

          {
            subjects.map((item,index)=>{

              return(

                <tr key={index}>

                  <td>{item.subject}</td>

                  <td>{item.marks}</td>

                  <td>{item.grade}</td>

                </tr>

              );

            })
          }

        </tbody>

      </table>

    </div>

  );

}

const cardStyle = {
  backgroundColor:"white",
  padding:"20px",
  borderRadius:"10px",
  boxShadow:"0 0 10px rgba(0,0,0,0.1)",
  width:"200px"
};

export default Academics;