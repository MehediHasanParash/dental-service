import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

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


const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {
    const { register, handleSubmit, errors } = useForm();
    
    const onSubmit = data => {
        data.service = appointmentOn;
        data.date = date;
        data.created = new Date();
        console.log(data);
        
        // https://salty-plateau-71286.herokuapp.com/

        fetch('https://boiling-hamlet-31157.herokuapp.com/addAppointment', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                    closeModal();
                     alert('Appointment created successfully.');
            }
        })


        
    }

    return (
        <div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 className="text-center text-brand">{appointmentOn}</h2>
                <p className="text-secondary text-center"><small>ON {date.toDateString()}</small></p>
                <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mb-3">
                        <input type="text"  {...register("name", { required: true })} placeholder="Your Name" className="form-control" />
                        {/* {errors.name && <span className="text-danger">This field is required</span>} */}

                    </div>
                    <div className="form-group mb-3">
                        <input type="text"  {...register('phone', { required: true })}  placeholder="Phone Number" className="form-control" />
                        {/* {errors.phone && <span className="text-danger">This field is required</span>} */}
                    </div>
                    <div className="form-group mb-3">
                        <input type="text" {...register('email', { required: true })} placeholder="Email" className="form-control" />
                        {/* {errors.email && <span className="text-danger">This field is required</span>} */}
                    </div>
                    <div className="form-group">
                        <div className="col-12 mb-3">

                            <select className="form-control" {...register('gender', { required: true })} >
                                <option disabled={true} value="Not set">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Not set">Other</option>
                            </select>
                            {/* {errors.gender && <span className="text-danger">This field is required</span>} */}

                        </div>
                     <div className="form-group row">
                     <div className="col-6">
                            <input {...register('age', { required: true })}  className="form-control" placeholder="Age" type="number" />
                            {/* {errors.age && <span className="text-danger">This field is required</span>} */}
                        </div>
                        <div className="col-6">
                            <input {...register('weight', { required: true })}className="form-control"  placeholder="Weight" type="number" />
                            {/* {errors.weight && <span className="text-danger">This field is required</span>} */}
                        </div>
                     </div>
                    </div>

                    <div className="form-group mt-3 text-right">
                        <button type="submit" className="btn btn-brand">Send</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default AppointmentForm;