import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function Charts() {

  const attendanceData = [

    {
      subject: "Java",
      attendance: 93
    },

    {
      subject: "Python",
      attendance: 85
    },

    {
      subject: "DBMS",
      attendance: 90
    },

    {
      subject: "Web Dev",
      attendance: 96
    }

  ];

  const marksData = [

    {
      subject: "Java",
      marks: 85
    },

    {
      subject: "Python",
      marks: 90
    },

    {
      subject: "DBMS",
      marks: 80
    },

    {
      subject: "Web Dev",
      marks: 88
    }

  ];

  return (

    <div style={{
      padding:"30px",
      backgroundColor:"#f4f6f9",
      minHeight:"100vh"
    }}>

      <h1 style={{marginBottom:"40px"}}>
        Dashboard Analytics
      </h1>

      <div style={{
        backgroundColor:"white",
        padding:"20px",
        borderRadius:"15px",
        marginBottom:"40px"
      }}>

        <h2>Attendance Chart</h2>

        <ResponsiveContainer width="100%" height={300}>

          <BarChart data={attendanceData}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="subject" />

            <YAxis />

            <Tooltip />

            <Bar dataKey="attendance" fill="#2563eb" />

          </BarChart>

        </ResponsiveContainer>

      </div>

      <div style={{
        backgroundColor:"white",
        padding:"20px",
        borderRadius:"15px"
      }}>

        <h2>Academic Performance Chart</h2>

        <ResponsiveContainer width="100%" height={300}>

          <BarChart data={marksData}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="subject" />

            <YAxis />

            <Tooltip />

            <Bar dataKey="marks" fill="#16a34a" />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>

  );

}

export default Charts;