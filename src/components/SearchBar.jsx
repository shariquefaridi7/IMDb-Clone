"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

const SearchBar = () => {
    const [search, setSearch] = useState('');
    const router = useRouter()
    const handleSubmit = (e) => {
        e.preventDefault();
        router.push(`/search/${search}`)
    }

    return (
        <div className="flex justify-between px-5 max-w-6xl mx-auto">
            <input type='text' placeholder='Search keywords...' className='w-full h-14 rounded-md placeholder:-gray-500 outline-none bg-transparent flex'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button className='text-amber-600 disabled:text-gray-400' disabled={!search} onClick={handleSubmit}> Search</button>
        </div>
    )
}

export default SearchBar
