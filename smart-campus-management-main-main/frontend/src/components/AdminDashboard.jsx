function AdminDashboard() {

  return (

    <div style={{
      padding:"30px",
      backgroundColor:"#f4f6f9",
      minHeight:"100vh"
    }}>

      <h1 style={{
        color:"#b91c1c",
        marginBottom:"30px"
      }}>
        Admin Dashboard
      </h1>

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(3,1fr)",
        gap:"25px"
      }}>

        <div style={cardStyle}>
          <h2>Manage Students</h2>
          <p>Add and manage student records</p>
        </div>

        <div style={cardStyle}>
          <h2>Manage Faculty</h2>
          <p>Add and manage faculty details</p>
        </div>

        <div style={cardStyle}>
          <h2>Fee Management</h2>
          <p>Monitor student fee payments</p>
        </div>

        <div style={cardStyle}>
          <h2>Hostel Management</h2>
          <p>Allocate hostel rooms</p>
        </div>

        <div style={cardStyle}>
          <h2>Notifications</h2>
          <p>Send campus announcements</p>
        </div>

        <div style={cardStyle}>
          <h2>Reports</h2>
          <p>Generate student reports</p>
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

export default AdminDashboard;