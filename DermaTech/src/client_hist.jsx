import React from "react";
import "./client_hist.css";

const ClientHistory = () => {
  const treatments = [
    { treatment: "Gluta Drip", aesthetician: "Marie", date: "12/12/2022" },
    { treatment: "Gluta Drip", aesthetician: "Xandra", date: "12/12/2022" },
    { treatment: "Acne Facial", aesthetician: "Jessie", date: "12/12/2022" },
    { treatment: "Acne Facial", aesthetician: "Jessie", date: "12/12/2022" },
  ];

  return (
    <div className="clinic-container">
      <aside className="sidebar">
        <div className="logo-section">
          <img src="/kdermalogo.png" alt="Logo" className="logo" />
          <h1>DERMA</h1>
        </div>
        <nav>
          <ul>
            <li>Client Records Table</li>
            <li>Schedule</li>
            <li>Appointment Details</li>
            <li>Inventory</li>
            <li>Treatment</li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        <header className="header">
          <h2>Client History</h2>
          <div className="client-info">
            <div className="info-box">Client Name: De Asis Daniel</div>
            <div className="info-box">Client ID: C2</div>
          </div>
        </header>

        <table>
          <thead>
            <tr>
              <th>History of Treatments</th>
              <th>Aesthetician</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {treatments.map((item, index) => (
              <tr key={index}>
                <td>{item.treatment}</td>
                <td>{item.aesthetician}</td>
                <td>{item.date}</td>
                <td className="actions">
                  <button>✏️</button>
                  <button>🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <footer className="pagination">
          <button disabled>Previous</button>
          <span>1</span>
          <button>Next</button>
        </footer>
      </main>
    </div>
  );
};

export default ClientHistory;