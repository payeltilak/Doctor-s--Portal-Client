import React from 'react';

const Service = ({ service }) => {
    return (
        
        <div className="card w-96 bg-gray-300 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={service.img} alt="Shoes" className="rounded-xl" />
                </figure>
            <div className="card-body items-center text-center">
              
                <h2 className="card-title">{ service.name_1}</h2>
                <h2 className="card-title">{ service.name_2}</h2>
                <h2 className="card-title">{service.name_3}</h2>
            </div>
            
            </div>
       
    );
};

export default Service;