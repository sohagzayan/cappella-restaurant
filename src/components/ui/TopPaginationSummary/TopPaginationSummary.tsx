import React from 'react'

const TopPaginationSummary = () => {
    return (
        <div className='text-light_white flex justify-between items-center mt-4'>
            <div>
                <p>Showing 1-10 of 137 results</p>
            </div>
            <div className='flex items-center gap-4'>
                <p>Result par page</p>
                <select name="" id="" className='text-black'>
                    <option value="5">5</option>
                    <option value="10">10</option>
                </select>
            </div>

        </div>
    )
}

export default TopPaginationSummary