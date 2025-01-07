import React from 'react'
import { Link } from 'react-router-dom'

function SideNav() {
    return (
        <div className='w-[20%] h-full border-r-2 border-zinc-400 p-10'>
            <h1 className='text-3xl font-bold'>
                <i className="text-[#6556CD] px-2 ri-tv-fill"></i>
                SCSDB
            </h1>

            {/* NEW FEED */}
            <nav className='flex flex-col text-zinc-400 text-xl gap-3'>
                <h1 className='text-zinc-100 font-semibold text-xl  mt-10 ml-5'>
                    New Feeds
                </h1>

                <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
                    <i class="ri-fire-fill mr-2"></i>
                    Trending
                </Link>
                <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
                    <i class="ri-bard-fill mr-2"></i>
                    Popular
                </Link>
                <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
                    <i class="ri-movie-fill mr-2"></i>
                    Movies
                </Link>
                <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
                    <i class="ri-slideshow-3-line mr-2"></i>
                    TV Shows
                </Link>
                <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
                    <i class="ri-group-fill mr-2"></i>
                    People
                </Link>
            </nav>

            <hr className='border-none h-[1px] bg-zinc-400 my-2' />

            {/* SITEMAPS */}
            <nav className='flex flex-col text-zinc-400 text-xl gap-3'>
                <h1 className='text-zinc-100 font-semibold text-xl  mt-10 ml-5'>
                    Website Information
                </h1>

                <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
                    <i class="ri-information-fill mr-2"></i>
                    About SCSDB
                </Link>
                <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
                    <i class="ri-phone-fill mr-2"></i>
                    Contact Us
                </Link>
            </nav>
        </div>
    )
}

export default SideNav