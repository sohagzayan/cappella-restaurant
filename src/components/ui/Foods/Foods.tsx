"use client"
import { FoodCard } from '@/components/common'
import { useGetAllFoodQuery } from '@/redux/features/getFoods';
import React, { useState } from 'react'
import AddFoodModal from '../AddFoodModal/AddFoodModal';
import DraftList from '../DraftList/DraftList';
import TrashList from '../TrashList/TrashList';

export interface FoodType {
    id: string,
    name: string;
    image: string,
    price: string,
    category: string,
    description: string,
    createdAt: string
}


interface AddFoodModalType {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isOpen: boolean;
    activeHistoryTab: number;
    searchQuery: string;
    category: string;
    rowsPerPage: number;
    page: number;
}



const Foods = ({ isOpen, setIsOpen, activeHistoryTab, searchQuery, category, rowsPerPage, page }: AddFoodModalType) => {
    const {
        data: foods,
        isLoading: isGetLoading,
        isSuccess: isGetSuccess,
        isError: isGetError,
        isFetching,
        error: getError,
    } = useGetAllFoodQuery({ refetchOnMountOrArgChange: true })


    const filterFoodItemsByCategory = (category: string): FoodType[] => {
        const startIndex = page * rowsPerPage;
        const endIndex = startIndex + rowsPerPage;

        if (category === "all") {
            return foods?.slice(startIndex, endIndex);
        } else {
            return foods
                .filter((food: FoodType) => food.category.toLowerCase() === category.toLowerCase())
                .slice(startIndex, endIndex);
        }
    }

    function searchFoodItems(query: string): FoodType[] {
        query = query.toLowerCase().trim(); // Convert query to lowercase and remove leading/trailing spaces
        const filteredItems = filterFoodItemsByCategory(category);
        return filteredItems?.filter((food: FoodType) => food.name.toLowerCase().includes(query));
    }

    const searchResults = searchFoodItems(searchQuery);



    console.log("searchResults >>>", searchResults)
    return (
        <>
            <AddFoodModal isOpen={isOpen} setIsOpen={setIsOpen} />
            <div>
                <div className='mt-10 grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-3 gap-5'>
                    {activeHistoryTab === 0 && searchResults?.map((food: FoodType) => <FoodCard key={food.id + food.name} food={food} />
                    )}
                </div>
                {activeHistoryTab === 1 && <TrashList searchQuery={searchQuery} category={category} />}

                {activeHistoryTab === 2 && <DraftList searchQuery={searchQuery} category={category} />}
            </div>
        </>
    )
}

export default Foods