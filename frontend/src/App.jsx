import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login/Login";
import Phome from "./patient/Phome";
import Thome from "./therapist/Thome";
import Ahome from "./agent/Ahome";
import Pabout from "./patient/Pabout";
import Pcontact from "./patient/Pcontact";
import Pdashboard from "./patient/Pdashboard";
import PatientLayout from "./patient/Playout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<PatientLayout />}>
        <Route path="/patient-home" element={<Phome />} />
          <Route path="/dashboard-patient" element={<Pdashboard />} />
          <Route path="/about-patient" element={<Pabout />} />
          <Route path="/contact-patient" element={<Pcontact />} />
          <Route path="/therapist-home" element={<Thome />} />
          <Route path="/agent-home" element={<Ahome />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

