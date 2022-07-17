import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { _id, name, slots,refetch } = treatment;
    const [user, loading, error] = useAuthState(auth);
    const formateDate = format(date, 'PP');


    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name, slots);
    const booking=
    {
            
        treatmentId: _id,
        treatment: name,
        date: formateDate, slot,
        patient: user.email,
        patientName: user.displayName,
        phone:event.target.phone.value
        
           
        }
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body:JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                //to close the model
                console.log(data);
                if (data.success) {
                    toast(`Appointment is set,${formateDate} at ${slot}`)
                }
                else {
                    toast.error(`You already have an account on${data.booking?.date} at ${data.booking?.slot}`)
                }
                refetch();
                setTreatment(null)
            
        })
      
    
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Booking For {name}</h3>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-5 justify-items-center mt-2'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots?.map((slot, index) => <option value={slot}
                                key={index}
                                >{slot}</option>)
                            }

                        </select>
                        <input type="text" name='name' disabled value={user?.displayName} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' disabled value={user?.email} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;