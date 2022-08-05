import React from 'react';
import teeth from '../../../assets/images/teeth.png';
import eye from '../../../assets/images/eye.jpg';
import throat from '../../../assets/images/throat.jpg';
import Service from '../Service/Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name_1: 'Fluoride Treatment',
            name_2: 'Cavity Filling',
            name_3: 'Teeth Whitening',
           
            description: '',
            img :teeth
           },
        {
            _id: 2,
            name_1: 'Refractive errors',
            name_2: 'Cataract',
            name_3: 'Amblyopia',
            description: '',
            img : eye
           },
        {
            _id: 3,
            name_1: 'GERD',
            name_2: 'Tonsillitis',
            name_3: 'Voice Disorders',
            name_4: 'Common cold',
            name_5: 'Strep throat',
            name_6: 'Common cold',
            // name_4: 'Croup',
            // name_5: 'Laryngitis',
            description: '',
            img :throat
           },
           
           

    ]
    return (
        <div className='my-28 '>
            <div className='text-center '>
                <h2 className='text-blue-600 text-4xl font-bold uppercase'>Our services</h2>
                <h3 className='font-bold text-2xl p-5'>Services We Provide</h3>
            </div>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                    
                    
                 }

            </div>
        </div>
    );
};

export default Services;