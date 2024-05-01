import { FoodCard } from '@/components/common'
import React from 'react'

const Foods = () => {
    return (
        <div className='mt-10 grid grid-cols-4 gap-5'>
            <FoodCard />
            <FoodCard />

            <FoodCard />

            <FoodCard />

            <FoodCard />
            <FoodCard />
            <FoodCard />


        </div>
    )
}

export default Foods