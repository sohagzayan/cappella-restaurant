"use client"
import { SummaryCard } from '@/components/common'
import React from 'react'
import StorageIcon from '@mui/icons-material/Storage';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import DraftsIcon from '@mui/icons-material/Drafts';
import { useGetAllFoodQuery } from '@/redux/features/getFoods';
import { useGetFoodFromTrashQuery } from '@/redux/features/trash';
import { useGetFoodFromDraftQuery } from '@/redux/features/draft';



const Summary = () => {
    const { data: Trash } = useGetFoodFromTrashQuery({})
    const { data: Foods } = useGetAllFoodQuery({})
    const { data: Draft } = useGetFoodFromDraftQuery({})

    return (
        <div className='grid lg:grid-cols-2 xl:grid-cols-3 grid-cols-1 w-full items-center justify-center gap-10 mt-10'>
            <SummaryCard
                name="All Foods"
                value={Foods?.length}
                icon={
                    <StorageIcon
                        fontSize='large' />
                }
            />
            <SummaryCard
                name="Trash"
                value={Trash?.length}
                icon={
                    <DeleteSweepIcon
                        fontSize='large' />
                }
            />
            <SummaryCard
                name="Draft"
                value={Draft?.length}
                icon={
                    <DraftsIcon
                        fontSize='large' />
                }
            />
        </div>
    )
}

export default Summary