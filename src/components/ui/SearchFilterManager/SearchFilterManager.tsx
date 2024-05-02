import { Button } from '@mui/material'
import React from 'react'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import AddIcon from '@mui/icons-material/Add';

interface AddFoodModalType {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isOpen: boolean;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
    searchQuery: string;
    category: string;
    setCategory: React.Dispatch<React.SetStateAction<string>>;
}

const SearchFilterManager = ({
    setIsOpen, isOpen, setSearchQuery, searchQuery, setCategory, category }: AddFoodModalType) => {
    return (
        <div className='grid grid-cols-12 gap-3 w-full justify-center mt-6'>
            <div className='w-full lg:col-span-8 col-span-12'>
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
            <div className='flex items-center  gap-2  col-span-12 lg:col-span-4'>
                <Button onClick={() => setIsOpen(true)} variant='contained' className='inline-flex items-center gap-1 bg-gradient-primary px-4 capitalize'>
                    <AddIcon />  AddFood
                </Button>


                <select
                    value={category}
                    onChange={(e: any) => setCategory(e.target.value)}
                    name="" id="" className='block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted group bg-destructive-200 border border-destructive-500 focus:ring-destructive-400 placeholder:text-destructive-400 text-sm px-4 py-2'>
                    <option selected value='all' >Filter by category</option>
                    <option value="all">All</option>
                    <option value="appetizers">Appetizers</option>
                    <option value="soups">Soups</option>
                    <option value="salads">Salads</option>
                    <option value="sides">Sides</option>
                    <option value="desserts">Desserts</option>
                    <option value="beverages">Beverages</option>
                </select>

            </div>
        </div>
    )
}

export default SearchFilterManager