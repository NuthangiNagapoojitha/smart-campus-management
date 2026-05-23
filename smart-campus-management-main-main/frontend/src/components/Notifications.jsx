function Notifications() {

  const notifications = [

    {
      title: "Mid Exams Start",
      message: "Mid examinations will start from 20th May 2026."
    },

    {
      title: "Fee Payment Reminder",
      message: "Last date for fee payment is 25th May 2026."
    },

    {
      title: "Workshop on AI",
      message: "AI workshop will be conducted in Seminar Hall."
    },

    {
      title: "Summer Holidays",
      message: "Summer holidays begin from 1st June 2026."
    }

  ];

  return (

    <div style={{
      padding:"30px",
      backgroundColor:"#f4f6f9",
      minHeight:"100vh"
    }}>

      <h1 style={{marginBottom:"30px"}}>
        Notifications
      </h1>

      {
        notifications.map((item,index)=>{

          return(

            <div
              key={index}
              style={cardStyle}
            >

              <h2>{item.title}</h2>

              <p>{item.message}</p>

            </div>

          );

        })
      }

    </div>

  );

}

const cardStyle = {
  backgroundColor:"white",
  padding:"20px",
  borderRadius:"12px",
  marginBottom:"20px",
  boxShadow:"0 4px 10px rgba(0,0,0,0.1)"
};

export default Notifications;