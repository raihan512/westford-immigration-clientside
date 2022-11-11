import { Link } from 'react-router-dom';
import Service from '../../Shared/Service/Service';

const Services = ({ services }) => {
    return (
        <div className='max-w-screen-xl mx-auto my-20 md:mx-5'>
            <h3 className='text-lg md:text-5xl font-bold text-blue-2 text-center uppercase'>Our Services</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-3 mx-2 lg:mx-0'>
                {
                    services.slice(0, 3).map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
                {/* {
                    services.slice()
                } */}
            </div>
            <div className='mt-2 flex justify-end'>
                <button className='py-2 px-10 bg-blue-2  text-sm md:text-md text-white rounded-sm'>
                    <Link to='/services'>See All</Link>
                </button>
            </div>
        </div>
    );
};

export default Services;


