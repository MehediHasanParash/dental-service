import React from 'react';
import img from '../../../images/doctor-sm.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import './Doctor.css';

const Doctor = ({doctor}) => {
    return (
        <div className="col-md-4 col-sm-6 text-center">
        {
            doctor.image ? <img style={{height: '200px'}} src={`data:image/png;base64,${doctor.image.img}`}/>
            :
            <img style={{height: '200px'}} className="img-fluid mb-3" src={`https://boiling-hamlet-31157.herokuapp.com/${doctor.img}`} alt=""/>
        }
            <h4 className="name">{doctor.name}</h4>
            <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/> +880-188-934789</p>
        </div>
    );
};

export default Doctor;