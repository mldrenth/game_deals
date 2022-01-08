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
            <form onSubmit={handleSearchCommit}>
                <input
                    type="text"
                    placeholder="Search for game title..."
                    value={titleToSearch}
                    onChange={handleSearchTitleChange}
                     />
                <input
                    type="submit"
                    value="Search" />
            </form>
        </>
    )
}

export default GameDealsSearchForm