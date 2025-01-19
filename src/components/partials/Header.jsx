import React from 'react'
import { Link } from 'react-router-dom'

function Header({ data }) {
    return (
        <div
            style={{
                background: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.5), rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
            }}
            className='w-full h-[50vh] flex flex-col justify-end items-start p-[8%]'
        >

            <h1 className='w-[70%] text-5xl font-bold text-zinc-50'>
                {data.name ||
                    data.title ||
                    data.original_name ||
                    data.original_title}
            </h1>

            <p className='w-[70%] my-3 text-zinc-300 '>
                {data.overview.slice(0, 200)}
                ...<Link className="text-blue-400">more</Link>
            </p>

            <p className='text-zinc-100'>
                <i className="text-yellow-500 ri-megaphone-fill"></i>{" "}
                {data.release_date || "No Information"}
                <i className="text-yellow-500 ml-5 ri-movie-ai-fill"></i>{" "}
                {data.media_type.toUpperCase()}
            </p>

            <Link className='text-zinc-50 bg-[#6556CD] mt-3 px-5 py-3 rounded hover:bg-[#312775]'>
                Watch Trailer
            </Link>
        </div>
    )
}

export default Header