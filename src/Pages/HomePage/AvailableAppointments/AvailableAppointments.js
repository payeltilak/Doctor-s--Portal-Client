
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../../BookingModal/BookingModal';
import DoctorService from '../../DoctorService/DoctorService';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';

const AvailableAppointments = ({ date }) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState([]);
    const formateDate = format(date, 'PP')
    const { data: services, isLoading,refetch} = useQuery(['available',formateDate], () => fetch(`http://localhost:5000/available?date=${formateDate}`)
            .then(res => res.json()))

    
    if (isLoading) {
        return <Loading></Loading>
    }
    // useEffect(() => {
    //     fetch(`http://localhost:5000/available?date=${formateDate}`)
    //         .then(res => res.json())
    //     .then(data=>setServices(data))
    // },[formateDate])
    return (
        <div>
            <h3 className='text-4xl text-primary text-center '>Available Appointments on  {format(date, 'PP')} </h3>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
                {
                    services?.map(service =>
                        <DoctorService key={service._id} service={service}
                        setTreatment={setTreatment}>
                        </DoctorService>)
                }
            </div>
            {treatment && <BookingModal
                treatment={treatment}
                date={date}
                setTreatment={setTreatment}
                refetch={refetch}
            >
            </BookingModal>}
        </div>
    );
};

export default AvailableAppointments;