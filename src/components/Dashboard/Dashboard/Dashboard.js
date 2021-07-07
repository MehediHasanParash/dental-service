import React, { useContext, useEffect, useState } from 'react';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../../../App';
import './Dashboard.css';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    width: "100%",
}

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);

    const handleDateChange = date => {
        setSelectedDate(date);
    }

    useEffect(() => {
        fetch('http://localhost:5000/appointmentsByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ date: selectedDate, email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [selectedDate]);

    return (
        <section>
            <div style={containerStyle} className="row">
                <div className="col-2">
                    <Sidebar></Sidebar>
                </div>
               <div className="col calenderAppointment">
               <div className="">
                    <Calendar
                    className=""
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>
                <div className=" ">
                    <AppointmentsByDate appointments={appointments}></AppointmentsByDate>
                </div>
               </div>
            </div>
        </section>
    );
};

export default Dashboard;