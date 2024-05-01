'use client'
import TrashCard from '@/components/common/trash-card'
import { useGetFoodFromTrashQuery } from '@/redux/features/trash'
import React from 'react'
import { FoodType } from '../Foods/Foods'
import { StringXor } from 'next/dist/compiled/webpack/webpack'

interface TrashListType {
    searchQuery: string
}
const TrashList = ({ searchQuery }: TrashListType) => {
    const { data: Trash } = useGetFoodFromTrashQuery({})


    function searchFoodItems(query: string): FoodType[] {
        query = query.toLowerCase().trim(); // Convert query to lowercase and remove leading/trailing spaces
        return Trash?.filter((food: FoodType) => food.name.toLowerCase().includes(query));
    }

    const searchResults = searchFoodItems(searchQuery);




    return (
        <div className='grid grid-cols-3 gap-4'>
            {searchResults?.map((food: FoodType) =>
                <TrashCard key={food.name} food={food} />
            )}
        </div>
    )
}

export default TrashList