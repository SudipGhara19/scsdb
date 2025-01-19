import React, { useEffect, useState } from 'react'
import SideNav from './partials/SideNav.jsx';
import TopNav from './partials/TopNav.jsx';
import axios from '../utils/axios.jsx';
import Header from './partials/Header.jsx';

function Home() {
    document.title = "SCSDB | Homepage";

    const [wallpaper, setWallpaper] = useState(null);

    const getHeaderWallpaper = async () => {
        try {

            const { data } = await axios.get(`/trending/all/day`);
            const randomData = data.results[(Math.random() * data.results.length).toFixed()];
            console.log(randomData)
            setWallpaper(randomData);

        } catch (error) {
            console.log("Error: " + error);
        }
    }

    console.log(wallpaper);

    useEffect(() => {
        !wallpaper && getHeaderWallpaper();
    }, [])

    return wallpaper ? (

        <>
            <SideNav />
            <div className='w-[80%] h-full '>
                <TopNav />
                <Header data={wallpaper} />
            </div>
        </>
    ) : <h1>Loading...</h1>
}

export default Home