'use client'
import TrashCard from '@/components/common/trash-card'
import { useGetFoodFromTrashQuery } from '@/redux/features/trash'
import React from 'react'
import { FoodType } from '../Foods/Foods'

const TrashList = () => {
    const { data: Trash } = useGetFoodFromTrashQuery({})

    return (
        <div className='grid grid-cols-3 gap-4'>
            {Trash.map((food: FoodType) =>
                <TrashCard key={food.name} food={food} />
            )}
        </div>
    )
}

export default TrashList