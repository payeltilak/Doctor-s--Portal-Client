import React from 'react';
import treatment from '../../../assets/images/treatment.png';

const Treatment = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img className='w-96 p-10' src="https://media.istockphoto.com/photos/one-nurse-looking-at-the-medical-ventilator-screen-picture-id1255590983?b=1&k=20&m=1255590983&s=170667a&w=0&h=wD8P_5dM-CqWGoSfGzGXv52F0IvEtolMYR90b_Zvb-Y="  alt="" />
                    <div>
                        <h1 className="text-4xl font-bold  px-15">Exceptional Medical Care <br />
                        On Your task
                        </h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn btn-19D3AE text-white font-bold bg-gradient-to-r from-secondary to-primary ">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Treatment;