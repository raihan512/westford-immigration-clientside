import { useLoaderData } from 'react-router-dom';
import Service from '../Shared/Service/Service';

const Services = () => {
    const services = useLoaderData()
    return (
        <div>
            <div className='max-w-screen-xl mx-auto my-20'>
                <h3
                    className='text-lg md:text-2xl lg:text-5xl font-bold text-blue-2 text-center uppercase mb-3'
                >Currently we provide {services.length} services</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-3 mx-2 lg:mx-0'>
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;