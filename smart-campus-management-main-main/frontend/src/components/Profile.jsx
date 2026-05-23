function Profile() {

  return (

    <div style={{
      padding:"30px",
      backgroundColor:"#f4f6f9",
      minHeight:"100vh"
    }}>

      <h1 style={{marginBottom:"30px"}}>
        Student Profile
      </h1>

      <div style={cardStyle}>

        <h2>Poojitha</h2>

        <p><strong>Roll Number:</strong> MCA2026001</p>

        <p><strong>Department:</strong> MCA</p>

        <p><strong>Semester:</strong> 4th Semester</p>

        <p><strong>Email:</strong> pooji@gmail.com</p>

        <p><strong>Phone:</strong> 9876543210</p>

        <p><strong>College:</strong> Smart Campus University</p>

      </div>

    </div>

  );

}

const cardStyle = {
  backgroundColor:"white",
  padding:"30px",
  borderRadius:"15px",
  width:"400px",
  boxShadow:"0 4px 10px rgba(0,0,0,0.1)"
};

export default Profile;