import React from 'react';

const InfoCard = ({img,cardTitle,bgClass}) => {
    return (
        
        <div className={`card lg:card-side bg-base-100 shadow-xl bg-accent container  ${bgClass}`}>
                <figure>
                    <img className='px-3' src={img} />

                    </figure>
                <div className="card-body container text-white">
                    <h2>{cardTitle}</h2>
                    <h2 className="card-title text-white">Golpahar Mor,chittagong </h2>
                   
                  
                </div>
            </div>
        
    );
};

export default InfoCard;