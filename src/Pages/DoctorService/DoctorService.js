import React from 'react';

const DoctorService = ({ service, setTreatment }) => {
    const {name,slots } = service;
    
    return (
        <div class="card w-96 bg-base-100 shadow-2xl p-5 my-10">
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>
                    {
                        slots.length
                            ?
                            <span>{ slots[0]} </span>
                            :
                            <span className='text-red-500'>Try another date</span>
                    }
               </p>

                <p>{ slots.length} {slots.length>1?'spaces' : 'space'} available</p>
                <div class="card-actions justify-center">
                   
                    <label
                        disabled={slots.length === 0} onClick={() => setTreatment(service)} for="booking-modal" class="btn modal-button btn btn-primary">Book Appointment
                    </label>
                </div>
            </div>
        </div>
    );
};

export default DoctorService;