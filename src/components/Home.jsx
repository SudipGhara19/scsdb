import React from 'react'
import SideNav from './partials/SideNav.jsx';
import TopNav from './partials/TopNav.jsx';

function Home() {
    document.title = "SCSDB | Homepage";

    return (

        <>
            <SideNav />
            <div className='w-[80%] h-full '>
                <TopNav />
            </div>
        </>
    )
}

export default Home