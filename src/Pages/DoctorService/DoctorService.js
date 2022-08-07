import React from 'react';

const DoctorService = ({ service, setTreatment }) => {
    const { name, slots,price } = service;
    console.log(service);
    
    return (
        <div className="card w-96 bg-indigo-200 shadow-2xl p-5 my-10">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>
                    {
                        slots.length
                            ?
                            <span>{ slots[0]} </span>
                            :
                            <span className='text-red-500'>Try another date</span>
                    }
               </p>

                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <p><small>Price: ${price}</small></p>
                <div className="card-actions justify-center">
                   
                    <label
                        disabled={slots.length === 0} onClick={() => setTreatment(service)} htmlFor="booking-modal" className="btn modal-bg-purple-800">Book Appointment
                    </label>
                </div>
            </div>
        </div>
    );
};

export default DoctorService;