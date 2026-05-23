function StudentDashboard() {

  return (

    <div style={{

  minHeight:"100vh",

  backgroundImage:
    'linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url("https://images.unsplash.com/photo-1562774053-701939374585")',

  backgroundSize:"cover",

  backgroundPosition:"center",

  backgroundAttachment:"fixed"

}}>

     <div style={{
  backgroundColor:"#1e3a8a",
  color:"white",
  padding:"20px 30px",
  display:"flex",
  alignItems:"center",
  justifyContent:"space-between"
}}>

  <div style={{width:"80px"}}></div>

  <h1 style={{
    margin:0,
    fontSize:"34px",
    fontWeight:"bold",
    color:"white",
    textAlign:"center",
    flex:1
  }}>
    Smart Campus Platform
  </h1>

  <button
  onClick={() => window.location.href="/"}
  style={{
    padding:"8px 12px",
    fontSize:"14px",
    fontWeight:"bold",

    border:"none",
    borderRadius:"8px",

    backgroundColor:"white",
    color:"#1e3a8a",

    cursor:"pointer",

    width:"90px"
  }}>
    Logout
</button>

</div>

      <div style={{padding:"30px"}}>

        <h1 style={{
          color:"white",
          marginBottom:"30px"
        }}>
          Student Dashboard
        </h1>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(3, 1fr)",
          gap:"25px"
        }}>

          <div
            style={cardStyle}
            onClick={() => window.location.href="/attendance"}
          >
            <h2>Attendance</h2>
            <p>View attendance details</p>
          </div>

          <div
            style={cardStyle}
            onClick={() => window.location.href="/fees"}
          >
            <h2>Fees</h2>
            <p>Check fee payment status</p>
          </div>

          <div
            style={cardStyle}
            onClick={() => window.location.href="/academics"}
          >
            <h2>Academics</h2>
            <p>View marks and performance</p>
          </div>

          <div
            style={cardStyle}
            onClick={() => window.location.href="/hostel"}
          >
            <h2>Hostel</h2>
            <p>Hostel room allocation</p>
          </div>

          <div
            style={cardStyle}
            onClick={() => window.location.href="/notifications"}
          >
            <h2>Notifications</h2>
            <p>Latest campus updates</p>
          </div>

          <div
            style={cardStyle}
            onClick={() => window.location.href="/profile"}
          >
            <h2>Profile</h2>
            <p>Student information</p>
          </div>
          <div
            style={cardStyle}
            onClick={() => window.location.href="/charts"}
>

            <h2>Analytics</h2>

            <p>View charts and reports</p>

           </div>

        </div>

      </div>

    </div>

  );

}

const cardStyle = {

  backgroundColor:"rgba(255,255,255,0.95)",

  padding:"25px",

  borderRadius:"15px",

  boxShadow:"0 8px 20px rgba(0,0,0,0.2)",

  cursor:"pointer",

  textAlign:"center"

};

export default StudentDashboard;