'use client'
import React from 'react'
import TrashCard from '@/components/common/trash-card'
import { useGetFoodFromTrashQuery } from '@/redux/features/trash'
import { FoodType } from '../Foods/Foods'
import { DraftCard } from '@/components/common'
import { useGetFoodFromDraftQuery } from '@/redux/features/draft'


interface DraftListType {
    searchQuery: string;
    category: string
}

const DraftList = ({ searchQuery, category }: DraftListType) => {
    const { data: Draft } = useGetFoodFromDraftQuery({})


    const filterFoodItemsByCategory = (category: string): FoodType[] => {
        if (category === "all") {
            return Draft; // Return all items if category is "all"
        } else {
            return Draft?.filter((food: FoodType) => food.category.toLowerCase() === category.toLowerCase());
        }
    }


    function searchFoodItems(query: string): FoodType[] {
        query = query.toLowerCase().trim();
        const filteredItems = filterFoodItemsByCategory(category);
        return filteredItems?.filter((food: FoodType) => food.name.toLowerCase().includes(query));
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