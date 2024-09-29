//dashboard.js
import React from 'react';
import './login.css';


function App() {
    return (
        <div className="dashboard-container">
            {/* Header */}
            <header className="header">
                <div className="hotel-name">THE MARISON HOTEL</div>
                <input type="text" className="search-bar" placeholder="Search..." />
                <div className="user-info">
                    <span>LOREM IPSUM</span>
                    <span>RECEPTIONIST</span>
                </div>
            </header>

            {/* Sidebar */}
            <div className="sidebar">
                <ul>
                    <li className="active">Dashboard</li>
                    <li>Room</li>
                    <li>Guest</li>
                    <li>Booking</li>
                    <li>Settings</li>
                    <li>Log Out</li>
                </ul>
            </div>

            {/* Main Content */}
            <main className="main-content">
                <h2>Dashboard</h2>
                <div className="stats">
                    <div className="stat-item booked">
                        <p>Booked Rooms</p>
                        <div className="circle">
                            <span>21/35</span>
                        </div>
                    </div>
                    <div className="stat-item available">
                        <p>Available Rooms</p>
                        <div className="circle">
                            <span>14</span>
                        </div>
                    </div>
                    <div className="stat-item check-in">
                        <p>Check-In</p>
                        <div className="circle">
                            <span>35</span>
                        </div>
                    </div>
                    <div className="stat-item check-out">
                        <p>Check-Out</p>
                        <div className="circle">
                            <span>35</span>
                        </div>
                    </div>
                </div>

                {/* Arrivals and Departures Tables */}
                <div className="arrivals-departures">
                    <div className="arriving-today">
                        <h3>Arriving Today</h3>
                        <table>
                            <thead>
                            <tr>
                                <th>Res ID</th>
                                <th>Customer Name</th>
                                <th>Guests</th>
                                <th>Rooms</th>
                                <th>Check-Out</th>
                                <th>Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            {/* Add table rows here as needed */}
                            </tbody>
                        </table>
                    </div>

                    <div className="departing-today">
                        <h3>Departing Today</h3>
                        <table>
                            <thead>
                            <tr>
                                <th>Res ID</th>
                                <th>Customer Name</th>
                                <th>Guests</th>
                                <th>Rooms</th>
                                <th>Check-In</th>
                                <th>Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            {/* Add table rows here as needed */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
