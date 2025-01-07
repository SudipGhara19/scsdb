import React from 'react'
import SideNav from './partials/SideNav';

function Home() {
    document.title = "SCSDB | Homepage";

    return (

        <>
            <SideNav />
            <div className='w-[80%] h-full bg-red-500'></div>
        </>
    )
}

export default Home