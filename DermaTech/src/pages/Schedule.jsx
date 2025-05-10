import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { IonIcon } from 'react-ion-icon';
import '../components/schedule.css';

const SchedulePage = () => {
  const [search, setSearch] = useState('');

  const scheduleData = [
    { id: 'C1', name: 'Cabral France J.', aesthetician: 'Xandra', treatment: 'Acne Facial', date: '01/26/24', time: '10:30 am' },
    { id: 'C2', name: 'Bancoro Veronica M.', aesthetician: 'Xandra', treatment: 'Acne Facial', date: '01/27/24', time: '11:30 am' },
    { id: 'C3', name: 'Zamuco Zedric', aesthetician: 'Xandra', treatment: 'Acne Facial', date: '01/28/24', time: '1:30 pm' },
    { id: 'C4', name: 'Adiz George', aesthetician: 'Reina', treatment: 'Gluta Drip', date: '01/28/24', time: '3:30 pm' },
    { id: 'C5', name: 'Hernandez Ara L.', aesthetician: 'Reina', treatment: 'Gluta Drip', date: '01/28/24', time: '4:30 pm' },
  ];

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <h1 className="text-black">Beauty Clinic</h1>
          </a>
          <a className="btn btn-light text-dark" href="login.html">
            <IonIcon name="log-out-outline" /> Logout
          </a>
        </div>
      </nav>

      {/* Sidebar and Main Content */}
      <div className="d-flex">
        <div id="sidebar" className="p-3 bg-dark text-white" style={{ minWidth: '250px' }}>
          <div className="sidebar-logo text-center mb-3">
            <img src="assets/kdermalogo.png" alt="Logo" className="img-fluid" style={{ maxWidth: '140px' }} />
          </div>

          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link text-white" href="client_rec.html">
                <IonIcon name="folder-outline" /> Client Records Table
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="history.html">
                <IonIcon name="file-tray-full-outline" /> Client History
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="schedule.html">
                <IonIcon name="calendar-outline" /> Schedule
              </a>
            </li>
          </ul>
        </div>

        <div className="main-content container-fluid p-4">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h4 className="mb-0">Schedule</h4>
              <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add-client">
                <IonIcon name="add-outline" />
              </button>
            </div>

            {/* Search Field */}
            <div className="my-3">
              <label htmlFor="search" className="form-label">Search:</label>
              <input
                type="text"
                id="search"
                className="form-control"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {/* Schedule Table */}
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Client ID</th>
                  <th>Client Name</th>
                  <th>Aesthetician</th>
                  <th>Treatment</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {scheduleData.filter(s => s.name.toLowerCase().includes(search.toLowerCase())).map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.aesthetician}</td>
                    <td>{item.treatment}</td>
                    <td>{item.date}</td>
                    <td>{item.time}</td>
                    <td>
                      <button className="btn" data-bs-toggle="modal" data-bs-target="#edit">
                        <IonIcon name="create-outline" />
                      </button>
                      <button className="btn" data-bs-toggle="modal" data-bs-target="#delete">
                        <IonIcon name="trash-outline" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;