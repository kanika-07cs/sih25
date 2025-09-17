import React, { useState } from 'react';

// Mock data (replace with API calls)
const patients = [
  { id: 1, name: 'Asha Patel', age: 42, phone: '+91 98765 43210', status: 'Active', nextSession: '2025-09-19', dosha: 'Kapha' },
  { id: 2, name: 'Ravi Kumar', age: 35, phone: '+91 91234 56789', status: 'Planned', nextSession: '2025-09-21', dosha: 'Vata' },
  { id: 3, name: 'Meera Joshi', age: 29, phone: '+91 99887 66554', status: 'Completed', nextSession: '—', dosha: 'Pitta' },
];

const therapies = [
  { id: 'T1', name: 'Virechana (Purgation)', duration: '3 days', pre: 'Light meals 6 hrs before', post: 'Rest 48 hrs', typicalSessions: 3 },
  { id: 'T2', name: 'Vamana (Emesis)', duration: '1-2 days', pre: 'No heavy meals 8 hrs before', post: 'Follow prescribed diet', typicalSessions: 2 },
  { id: 'T3', name: 'Basti (Decoction enema)', duration: '7 days', pre: 'Avoid cold water', post: 'Warm oil massage', typicalSessions: 7 },
];

export default function PanchakarmaDashboard() {
  const [selectedPatient, setSelectedPatient] = useState(patients[0]);
  const [selectedTherapy, setSelectedTherapy] = useState(therapies[0]);
  const [showScheduleForm, setShowScheduleForm] = useState(false);
  const [schedule, setSchedule] = useState({ patientId: 1, therapyId: 'T1', date: '2025-09-19', notes: '' });
  const [feedbacks, setFeedbacks] = useState([]);

  function saveSchedule(e) {
    e.preventDefault();
    // replace with API call to save schedule
    alert(`Scheduled therapy ${schedule.therapyId} for patient ${schedule.patientId} on ${schedule.date}`);
    setShowScheduleForm(false);
  }

  function submitFeedback(e) {
    e.preventDefault();
    const form = e.target;
    const data = { id: Date.now(), patientId: selectedPatient.id, text: form.message.value, date: new Date().toISOString() };
    setFeedbacks((s) => [data, ...s]);
    form.reset();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-emerald-50 text-gray-800 p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Sidebar */}
        <aside className="lg:col-span-3 bg-white/60 backdrop-blur-md rounded-2xl p-5 shadow-lg border border-amber-100">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-300 to-emerald-300 flex items-center justify-center text-white font-semibold">P</div>
            <div>
              <h3 className="font-semibold">Panchakarma HQ</h3>
              <p className="text-xs text-gray-600">Operations · Management</p>
            </div>
          </div>

          <nav className="mt-6">
            <ul className="space-y-2">
              <li className="px-3 py-2 rounded-lg hover:bg-amber-50 cursor-pointer font-medium">Dashboard</li>
              <li className="px-3 py-2 rounded-lg hover:bg-amber-50 cursor-pointer">Patients</li>
              <li className="px-3 py-2 rounded-lg hover:bg-amber-50 cursor-pointer">Therapies</li>
              <li className="px-3 py-2 rounded-lg hover:bg-amber-50 cursor-pointer">Schedules</li>
              <li className="px-3 py-2 rounded-lg hover:bg-amber-50 cursor-pointer">Reports</li>
              <li className="px-3 py-2 rounded-lg hover:bg-amber-50 cursor-pointer">Settings</li>
            </ul>
          </nav>

          <div className="mt-6 p-4 bg-gradient-to-br from-white to-amber-50 rounded-xl border border-amber-100">
            <h4 className="text-sm font-medium">Quick Actions</h4>
            <div className="mt-3 flex flex-col gap-2">
              <button onClick={() => setShowScheduleForm(true)} className="px-3 py-2 rounded-lg bg-amber-300 font-medium">New Schedule</button>
              <button className="px-3 py-2 rounded-lg border">Add Patient</button>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="lg:col-span-9 space-y-6">
          {/* Header */}
          <header className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-extrabold">Panchakarma Management</h1>
              <p className="text-sm text-gray-600 mt-1">Automated scheduling · Therapy guidance · Real-time tracking</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-sm">Sep 17, 2025</div>
                <div className="text-xs text-gray-500">Welcome back</div>
              </div>
              <button onClick={() => setShowScheduleForm(true)} className="px-4 py-2 bg-amber-300 rounded-lg font-medium hover:shadow">+ Schedule</button>
            </div>
          </header>

          {/* KPIs */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white/70 backdrop-blur-md rounded-xl p-4 shadow border border-amber-100">
              <div className="text-xs text-gray-500">Active Patients</div>
              <div className="text-2xl font-bold mt-1">{patients.filter(p => p.status !== 'Completed').length}</div>
              <div className="text-xs text-gray-400 mt-1">Tracked this month</div>
            </div>

            <div className="bg-white/70 backdrop-blur-md rounded-xl p-4 shadow border border-amber-100">
              <div className="text-xs text-gray-500">Scheduled Sessions</div>
              <div className="text-2xl font-bold mt-1">{5}</div>
              <div className="text-xs text-gray-400 mt-1">Next 7 days</div>
            </div>

            <div className="bg-white/70 backdrop-blur-md rounded-xl p-4 shadow border border-amber-100">
              <div className="text-xs text-gray-500">Avg Recovery Score</div>
              <div className="text-2xl font-bold mt-1">78%</div>
              <div className="text-xs text-gray-400 mt-1">Patient-reported</div>
            </div>

            <div className="bg-white/70 backdrop-blur-md rounded-xl p-4 shadow border border-amber-100">
              <div className="text-xs text-gray-500">Feedback Received</div>
              <div className="text-2xl font-bold mt-1">{feedbacks.length}</div>
              <div className="text-xs text-gray-400 mt-1">Live updates</div>
            </div>
          </section>

          {/* Split: Patients + Therapies */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white/75 backdrop-blur-md rounded-2xl p-6 shadow border border-amber-100">
              <h3 className="font-semibold text-lg">Patients</h3>
              <p className="text-sm text-gray-500 mt-1">Manage patient profiles, schedules and dosha details.</p>

              <ul className="mt-6 space-y-3">
                {patients.map((p) => (
                  <li key={p.id} className={`flex items-center justify-between p-3 rounded-lg border ${selectedPatient.id === p.id ? 'bg-amber-50' : 'bg-white'}`}>
                    <div>
                      <div className="font-medium">{p.name}</div>
                      <div className="text-xs text-gray-500">{p.dosha} · Next: {p.nextSession}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => setSelectedPatient(p)} className="px-3 py-1 rounded-lg border text-xs">View</button>
                      <button className="px-3 py-1 rounded-lg bg-emerald-200 text-xs">Call</button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/75 backdrop-blur-md rounded-2xl p-6 shadow border border-amber-100">
              <h3 className="font-semibold text-lg">Therapies Catalogue</h3>
              <p className="text-sm text-gray-500 mt-1">Standardized therapy protocols & precautions.</p>

              <ul className="mt-6 space-y-3">
                {therapies.map((t) => (
                  <li key={t.id} className={`p-3 rounded-lg border ${selectedTherapy.id === t.id ? 'bg-amber-50' : 'bg-white'}`}>
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-medium">{t.name}</div>
                        <div className="text-xs text-gray-500">{t.duration} · Sessions: {t.typicalSessions}</div>
                        <div className="text-xs text-gray-500 mt-2">Pre: {t.pre}</div>
                        <div className="text-xs text-gray-500 mt-1">Post: {t.post}</div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <button onClick={() => setSelectedTherapy(t)} className="px-3 py-1 rounded-lg border text-xs">Select</button>
                        <button className="px-3 py-1 rounded-lg bg-amber-100 text-xs">Protocol</button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Real-time tracking & visualization */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="col-span-2 bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow border border-amber-100">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Real-Time Therapy Tracking</h3>
                <div className="text-sm text-gray-500">Live · Next 24 hrs</div>
              </div>

              <div className="mt-6 h-44 rounded-lg bg-amber-50 flex items-center justify-center text-gray-400">[Sequence timeline / Gantt chart placeholder]</div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-white rounded-xl p-3 border">
                  <div className="text-xs text-gray-500">Ongoing</div>
                  <div className="font-medium">2</div>
                </div>
                <div className="bg-white rounded-xl p-3 border">
                  <div className="text-xs text-gray-500">Upcoming</div>
                  <div className="font-medium">5</div>
                </div>
                <div className="bg-white rounded-xl p-3 border">
                  <div className="text-xs text-gray-500">Completed Today</div>
                  <div className="font-medium">8</div>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow border border-amber-100">
              <h4 className="font-semibold">Quick Insights</h4>
              <div className="mt-3 text-sm text-gray-600">Use these cards to surface important alerts and protocol deviations.</div>

              <ul className="mt-4 space-y-3">
                <li className="p-3 rounded-lg border">Low hydration alert: 3 patients</li>
                <li className="p-3 rounded-lg border">Missed pre-therapy precautions: 1</li>
                <li className="p-3 rounded-lg border">New feedback awaiting review: {feedbacks.length}</li>
              </ul>
            </div>
          </section>

          {/* Feedback & Patient detail */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white/75 backdrop-blur-md rounded-2xl p-6 shadow border border-amber-100">
              <h3 className="font-semibold">Patient Detail</h3>
              <div className="mt-4">
                <div className="font-medium">{selectedPatient.name} · {selectedPatient.age} yrs</div>
                <div className="text-xs text-gray-500">{selectedPatient.phone} · Dosha: {selectedPatient.dosha}</div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="bg-white rounded-xl p-3 border">
                    <div className="text-xs text-gray-500">Last Session</div>
                    <div className="font-medium">2025-09-12</div>
                  </div>
                  <div className="bg-white rounded-xl p-3 border">
                    <div className="text-xs text-gray-500">Next Session</div>
                    <div className="font-medium">{selectedPatient.nextSession}</div>
                  </div>
                </div>

                <div className="mt-4">
                  <form onSubmit={submitFeedback} className="space-y-2">
                    <label className="text-xs font-medium">Submit feedback / symptoms</label>
                    <textarea name="message" required className="w-full p-2 rounded-lg border" rows={3} />
                    <div className="flex justify-end">
                      <button type="submit" className="px-3 py-1 rounded-lg bg-amber-300 text-sm">Send</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="bg-white/75 backdrop-blur-md rounded-2xl p-6 shadow border border-amber-100">
              <h3 className="font-semibold">Recent Feedback</h3>
              <ul className="mt-4 space-y-3">
                {feedbacks.length === 0 ? (
                  <li className="text-sm text-gray-500">No feedback yet — patient responses will appear here.</li>
                ) : (
                  feedbacks.map(f => (
                    <li key={f.id} className="p-3 rounded-lg border">
                      <div className="text-xs text-gray-500">{new Date(f.date).toLocaleString()}</div>
                      <div className="mt-1">{f.text}</div>
                    </li>
                  ))
                )}
              </ul>
            </div>
          </section>

          {/* Footer / Reports */}
          <section className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow border border-amber-100">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Reports & Exports</h3>
              <div className="flex gap-2">
                <button className="px-3 py-1 rounded-lg border">Export CSV</button>
                <button className="px-3 py-1 rounded-lg border">Generate PDF</button>
              </div>
            </div>

            <div className="mt-4 text-sm text-gray-500">Generate standardized reports for compliance and quality assurance. Connect this to your analytics service to power the visualization area.</div>
          </section>

        </main>
      </div>

      {/* Schedule modal */}
      {showScheduleForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <form onSubmit={saveSchedule} className="w-full max-w-md bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="font-semibold text-lg">Schedule Therapy</h3>
            <div className="mt-4 space-y-3">
              <label className="text-xs">Patient</label>
              <select value={schedule.patientId} onChange={e => setSchedule(s => ({...s, patientId: Number(e.target.value)}))} className="w-full p-2 rounded-lg border">
                {patients.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
              </select>

              <label className="text-xs">Therapy</label>
              <select value={schedule.therapyId} onChange={e => setSchedule(s => ({...s, therapyId: e.target.value}))} className="w-full p-2 rounded-lg border">
                {therapies.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
              </select>

              <label className="text-xs">Date</label>
              <input type="date" value={schedule.date} onChange={e => setSchedule(s => ({...s, date: e.target.value}))} className="w-full p-2 rounded-lg border" />

              <label className="text-xs">Notes</label>
              <input value={schedule.notes} onChange={e => setSchedule(s => ({...s, notes: e.target.value}))} className="w-full p-2 rounded-lg border" />
            </div>

            <div className="mt-4 flex justify-end gap-2">
              <button type="button" onClick={() => setShowScheduleForm(false)} className="px-3 py-1 rounded-lg border">Cancel</button>
              <button type="submit" className="px-3 py-1 rounded-lg bg-amber-300">Save</button>
            </div>
          </form>
        </div>
      )}

      <footer className="max-w-7xl mx-auto mt-8 text-center text-xs text-gray-500">
        Panchakarma Management Prototype • Replace mock data with real API endpoints, WebSocket integration for live tracking, and charting (e.g., Recharts or Chart.js) for visualizations.
      </footer>
    </div>
  );
}
