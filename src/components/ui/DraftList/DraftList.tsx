'use client'
import React from 'react'
import TrashCard from '@/components/common/trash-card'
import { useGetFoodFromTrashQuery } from '@/redux/features/trash'
import { FoodType } from '../Foods/Foods'
import { DraftCard } from '@/components/common'

const DraftList = () => {
    const { data: Trash } = useGetFoodFromTrashQuery({})

    return (
        <div className='grid grid-cols-3 gap-4'>
            {Trash.map((food: FoodType) =>
                <DraftCard key={food.name} food={food} />
            )}
        </div>
    )
}

export default DraftList