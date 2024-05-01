'use client'
import TrashCard from '@/components/common/trash-card'
import { useGetFoodFromTrashQuery } from '@/redux/features/trash'
import React from 'react'
import { FoodType } from '../Foods/Foods'
import { StringXor } from 'next/dist/compiled/webpack/webpack'

interface TrashListType {
    searchQuery: string;
    category: string
}
const TrashList = ({ searchQuery, category }: TrashListType) => {
    const { data: Trash } = useGetFoodFromTrashQuery({})


    const filterFoodItemsByCategory = (category: string): FoodType[] => {
        if (category === "all") {
            return Trash; // Return all items if category is "all"
        } else {
            return Trash?.filter((food: FoodType) => food.category.toLowerCase() === category.toLowerCase());
        }
    }


    function searchFoodItems(query: string): FoodType[] {
        query = query.toLowerCase().trim(); // Convert query to lowercase and remove leading/trailing spaces
        const filteredItems = filterFoodItemsByCategory(category);
        return filteredItems?.filter((food: FoodType) => food.name.toLowerCase().includes(query));
    }

    const searchResults = searchFoodItems(searchQuery);




    return (
        <div className='mt-10 grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-3 gap-5'>
            {searchResults?.map((food: FoodType) =>
                <TrashCard key={food.name} food={food} />
            )}
        </div>
    )
}

export default TrashList