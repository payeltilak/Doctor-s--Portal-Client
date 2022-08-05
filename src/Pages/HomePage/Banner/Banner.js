import React from 'react';

import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen font-bold  ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img className='w-3/5' src='https://media.istockphoto.com/photos/stethoscope-and-laptop-at-the-doctors-desk-picture-id1188438143?k=20&m=1188438143&s=612x612&w=0&h=qriKlZ3isC2KFycm9nLtspqNMG8maGv93-1u55fGm-I=' />
                    <div>
                        <h1 className="text-5xl font-bold">Your New Smile Start Here</h1>
                        <p className="py-6">A physician, medical practitioner, medical doctor, or simply doctor, is a health professional who practices medicine, which is concerned with promoting, maintaining or restoring health through the study, diagnosis, prognosis and treatment of disease, injury, and other physical and mental impairments..</p>

                        <PrimaryButton>Get Started</PrimaryButton>
              
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;