import React from 'react';

const BookAppointment = () => {
    return (
        <div className='p-10 lg:p-28 text-white bg-[#1565c0]'>
            <section>
                <h1 className=' text-2xl font-bold border-b-2 py-2'>Book Appointment</h1>
                <div className=' pt-10 grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    <div>
                        <label className=' font-bold' htmlFor="Department's Name">Department's Name</label><br />
                        <select className="select text-[#1565c0] font-bold text-lg select-primary w-full max-w-xs">
                            <option className=' font-bold py-1' disabled selected>Select Department</option>
                            <option className=' font-bold py-1'>Cardiology</option>
                            <option className=' font-bold py-1'>Dental</option>
                            <option className=' font-bold py-1'>Neurologist</option>
                            <option className=' font-bold py-1'>Pediatric</option>
                        </select>
                    </div>
                    <div>
                        <label className=' font-bold'>Patient Name</label><br />
                        <input type="text" placeholder="Type here" className="input input-bordered input-primary text-[#1565c0] font-bold text-lg w-full max-w-xs" />
                    </div>
                    <div>
                        <label className=' font-bold'>Phone Number</label><br />
                        <input type="number" placeholder="Type here" className="input input-bordered input-primary text-[#1565c0] font-bold text-lg w-full max-w-xs" />
                    </div>
                    <div>
                        <label className=' font-bold'>Email Address</label><br />
                        <input type="email" placeholder="Type here" className="input input-bordered input-primary text-[#1565c0] font-bold text-lg w-full max-w-xs" />
                    </div>
                    <div>
                        <label className=' font-bold'>Choose Date</label><br />
                        <input type="date" placeholder="Type here" className="input input-bordered input-primary text-[#1565c0] font-bold text-lg w-full max-w-xs" />
                    </div>
                    <div>
                        <label className=' font-bold'>Patient Age</label><br />
                        <input type="number" placeholder="Type here" className="input input-bordered input-primary text-[#1565c0] font-bold text-lg w-full max-w-xs" />
                    </div>
                    <div>
                        <label className=' font-bold'>Patient Gender</label><br />
                        <div className=' flex gap-3 mt-3'>
                            <div className='flex gap-1 item-center'>
                                <label className=' font-bold'>Male</label>
                                <input type="radio" name="radio-1" className="radio  radio-warning" checked />
                            </div>
                            <div className=' flex gap-3 '>
                                <label className=' font-bold'>Female</label>
                                <input type="radio" name="radio-1" className="radio  radio-warning" checked />
                            </div>
                        </div>
                    </div>
                    <button className="btn font-bold text-lg mt-4">Submit from</button>
                </div>
                <h1 className='mt-10 text-center'>Please fill out all of the fields correctly. Your records will be saved in our database securely.</h1>
            </section>
        </div>
    );
};

export default BookAppointment;