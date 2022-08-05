import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import UseToken from '../Hooks/UseToken';


const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [token]=UseToken(user || gUser)

    let signInError;
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (error || gError) {
        signInError = <small><p className='text-red-500'>{error?.message || gError?.message}</p></small>
    }

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
    }
},[token,from,navigate])
  
    if (loading || gLoading) {
        return <Loading></Loading>
    }

    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password);
    }
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-2xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" autoComplete="false"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    pattern: {
                                        required: {
                                            value: true,
                                            message: "Email is required"
                                        },
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
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" autoComplete="false"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {

                                    required: {
                                        value: true,
                                        message: "Password is required"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'

                                    }
                                })}
                            />
                            <label className="label">

                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>
                                }
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>
                                }
                            </label>
                        </div>
                    

                        {signInError}

                        <input className='btn w-full max-w-xs text-white' type="submit" value="Login" />
                    </form>
                    <p>New to Doctors Portal <Link className='text-primary' to="/signUp">Create a New Account</Link></p>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline">
                        Continue With Google
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Login;