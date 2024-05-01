import { Button } from '@mui/material'
import React from 'react'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';


interface AddFoodModalType {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isOpen: boolean;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
    searchQuery: string
}

const SearchFilterManager = ({ setIsOpen, isOpen, setSearchQuery, searchQuery }: AddFoodModalType) => {
    return (
        <div className='flex items-center gap-3 w-full justify-center mt-6'>
            <div className='w-full'>
                <input
                    value={searchQuery}
                    onChange={(e: any) => setSearchQuery(e.target.value)}
                    data-size="medium"
                    id="search"
                    name="search"
                    placeholder="Search"
                    type="email"
                    className=" block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted group bg-destructive-200 border border-destructive-500 focus:ring-destructive-400 placeholder:text-destructive-400 text-sm px-4 py-2"
                />
            </div>
            <div className='flex items-center  gap-2 '>
                <Button onClick={() => setIsOpen(true)} variant='contained' className='inline-flex items-center gap-1 bg-gradient-primary capitalize'>
                    <FilterAltOutlinedIcon />
                    AddFood
                </Button>

                <Button variant='contained' className='flex items-center gap-1 bg-gradient-primary capitalize'>
                    <FilterAltOutlinedIcon />
                    Filter
                    <ExpandMoreOutlinedIcon />
                </Button>

            </div>
        </div>
    )
}

export default SearchFilterManager