import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login/Login";
import Thome from "./therapist/Thome";
import Ahome from "./agent/Ahome";
import Pcontact from "./patient/Pcontact";
import Pdashboard from "./patient/Pdashboard";
import PatientLayout from "./patient/Playout";
import Pfeedback from "./patient/Pfeedback";
import Pschedule from "./patient/Pschedule";
import Ptherapist from "./patient/Ptherapist";
import Pprogress from "./patient/Pprogress";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/patient-home" element={<PatientLayout />}>
        <Route index element={<Pdashboard />} />
          <Route path="dashboard-patient" element={<Pdashboard />} />
          <Route path="therapists-patient" element={<Ptherapist />} />
          <Route path="schedule-patient" element={<Pschedule />} />
          <Route path="progress-patient" element={<Pprogress />} />
          <Route path="feedback-patient" element={<Pfeedback />} />
          <Route path="contact-patient" element={<Pcontact />} />
        </Route>

        <Route path="/therapist-home" element={<Thome />} />
        <Route path="/agent-home" element={<Ahome />} />
      </Routes>
  );
}

export default App;
