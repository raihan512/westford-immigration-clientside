import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddService = () => {
    const navigate = useNavigate()
    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const img = form.img.value;
        const desc = form.desc.value;
        const price = form.price.value;
        const service = { title, img, desc, price }
        console.log(service);

        fetch('http://localhost:5000/services', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Service Added')
                }
                form.reset();
                navigate('/')
            })
            .catch(error => console.error(error))
    }
    return (
        <div className='max-w-screen-xl mx-auto my-20'>
            <h3 className='text-xl text-red-2 font-bold my-5 text-center'>Add a new service</h3>
            <form className='w-full flex flex-col items-center' onSubmit={handleAddService}>
                <input className='border rounded-sm p-2 w-2/4' type="text" name="title" placeholder='Add service title' />
                <br />
                <input className='border rounded-sm p-2 w-2/4' type="text" name="img" placeholder='Add Image url' />
                <br />
                <input className='border rounded-sm p-2 w-2/4' type="text" name="desc" placeholder='Add service description' />
                <br />
                <input className='border rounded-sm p-2 w-2/4' type="text" name="price" placeholder='Add service Price' />
                <br />
                <button className='py-2 px-10 bg-blue-2  text-sm md:text-md text-white rounded-sm'>
                    Add Service
                </button>
            </form>
        </div>
    );
};

export default AddService;