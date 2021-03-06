import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../../images/chair.png';
import './HeaderMain.css'

const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 col-sm-6 col-12 offset-md-1">
                <h1 style={{color: '#3A4256'}}>Your New <span className="text-brand">Smile</span> <br/> Starts Here</h1>
                <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
                <div className="button">
                <Link to="/appointment" className="btn btn-brand">GET APPOINTMENT</Link>
                </div>
            </div>
            <div className="col-md-6 col-sm-6 col-12 ps-4">
                <img src={chair} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;