import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddService = () => {
    // Creating toast function
    const notify = () => toast("Service Added Successfully");
    // Error message initial value set
    const [errorMsg, setErrorMsg] = useState('');
    // Handle add service form
    const handleAddService = event => {
        event.preventDefault();
        setErrorMsg('');
        // Get Data from form
        const form = event.target;
        const title = form.title.value;
        const img = form.img.value;
        const desc = form.desc.value;
        const price = form.price.value;
        const service = { title, img, desc, price }
        if (title && img && desc && price) {
            // Send service data to the server
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
                        // if data send successfull then call toast function 
                        notify()
                    }
                    form.reset();
                })
                .catch(error => console.error(error))
        } else {
            setErrorMsg('Please fill all the input field.')
        }

    }
    return (
        <div className='max-w-screen-xl mx-auto my-20'>
            <h3 className='text-xl text-red-2 font-bold my-5 text-center'>Add a new service</h3>
            {/* Addservice form  */}
            <form className='w-full flex flex-col items-center' onSubmit={handleAddService}>
                <input className='border rounded-sm p-2 w-2/4' type="text" name="title" placeholder='Add service title' />
                <br />
                <input className='border rounded-sm p-2 w-2/4' type="text" name="img" placeholder='Add Image url' />
                <br />
                <input className='border rounded-sm p-2 w-2/4' type="text" name="desc" placeholder='Add service description' />
                <br />
                <input className='border rounded-sm p-2 w-2/4' type="text" name="price" placeholder='Add service Price' />
                <br />
                <p className='text-2xl font-bold text-red-600 text-center mb-2'>{errorMsg}</p>
                <button
                    className='py-2 px-10 bg-blue-2  text-sm md:text-md text-white rounded-sm'>
                    Add Service
                </button>
                {/* Set position for toast function */}
                < ToastContainer />
            </form>
        </div>
    );
};

export default AddService;