import { cn } from '@/utils/config'
import React from 'react'

const Button = () => {
    return (
        <button
            className={cn("relative justify-center cursor-pointer items-center space-x-2 text-center ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1  bg-primary/80 hover:bg-brand-button/80 border border-primary focus-visible:outline-brand-600 shadow-sm   text-xs px-2.5 py-1 h-[26px] hidden text-white lg:block")}
        >
            Create new restaurant
        </button>
    )
}

export default Button