import React, { useEffect, useState } from 'react';

const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('events.json')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])
    return (
        <div>
            <header className='Events py-14'>
                <h1 className=' text-5xl ml-10 font-bold text-[#1565c0]'>Events Page</h1>
            </header>
            <main className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 container mx-auto my-8'>
                {
                    events.map(event => <div>
                        <img className=' w-full px-4' src={event.image} alt="" />
                        <div className='p-4'>
                            <h1 className=' text-[#1565c0] font-bold text-2xl'>{event.title}</h1>
                            <p className='font-bold'>{event.description}</p>
                        </div>
                    </div>)
                }
            </main>
        </div>
    );
};

export default Events;