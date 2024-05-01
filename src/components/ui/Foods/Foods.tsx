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
    searchQuery: string
}



const Foods = ({ isOpen, setIsOpen, activeHistoryTab, searchQuery }: AddFoodModalType) => {
    const {
        data: foods,
        isLoading: isGetLoading,
        isSuccess: isGetSuccess,
        isError: isGetError,
        isFetching,
        error: getError,
    } = useGetAllFoodQuery({ refetchOnMountOrArgChange: true })
    let postContent


    function searchFoodItems(query: string): FoodType[] {
        query = query.toLowerCase().trim(); // Convert query to lowercase and remove leading/trailing spaces
        return foods?.filter((food: FoodType) => food.name.toLowerCase().includes(query));
    }

    const searchResults = searchFoodItems(searchQuery);



    console.log("searchResults >>>", searchResults)
    return (
        <>
            <AddFoodModal isOpen={isOpen} setIsOpen={setIsOpen} />
            <div>
                <div className='mt-10 grid grid-cols-4 gap-5'>
                    {activeHistoryTab === 0 && searchResults?.map((food: FoodType) => <FoodCard key={food.id + food.name} food={food} />
                    )}
                </div>
                {activeHistoryTab === 1 && <TrashList searchQuery={searchQuery} />}

                {activeHistoryTab === 2 && <DraftList searchQuery={searchQuery} />}
            </div>
        </>
    )
}

export default Foods