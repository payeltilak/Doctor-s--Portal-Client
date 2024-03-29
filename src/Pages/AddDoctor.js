import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from "react-query";
import Loading from './Shared/Loading';
import {  toast } from 'react-toastify';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit,reset } = useForm();

    const { data: services, isLoading } = useQuery('services', () => fetch('http://localhost:5000/service').then(res => res.json()))
    // console.log(services);

    const imageStorageKey = '6258ed5199966f5394d0d3a5e395d4b3';
    
    const onSubmit = async data => {
        const image = data.image[0]
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
            fetch(url, {
                method: "POST",
                body: formData
            })
                .then(res => res.json())
                .then(result => {
                    if (result.success) {
                        const img = result.data.url
                        const doctor = {
                            name: data.name,
                            email: data.email,
                            specialty: data.specialty,
                            img: img
                        }
                        // send to your database

                        fetch('http://localhost:5000/doctor', {
                            method: "POST",
                            headers: {
                                'content-type': 'application/json',
                                authorization: `Bearer ${localStorage.getItem('accessToken') }`
                        },
                    body: JSON.stringify(doctor)
                })
                .then(res => res.json())
                .then(inserted => {
                    if (inserted.insertedId) {
                        toast.success("Doctor added successfully")
                        reset()
                    }
                    else {
                        toast.error("Failed to added doctor")
                    }
                })
    }
}) 
    }
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div >
            <h2 className='text-2xl font-bold '>Add a New Doctor</h2>
            <div className='flex h-screen ' >
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"
                            placeholder="Your Name"
                            className="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "Name is required"
                                },
                            })}
                        />
                        <label className="label">

                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>
                            }
                            {/* {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>
                                    } */}
                        </label>

                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"
                            placeholder="Your Email"
                            className="input input-bordered w-full max-w-xs"
                            {...register("email", {

                                required: {
                                    value: true,
                                    message: "Email is required"
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid email'
                                }
                            })}
                        />
                        <label className="label">

                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>
                            }
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>
                            }
                        </label>

                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">specialty</span>
                        </label>
                        <select {...register('specialty')} class="select input-bordered w-full max-w-xs">
                            {
                                services.map(service => <option
                                    key={service._id}
                                    value={service.name}
                                >{service.name}</option>)
                            }

                        </select>

                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="file"
                            placeholder="Your Name"
                            className="input input-bordered w-full max-w-xs"
                            {...register("image", {
                                required: {
                                    value: true,
                                    message: "Image is required"
                                },
                            })}
                        />
                        <label className="label">

                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>
                            }
                            {/* {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>
                                    } */}
                        </label>

                    </div>
                    <input />
                    <input className='btn w-full  max-w-xs text-white ' type="submit" value="Add" />
                </form>

           </div>
        </div>
    );
};

export default AddDoctor;