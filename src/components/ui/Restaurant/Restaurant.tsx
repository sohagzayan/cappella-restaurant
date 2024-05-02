"use client"
import React, { useState } from 'react'
import Summary from '../summary/Summary'
import HistoryTab from '../HistoryTab/HistoryTab'
import SearchFilterManager from '../SearchFilterManager/SearchFilterManager'
import TopPaginationSummary from '../TopPaginationSummary/TopPaginationSummary'
import Foods from '../Foods/Foods'
import { TablePagination } from '@mui/material'
import { useGetAllFoodQuery } from '@/redux/features/getFoods'




const Restaurant = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [activeHistoryTab, setActiveHistoryTab] = useState(0)
    const [searchQuery, setSearchQuery] = useState("")
    const [category, setCategory] = useState("all")
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(8);
    const {
        data: foods,
        isLoading: isGetLoading,
        isSuccess: isGetSuccess,
        isError: isGetError,
        isFetching,
        error: getError,
    } = useGetAllFoodQuery({ refetchOnMountOrArgChange: true })



    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0); // Reset page to 0 when rows per page changes
    };


    return (
        <div className=' h-16 mx-auto lg:container lg:px-16 xl:px-20 z-50 '>
            <Summary />
            <HistoryTab activeHistoryTab={activeHistoryTab} setActiveHistoryTab={setActiveHistoryTab}
                setCategory={setCategory}
                setSearchQuery={setSearchQuery}
            />
            <SearchFilterManager
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                category={category}
                setCategory={setCategory}
            />
            <Foods
                searchQuery={searchQuery}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                activeHistoryTab={activeHistoryTab}
                category={category}
                page={page}
                rowsPerPage={rowsPerPage}

            />
            {activeHistoryTab === 0 && <div className='flex items-center justify-center mb-20'>
                <TablePagination
                    className='text-white'
                    component="div"
                    count={foods?.length}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </div>}

        </div>
    )
}

export default Restaurant