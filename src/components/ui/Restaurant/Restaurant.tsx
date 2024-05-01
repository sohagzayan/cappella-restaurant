"use client"
import React, { useState } from 'react'
import Summary from '../summary/Summary'
import HistoryTab from '../HistoryTab/HistoryTab'
import SearchFilterManager from '../SearchFilterManager/SearchFilterManager'
import TopPaginationSummary from '../TopPaginationSummary/TopPaginationSummary'
import Foods from '../Foods/Foods'
import { TablePagination } from '@mui/material'




const Restaurant = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [activeHistoryTab, setActiveHistoryTab] = useState(0)
    const [searchQuery, setSearchQuery] = useState("")
    let page = 3
    let rowsPerPage = 5
    const handleChangeRowsPerPage = () => {

    }
    const handleChangePage = () => {

    }
    return (
        <div className=' h-16 mx-auto lg:container lg:px-16 xl:px-20 z-50'>
            <Summary />
            <HistoryTab activeHistoryTab={activeHistoryTab} setActiveHistoryTab={setActiveHistoryTab} />
            <SearchFilterManager isOpen={isOpen} setIsOpen={setIsOpen} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <TopPaginationSummary />
            <Foods searchQuery={searchQuery} isOpen={isOpen} setIsOpen={setIsOpen} activeHistoryTab={activeHistoryTab} />
            <TablePagination
                className='text-white'
                component="div"
                count={100}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </div>
    )
}

export default Restaurant