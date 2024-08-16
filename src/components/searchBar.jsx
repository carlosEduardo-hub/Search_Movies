import { useState } from 'react';
import { Clapperboard, ChevronLeft, Slash, ChevronRight } from "lucide-react";

// eslint-disable-next-line react/prop-types
function SearchBar({ onSearch }) {
    const [query, setQuery] = useState('');
    const [year, setYear] = useState('');
    


    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch({ query, year });
        setQuery('')
        setYear('')
    };

    return (
        <div className='w-full flex justify-evenly'>
            <div className='flex py-6 items-center space-x-3'>
                <ChevronLeft color="#dbe6dc" className='size-20' />
                <Clapperboard color="#07f223" className='size-20' />
                <h1 className='font-bold text-3xl text-red-700'>SEARCH MOVIES</h1>
                <div className='flex'>
                    <Slash color="#dbe6dc" className='size-20' />
                    <ChevronRight color="#dbe6dc" className='size-20' />
                </div>
            </div>

            <div className='py-6'>
                <form onSubmit={handleSubmit} className='py-6 space-x-2'>
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search for a movie..."
                        className="bg-zinc-300 text-zinc-600 text-lg py-1 font-medium placeholder-zinc-600 outline-none rounded"
                    />

                    <input
                        type="text"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        placeholder="Year(optional)"
                        className="bg-zinc-300 text-lg text-zinc-600 py-1 font-medium  placeholder-zinc-600 outline-none rounded"
                    />

                    <button type="submit" className="bg-lime-400 text-lime-950 rounded px-5 py-1 font-medium text-lg   hover:bg-lime-500">Search</button>
                </form>
            </div>

        </div>

    );
}

export default SearchBar;
