"use client"
import { useGetFoodFromDraftQuery } from '@/redux/features/draft'
import { useGetAllFoodQuery } from '@/redux/features/getFoods'
import { useGetFoodFromTrashQuery } from '@/redux/features/trash'
import { Button } from '@mui/material'
import React, { useState } from 'react'

const activeTabClass = "border-secondary  hover:bg-secondary hover:text-white  bg-secondary text-white hover:border-secondary capitalize"

const regularTabClass = "border-secondary text-secondary hover:text-secondary hover:border-secondary capitalize"

const HistoryTab = () => {
    const [activeTab, setActiveTab] = useState(0)
    const { data: Foods } = useGetAllFoodQuery({})
    const { data: Trash } = useGetFoodFromTrashQuery({})
    const { data: draft } = useGetFoodFromDraftQuery({})



    return (
        <ul className='text-white flex items-center gap-5 mt-10 flex-wrap '>
            <li>
                <Button variant={activeTab === 0 ? 'contained' : 'outlined'} className={activeTab === 0 ? activeTabClass : regularTabClass}>All - {Foods?.length}</Button>
            </li>
            <li>
                <Button variant={activeTab === 1 ? 'contained' : 'outlined'} className={activeTab === 1 ? activeTabClass : regularTabClass}>Trash - {Trash?.length}</Button>
            </li>
            <li>
                <Button variant={activeTab === 2 ? 'contained' : 'outlined'} className={activeTab === 2 ? activeTabClass : regularTabClass}>Draft - {draft?.length}</Button>
            </li>
        </ul>
    )
}

export default HistoryTab