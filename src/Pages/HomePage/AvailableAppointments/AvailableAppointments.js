
import React, { useEffect, useState } from 'react';
import BookingModal from '../../BookingModal/BookingModal';
import DoctorService from '../../DoctorService/DoctorService';

const AvailableAppointments = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            <h3 className='text-4xl text-primary text-center '>Available Appointments on =</h3>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
                {
                    services.map(service =>
                        <DoctorService key={service.id} service={service}
                        setTreatment={setTreatment}>
                        </DoctorService>)
                }
            </div>
            {treatment && <BookingModal
                treatment={treatment}
                date={date}
                setTreatment={setTreatment}
            >
            </BookingModal>}
        </div>
    );
};

export default AvailableAppointments;