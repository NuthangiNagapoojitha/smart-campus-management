function FacultyDashboard() {

  return (

    <div style={{
      padding:"30px",
      backgroundColor:"#f4f6f9",
      minHeight:"100vh"
    }}>

      <h1 style={{
        color:"#065f46",
        marginBottom:"30px"
      }}>
        Faculty Dashboard
      </h1>

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(3,1fr)",
        gap:"25px"
      }}>

        <div style={cardStyle}>
          <h2>Attendance Management</h2>
          <p>Manage student attendance</p>
        </div>

        <div style={cardStyle}>
          <h2>Upload Marks</h2>
          <p>Upload internal and semester marks</p>
        </div>

        <div style={cardStyle}>
          <h2>Notifications</h2>
          <p>Send class announcements</p>
        </div>

        <div style={cardStyle}>
          <h2>Class Schedule</h2>
          <p>View faculty timetable</p>
        </div>

        <div style={cardStyle}>
          <h2>Student Reports</h2>
          <p>View academic reports</p>
        </div>

        <div style={cardStyle}>
          <h2>Assignments</h2>
          <p>Upload and manage assignments</p>
        </div>

      </div>

    </div>

  );

}

const cardStyle = {
  backgroundColor:"white",
  padding:"25px",
  borderRadius:"15px",
  boxShadow:"0 4px 10px rgba(0,0,0,0.1)",
  cursor:"pointer"
};

export default FacultyDashboard;