import React from 'react'
import Authorization from './Authorization'
import '../css/Dashboard.css';

export default function Dashboard() {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    return (
    <>
        <Authorization status= {isLoggedIn}/>
        <div className="dashboard">
          <h1>Dashboard</h1>
          <div className="card">
            <h3>Patient Statistics</h3>
            <p>Total Patients: 100</p>
            <p>Active Patients: 75</p>
            <p>Inactive Patients: 25</p>
          </div>
          <div className="card">
            <h3>Appointments</h3>
            <p>Today's Appointments: 10</p>
            <p>Upcoming Appointments: 20</p>
            <p>Missed Appointments: 5</p>
          </div>
        </div>
    </>
  )
}

