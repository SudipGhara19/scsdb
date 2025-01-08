import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function TopNav() {

    const [query, setQuery] = useState("");

    const deleteQuery = () => {
        setQuery("");
    }

    return (
        <div className='w-full h-[10vh] relative flex justify-start items-center ml-[15%]'>

            <i className="text-zinc-400 text-4xl ri-search-2-line"></i>

            <input className='w-[45%] border-[1px] rounded-full border-zinc-400 bg-transparent outline-none text-zinc-200 mx-10 py-2 px-5 text-xl'
                onChange={(e) => setQuery(e.target.value)}
                value={query}
                type="text"
                placeholder='search here'
            />
            {query !== "" && <i onClick={deleteQuery} class="text-zinc-400 text-3xl ri-close-fill"></i>}

            <div className='absolute w-[45%] max-h-[50vh] bg-zinc-200 top-[90%] overflow-auto '>
                {/* <Link className=' hover:text-zinc-900 hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100 '>
                    <img src="" alt="" />
                    <span>Hello Everyone</span>
                </Link> */}
            </div>

        </div>
    )
}

export default TopNav