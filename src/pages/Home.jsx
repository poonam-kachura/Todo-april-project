import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Home(props) {
    return (
        <div className='container-fluid h-100'>
            <div className='row h-100'>
                <div className='col-lg-6 bg-primary d-flex flex-column align-items-center justify-content-center text-white text-center text-uppercase h-100'>
                    <h1 className='display-4'>An App to <br />
                        make your life <br />
                       <span className='display-1'>easy</span>
                    </h1>
                </div>
                <div className='col-lg-6 h-100 d-flex flex-column justify-content-center align-items-center'>
                    <div className='card rounded-0 w-50'>
                        <div className='card-header border-0 bg-white p-0 d-flex text-center'>
                            <Link className='bg-white w-50 p-3 text-decoration-none' to="/login">Login</Link>
                            <Link className='bg-primary text-white w-50 p-3 text-decoration-none' to="/register">Register</Link>
                        </div>
                        <div className='card-body'>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;