import "./App.css";

import { Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import StudentDashboard from "./components/StudentDashboard";
import FacultyDashboard from "./components/FacultyDashboard";
import AdminDashboard from "./components/AdminDashboard";
import Attendance from "./components/Attendance";
import Fees from "./components/Fees";
import Academics from "./components/Academics";
import Hostel from "./components/Hostel";
import Notifications from "./components/Notifications";
import Profile from "./components/Profile";
import Charts from "./components/Charts";
function App() {

  return (

    <Routes>

      <Route path="/" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/student" element={<StudentDashboard />} />

      <Route path="/attendance" element={<Attendance />} />

      <Route path="/fees" element={<Fees />} />

      <Route path="/academics" element={<Academics />} /> 

      <Route path="/hostel" element={<Hostel />} />

      <Route path="/notifications" element={<Notifications />} />

      <Route path="/profile" element={<Profile />} />

      <Route path="/charts" element={<Charts />} />

      <Route path="/faculty" element={<FacultyDashboard />} />

      <Route path="/admin" element={<AdminDashboard />} />

    </Routes>

  );

}

export default App;