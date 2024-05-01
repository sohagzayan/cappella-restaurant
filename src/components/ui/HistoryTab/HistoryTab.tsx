"use client"
import { useGetFoodFromDraftQuery } from '@/redux/features/draft'
import { useGetAllFoodQuery } from '@/redux/features/getFoods'
import { useGetFoodFromTrashQuery } from '@/redux/features/trash'
import { Button } from '@mui/material'
import React, { useState } from 'react'

const activeTabClass = "border-secondary  hover:bg-secondary hover:text-white  bg-secondary text-white hover:border-secondary capitalize"

const regularTabClass = "border-secondary text-secondary hover:text-secondary hover:border-secondary capitalize"


interface HistoryTab {
    activeHistoryTab: number;
    setActiveHistoryTab: (activeHistoryTab: number) => void;
}

const HistoryTab = ({ activeHistoryTab, setActiveHistoryTab }: HistoryTab) => {

    // const [activeTab, setActiveTab] = useState(0)
    const { data: Foods } = useGetAllFoodQuery({})
    const { data: Trash } = useGetFoodFromTrashQuery({})
    const { data: draft } = useGetFoodFromDraftQuery({})



    return (
        <ul className='text-white flex items-center gap-5 mt-10 flex-wrap '>
            <li>
                <Button
                    onClick={() => setActiveHistoryTab(0)}
                    variant={activeHistoryTab === 0 ? 'contained' : 'outlined'} className={activeHistoryTab === 0 ? activeTabClass : regularTabClass}>All - {Foods?.length}</Button>
            </li>
            <li>
                <Button
                    onClick={() => setActiveHistoryTab(1)}
                    variant={activeHistoryTab === 1 ? 'contained' : 'outlined'} className={activeHistoryTab === 1 ? activeTabClass : regularTabClass}>Trash - {Trash?.length}</Button>
            </li>
            <li>
                <Button
                    onClick={() => setActiveHistoryTab(2)}
                    variant={activeHistoryTab === 2 ? 'contained' : 'outlined'} className={activeHistoryTab === 2 ? activeTabClass : regularTabClass}>Draft - {draft?.length}</Button>
            </li>
        </ul>
    )
}

export default HistoryTab