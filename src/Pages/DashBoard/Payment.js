import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query'
import Loading from '../Shared/Loading';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L49jdJoj4w36wy9CZTW5Q70QRemoVgIgJHsgoGATc8WkSPOyUYJjtbF4TcXj5Tk1w9cCZULxtnMxnQoVgmwA2NU00osBjzIG4')

const Payment = () => {
    const { id } = useParams()
    console.log(id);
    const url = `http://localhost:5000/booking/${id}`
    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: "GET",
        headers: {
            "authorization": `Bearer ${localStorage.getItem('accessToken')}`,
            "content-type": "application/json"
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }
   
    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className='text-success font-bold'> Hello, {appointment.patientName}</p>
                    <h2 class="card-title">Pay for: {appointment.treatment}</h2>
                    <p>Your appointment <span className='text-orange-700'>{appointment.date}</span> at {appointment.slot}</p>
                    <p>Please pay: ${appointment.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements>
                </div>
            </div>

        </div>
    );
};

export default Payment;