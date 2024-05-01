'use client'
import React from 'react'
import TrashCard from '@/components/common/trash-card'
import { useGetFoodFromTrashQuery } from '@/redux/features/trash'
import { FoodType } from '../Foods/Foods'
import { DraftCard } from '@/components/common'
import { useGetFoodFromDraftQuery } from '@/redux/features/draft'


interface DraftListType {
    searchQuery: string
}

const DraftList = ({ searchQuery }: DraftListType) => {
    const { data: Draft } = useGetFoodFromDraftQuery({})

    function searchFoodItems(query: string): FoodType[] {
        query = query.toLowerCase().trim(); // Convert query to lowercase and remove leading/trailing spaces
        return Draft?.filter((food: FoodType) => food.name.toLowerCase().includes(query));
    }

    const searchResults = searchFoodItems(searchQuery);


    return (
        <div className='grid grid-cols-3 gap-4'>
            {searchResults.map((food: FoodType) =>
                <DraftCard key={food.name} food={food} />
            )}
        </div>
    )
}

export default DraftList