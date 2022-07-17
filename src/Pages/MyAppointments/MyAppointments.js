import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppointments = () => {
    const [appointment, setAppointment] = useState([])
    const[user]=useAuthState(auth)
    useEffect(() => {

        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user.email}`)
                .then(res => res.json())
                .then(data => setAppointment(data))
      }
    }, [user])
    return (
        <div>
            <h2>My appointment :{appointment.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Slot</th>
                            <th>Treatment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointment.map((a,index) =>
                                <tr>
                                    <th>{index+1}</th>
                                    <td>{ a.patientName}</td>
                                    <td>{ a.date}</td>
                                    <td>{ a.slot}</td>
                                    <td>{ a.treatment}</td>
                                </tr>)   
                        }
                        {/* <!-- row 1 --> */}
                        {/* <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr> */}
                        {/* <!-- row 2 --> */}
                        {/* <tr>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                        </tr> */}
                        {/* <!-- row 3 --> */}
                        {/* <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;