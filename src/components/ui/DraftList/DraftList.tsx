'use client'
import React from 'react'
import TrashCard from '@/components/common/trash-card'
import { useGetFoodFromTrashQuery } from '@/redux/features/trash'
import { FoodType } from '../Foods/Foods'
import { DraftCard } from '@/components/common'
import { useGetFoodFromDraftQuery } from '@/redux/features/draft'

const DraftList = () => {
    const { data: Draft } = useGetFoodFromDraftQuery({})

    return (
        <div className='grid grid-cols-3 gap-4'>
            {Draft.map((food: FoodType) =>
                <DraftCard key={food.name} food={food} />
            )}
        </div>
    )
}

export default DraftList