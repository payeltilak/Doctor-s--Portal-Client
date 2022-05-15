import React from 'react';

const Review = ({review}) => {
    return (
        <div className="card w-96 bg-primary text-primary-content">
            <div className="card-body">
                <h2 className="card-title">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className=' flex items-center'>
                    <div className="avatar">
                        <div className="w-30 font-bold  rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={review.img} />
                        </div>
                    </div>
                    <div>
                        <h4>{review.name}</h4>
                        <h5>{ review.location}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;