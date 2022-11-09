import { useLoaderData } from 'react-router-dom';
import Service from '../Shared/Service/Service';

const Services = () => {
    const services = useLoaderData()
    return (
        <div>
            <div className='max-w-screen-xl mx-auto my-20'>
                This is services page{services.length}
                <div className='grid grid-cols-3 gap-5 mt-3'>
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