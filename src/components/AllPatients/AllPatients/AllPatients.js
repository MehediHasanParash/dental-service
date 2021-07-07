import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import AppointmentDataTable from '../../Appointment/AppointmentDataTable/AppointmentDataTable';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import './allPatients.css';

const AllPatients = () => {
    const [appointments, setAppointments] = useState([]);
    const [search, setSearch] = useState('');

    const handleSearch = event => {
        setSearch(event.target.value);
    }
    useEffect(() => {
        fetch('http://localhost:5000/appointments?search=' + search)
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [search])

    return (
        <div className="container-fluid row" >
            {/* <div className="col-4"> */}
            <Sidebar></Sidebar>
            {/* </div> */}
            <div className="col-md-10 p-4 pr-5 details"  style={{ position: "absolute", right: 0, backgroundColor: "#F4FDF" }}>
           
                <h5 className="text-brand">All Patients</h5>

                <div className="search-box"> 
                     <div className="search">
                        <input type="search" onBlur={handleSearch} placeholder="search" />
                        <button type=""><FontAwesomeIcon className="icon" icon={faSearch} /></button>
                    </div> 
                 </div>

                <AppointmentDataTable appointments={appointments} />
            </div>
        </div>
    );
};

export default AllPatients;