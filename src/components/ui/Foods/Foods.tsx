"use client"
import { FoodCard } from '@/components/common'
import { useGetAllFoodQuery } from '@/redux/features/getFoods';
import React from 'react'

export interface FoodType {
    id: string,
    name: string;
    image: string,
    price: string,
    category: string,
    description: string,
    createdAt: string
}


const Foods = () => {
    const {
        data: foods,
        isLoading: isGetLoading,
        isSuccess: isGetSuccess,
        isError: isGetError,
        isFetching,
        error: getError,
    } = useGetAllFoodQuery({ refetchOnMountOrArgChange: true })
    let postContent



    if (isFetching) {
        postContent = (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    } else if (isGetSuccess) {
        postContent = foods.map((food: FoodType) => {
            return <FoodCard food={food} key={food.id} />
        })
    } else if (isGetError) {
        postContent = (
            <div className="alert alert-danger" role="alert">
                {/* {getError} */}
            </div>
        )
    }


    console.log("data >>>", foods)
    return (
        <div className='mt-10 grid grid-cols-4 gap-5'>
            {foods?.map((food: FoodType) => <FoodCard key={food.id + food.name} food={food} />
            )}
            {/* {postContent} */}
        </div>
    )
}

export default Foods