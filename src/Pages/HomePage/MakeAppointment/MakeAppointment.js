import React from 'react';
import doctor from '../../../assets/images/doctor-small.png';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton';


const MakeAppointment = () => {

    return (
        <div style={{ background: `url(${appointment})` }}
            className='flex my-10 justify-center items-center'>
            <div className='flex-1 mt-[-50px]'>
                <img src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h2 className='text-primary text-1xl font-bold uppercase'>Appointment</h2>
                <h3 className='text-4xl font-bold'>Make an Appointment Today</h3>
                <p className='text-white p-5'>An appointment is a formal date or plan to meet at the appointed time. Whether you have a doctor’s appointment, a hair appointment, or a 1 o’clock lunch appointment, you need to be there — or you’ll have a broken appointment. It’s easier to remember your appointments if you write them down! With roots in the Old French apointier, meaning to “arrange, settle, or place," appointment can also mean the placing, or appointing of, someone into an unelected position.</p>

                <PrimaryButton>Click Here</PrimaryButton>
            </div>
        </div>
    );
};

export default MakeAppointment;