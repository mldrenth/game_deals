import React, {useState} from 'react';

const GameDealsSearchForm = ({ onTitleSearch }) => {
    const [titleToSearch, setTitleToSearch] = useState("")

    const handleSearchTitleChange = (event) => {
        setTitleToSearch(event.target.value)
    }


    const handleSearchCommit = (event) => {
        event.preventDefault()
        onTitleSearch(titleToSearch)
    }

    return (
        <>
            <form className="flex gap-5 p-5" onSubmit={handleSearchCommit}>
                <input className=" text-center appearance-none rounded-none relative block  px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                    type="text"
                    placeholder="Search for game title..."
                    value={titleToSearch}
                    onChange={handleSearchTitleChange}
                     />
                <input
                className="px-6 py-3 text-left text-xs font-medium text-slate-50 uppercase tracking-wider bg-orange-500 rounded cursor-pointer"
                    type="submit"
                    value="Search" />
            </form>
        </>
    )
}

export default GameDealsSearchForm