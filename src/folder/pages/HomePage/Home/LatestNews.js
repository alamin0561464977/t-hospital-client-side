import React from 'react';

const LatestNews = () => {
    return (
        <div>
            <section className=' container mx-auto m-10'>
                <header className=' text-center p-5 lg:p-12'>
                    <h1 className='text-4xl font-bold border-b-4'>Latest News</h1>
                    <p className='mt-3 font-bold'>Latest up-to-date information from our public relation department.</p>
                </header>
                <main className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    <div className="card card-compact bg-base-100 shadow-xl">
                        <figure><img src="https://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2016/04/Great-Team-280x215.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Together we can do so...</h2>
                            <p>Chosen from among all others by the Immortal Elders - Solomon, Hercules, Atlas, Zeus, Achilles, Mercury...</p>
                        </div>
                    </div>
                    <div className="card card-compact bg-base-100 shadow-xl">
                        <figure><img src="https://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2016/04/Our-Profesional-Doctor-280x215.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">The Three Musketeers Surgical Team</h2>
                            <p>One thousand years ago, superstition and the sword ruled. It was a time of darkness. It...</p>
                        </div>
                    </div>
                    <div className="card card-compact bg-base-100 shadow-xl">
                        <figure><img src="https://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2016/04/Operation-Facilities-280x215.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Accredited surgical facility
                            </h2>
                            <p>Since the dawn of time, there has been a process to developing web presentations - you...</p>
                        </div>
                    </div>
                    <div className="card card-compact bg-base-100 shadow-xl">
                        <figure><img src="https://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2016/04/Check-your-Baby-280x215.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Health checks for babies</h2>
                            <p>Somewhere out in space live The Herculoids! Zok, the laser-ray dragon! Igoo, the giant rock ape!...</p>
                        </div>
                    </div>
                </main>
            </section>
        </div>
    );
};

export default LatestNews;