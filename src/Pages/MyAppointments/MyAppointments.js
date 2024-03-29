import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppointments = () => {
    const [appointment, setAppointment] = useState([])
    const [user] = useAuthState(auth)
    const navigate = useNavigate();
    // console.log(localStorage.getItem('accessToken'));
    
   
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization':`Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    // console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken')
                        navigate('/')
                    }
                  
                   return res.json()

                })
                .then(data => {
                    // console.log(data.bookings);
                  setAppointment(data.bookings)
                })
      }
    }, [user, navigate])
    // console.log(appointment._id);
    return (
        <div>
            <h2>My appointment :{appointment?.length}</h2>
         
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Slot</th>
                            <th>Treatment</th>
                            <th>Payment</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointment?.map((a,index) =>
                                <tr>
                                    <th>{index+1}</th>
                                    <td>{ a.patientName}</td>
                                    <td>{ a.date}</td>
                                    <td>{ a.slot}</td>
                                    <td>{a.treatment}</td>
                                    <td>
                                       {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                                    </td>
                                    <td>
                                        {(a.price && a.paid) && <div>
                                            <p><span className='text-success'>Paid</span></p>
                                            <p><small className='text-success'>TransactionId: {a.transactionId}</small></p>
                                        </div>}
                                    </td>
                                </tr>)   
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;