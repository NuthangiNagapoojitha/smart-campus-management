function Hostel() {

  return (

    <div style={{padding:"30px"}}>

      <h1>Hostel Management</h1>

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(2,1fr)",
        gap:"20px",
        marginTop:"30px"
      }}>

        <div style={cardStyle}>
          <h2>Hostel Name</h2>
          <p>Smart Campus Boys Hostel</p>
        </div>

        <div style={cardStyle}>
          <h2>Room Number</h2>
          <p>B-204</p>
        </div>

        <div style={cardStyle}>
          <h2>Warden</h2>
          <p>Mr. Ramesh Kumar</p>
        </div>

        <div style={cardStyle}>
          <h2>Hostel Fees</h2>
          <p>Paid</p>
        </div>

        <div style={cardStyle}>
          <h2>Roommate</h2>
          <p>Rahul Sharma</p>
        </div>

        <div style={cardStyle}>
          <h2>Contact</h2>
          <p>9876543210</p>
        </div>

      </div>

    </div>

  );

}

const cardStyle = {
  backgroundColor:"white",
  padding:"20px",
  borderRadius:"10px",
  boxShadow:"0 0 10px rgba(0,0,0,0.1)"
};

export default Hostel;