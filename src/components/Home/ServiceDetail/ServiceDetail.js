import React from 'react';
import './ServiceDetail.css';

const ServiceDetail = ({ service }) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{height: '50px'}} src={service.img} alt="" />
            <div className="h5">
            <h5 className="mt-3 mb-3">{service.name}</h5>
            </div>
            <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quaerat?</p>
        </div>
    );
};

export default ServiceDetail;