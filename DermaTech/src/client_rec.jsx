import React from "react";
import "./client_rec.css";

const BeautyClinic = () => {
  const clients = [
    { id: "C1", lastName: "Bancoro", firstName: "Veronica", age: 21, contact: "09876543212", gender: "Female", date: "12/12/2022" },
    { id: "C2", lastName: "De Asis", firstName: "Daniel", age: 22, contact: "09876543212", gender: "Male", date: "12/12/2022" },
    { id: "C3", lastName: "Sinag", firstName: "Ace", age: 22, contact: "09876543212", gender: "Male", date: "12/12/2022" },
    { id: "C4", lastName: "Adiz", firstName: "George", age: 21, contact: "09876543212", gender: "Male", date: "12/12/2022" },
    { id: "C5", lastName: "Bancoro", firstName: "Xandra", age: 20, contact: "09876543212", gender: "Female", date: "12/12/2022" },
    { id: "C6", lastName: "Hernandez", firstName: "Ara", age: 21, contact: "09876543212", gender: "Female", date: "12/12/2022" },
    { id: "C7", lastName: "Coro", firstName: "Rea", age: 28, contact: "09876543212", gender: "Female", date: "12/12/2022" },
    { id: "C8", lastName: "Aclan", firstName: "John", age: 29, contact: "09876543212", gender: "Male", date: "12/12/2022" },
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
          <h2>Client Records Table +</h2>
          <div className="search-bar">
            <input type="text" placeholder="Search" />
            <button>search</button>
          </div>
        </header>

        <table>
          <thead>
            <tr>
              <th>Client ID</th>
              <th>Last Name</th>
              <th>First Name</th>
              <th>Age</th>
              <th>Contact No.</th>
              <th>Gender</th>
              <th>Date Added</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.id}>
                <td>{client.id}</td>
                <td>{client.lastName}</td>
                <td>{client.firstName}</td>
                <td>{client.age}</td>
                <td>{client.contact}</td>
                <td>{client.gender}</td>
                <td>{client.date}</td>
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

export default BeautyClinic;