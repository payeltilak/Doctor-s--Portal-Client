import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppointments = () => {
    const [appointment, setAppointment] = useState([])
    const [user] = useAuthState(auth)
    console.log(localStorage.getItem('accessToken'));
    // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InR1bnR1bkBnbWFpbC5jb20iLCJpYXQiOjE2NTg0MjU1NDAsImV4cCI6MTY1ODQyOTE0MH0.CxQRAbYx9xk84loAbzPcNQN8PyOx8ECHLciKSNlS_u4
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization':`Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log("here it is",data);
                    // setAppointment(data)
                })
      }
    }, [user])
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