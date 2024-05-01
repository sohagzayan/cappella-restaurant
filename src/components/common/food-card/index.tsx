"use client"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import { useState } from "react"
import axios from 'axios';
import { revalidateTag } from 'next/cache'
import { foodAction } from '@/action/food';
import { FoodType } from '@/components/ui/Foods/Foods';
import { useDeleteFoodMutation } from '@/redux/features/getFoods';
import Loader from '../loader';
import AddFoodModal from '@/components/ui/AddFoodModal/AddFoodModal';


interface FoodCardType {
    food: FoodType
}

export default function FoodCard({ food }: FoodCardType) {
    const [deleteFood] = useDeleteFoodMutation()
    const [isOpen, setIsOpen] = useState(false)

    const handleDeleteFood = () => {
        deleteFood(food.id)
    }



    return (
        <>
            <AddFoodModal isOpen={isOpen} setIsOpen={setIsOpen} initialValue={{ name: food.name, price: food.price, category: food.category, description: food.description, id: food.id }} />

            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <div className='relative after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-black/0 after:z-50 group hover:after:bg-black/40 after:transition-all after:ease-in-out after:duration-200'>
                        <CardMedia
                            className=''
                            component="img"
                            height="120"
                            image="/assets/images/food.jpg"
                            alt="green iguana"
                        />
                        <div className='text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-300%] transform group-hover:translate-y-[-50%] transition-all  ease-in-out duration-300 '>
                            <div className='relative bg-black/80 w-16 h-16 flex items-center justify-center '>
                                <OpenInFullIcon />
                            </div>
                        </div>
                    </div>

                </CardActionArea>
                <CardContent>
                    <Typography component="div" className='flex  gap-2 justify-between'>
                        <Typography variant="h5" component="div" className='font-semibold'>
                            {food.name}
                        </Typography>
                        <Typography variant="h5" component="div" className='font-semibold'>
                            ${food?.price}
                        </Typography>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {food?.description}
                    </Typography>
                    <div className='flex items-center gap-4 mt-3' >
                        <Button
                            onClick={() => setIsOpen(true)}
                            variant='contained'
                            className='text-white hover:bg-primary/95 bg-primary'>Edit</Button>
                        <Button onClick={handleDeleteFood} variant='outlined' className='border-red-500 text-red-500 hover:border-red-500 capitalize'>
                            Delete
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </>
    );
}