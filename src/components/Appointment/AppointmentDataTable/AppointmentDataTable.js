import React, { useState } from 'react';
import { Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap';
import './AppointmentDataTable.css';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';



const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

const AppointmentDataTable = ({ appointments }) => {

    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <table className="table  table-borderless">
            <thead>
                <tr className="">
                    <th className="text-secondary text-left" scope="col">Sr No</th>
                    <th className="text-secondary " scope="col">Name</th>
                    <th className="text-secondary display" scope="col">Gender</th>
                    <th className="text-secondary display" scope="col">Age</th>
                    <th className="text-secondary display" scope="col">Weight</th>
                    <th className="text-secondary display" scope="col">Phone</th>
                    <th className="text-secondary display" scope="col">Email</th>
                    <th className="text-secondary display1" scope="col">More Info</th>
                    <th className="text-secondary display" scope="col">Permission</th>
                </tr>
            </thead>
            <tbody>
                {
                    appointments.map((appointment, index) =>

                        <tr>
                            <td>{index + 1}</td>
                            <td>{appointment.name}</td>
                            <td className="display">{appointment.gender}</td>
                            <td className="display">{appointment.age}</td>
                            <td className="display">{appointment.weight}KG</td>
                            <td className="display">{appointment.phone}</td>
                            <td className="display">{appointment.email}</td>
                            <td className="display1">

                                <button className="btn btn-brand" onClick={openModal}>About</button>
                                <Modal
                                    isOpen={modalIsOpen}
                                    onAfterOpen={afterOpenModal}
                                    onRequestClose={closeModal}
                                    style={customStyles}
                                    contentLabel="Example Modal"
                                >
                                    {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>know More</h2> */}
                                    <button className="btn btn-brand me-auto" onClick={closeModal}><FontAwesomeIcon icon={faTimes} /> </button>
                                    <form className="form ms-0">
                                        <table className="table table-borderless ftTable">
                                        <thead>
                                                <tr>
                                                    <th className="text-secondary " scope="col">Permission</th>
                                                </tr>
                                            </thead>
                                            <tbody className="">
                                                <tr>
                                                    <td className="">
                                                        <div className="col">

                                                            <select className="form-control" >
                                                                <option disabled={true} value="Not set">Select permission</option>
                                                                <option value="Completed">Pending</option>
                                                                <option value="Pending">Completed</option>
                                                                <option value="Cancelled">Cancelled</option>
                                                            </select>

                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        
                                            <thead>
                                            
                                                <tr className="">
                                                
                                                    <th className="text-secondary " scope="col">Age</th>
                                                    <th className="text-secondary " scope="col">Weight</th>
                                                </tr>
                                            </thead>
                                            <tbody className="">
                                                <tr>
                                                    <td className="">{appointment.age}</td>
                                                    <tr>
                                                    <td className="">{appointment.weight}KG</td>
                                                </tr>
                                                </tr>
                                            </tbody>
                                            <thead>
                                                <tr>
                                                    <th className="text-secondary " scope="col">Phone</th>
                                                </tr>
                                            </thead>
                                            <tbody className="">
                                                <tr>
                                                    <td className="">{appointment.phone}</td>
                                                </tr>
                                            </tbody>
                                            <thead>
                                                <tr>
                                                    <th className="text-secondary " scope="col">Email</th>
                                                </tr>
                                            </thead>
                                            <tbody className="">
                                                <tr>
                                                    <td className="">{appointment.email}</td>
                                                </tr>
                                            </tbody>
                                      
                                        </table>
                                    </form>
                                </Modal>

                            </td>

                            <td>
                                <div className="col display">

                                    <select className="form-control" >
                                        <option disabled={true} value="Not set">Select permission</option>
                                        <option value="Completed">Pending</option>
                                        <option value="Pending">Completed</option>
                                        <option value="Cancelled">Cancelled</option>
                                    </select>

                                </div>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default AppointmentDataTable;