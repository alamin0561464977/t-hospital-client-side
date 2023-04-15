import React from 'react';

const OurDoctors = () => {
    return (
        <div>
            <section className=' container mx-auto m-10'>
                <header className=' text-center p-5 lg:p-12'>
                    <h1 className='text-4xl font-bold border-b-4'>Our Doctors</h1>
                    <p className='mt-3 font-bold'>Our doctors are specialized in their field and have more than 10 years of experiences.</p>
                </header>
                <main className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    <div className="card card-compact bg-base-100 shadow-xl">
                        <figure><img src="https://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2016/04/veronica-280x280.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Nephrologist Care</h2>
                            <p>Tell me why, I love you like I do. Tell me who, could stop my heart...</p>
                        </div>
                    </div>
                    <div className="card card-compact bg-base-100 shadow-xl">
                        <figure><img src="https://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2016/04/Dr-Kathirnia-280x280.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Eye Care</h2>
                            <p>Well we're movin' on up, to the east side. To a deluxe apartment in the sky....</p>
                        </div>
                    </div>
                    <div className="card card-compact bg-base-100 shadow-xl">
                        <figure><img src="https://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2016/04/doctor-tahu-bulat-280x280.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Pediatrician Clinic</h2>
                            <p>My kinda people, my kinda place. There's something special about this place. Got no reason to...</p>
                        </div>
                    </div>
                    <div className="card card-compact bg-base-100 shadow-xl">
                        <figure><img src="https://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2016/04/pediactirc-Doctors-e1460536658595-400x400.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Prenatal Care</h2>
                            <p>In an age when nature and magic rule the world, there is an extraordinary legend: the...</p>
                        </div>
                    </div>
                </main>
            </section>
        </div>
    );
};

export default OurDoctors;