"use client"
import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { FoodType } from '@/components/ui/Foods/Foods';
import { Button } from '@mui/material';
import { useRemoveFormTrashMutation } from '@/redux/features/trash';
import { toast } from 'sonner';
import { useAddFoodMutation } from '@/redux/features/getFoods';


interface TrashCardType {
    food: FoodType
}



const TrashCard = ({ food }: TrashCardType) => {

    const [removeFoodFromTrash, { isLoading }] = useRemoveFormTrashMutation()
    const [addFoodFromMainList] = useAddFoodMutation()

    const handleRemoveFormTrash = async () => {
        const res = await removeFoodFromTrash(food?.id)
        //@ts-ignore
        if (res?.data) {
            toast.success("Trash removed successfully")
        }
    }


    const handleRestorFormTrash = async () => {
        const res = await addFoodFromMainList({
            name: food?.name,
            category: food?.category,
            price: food?.price,
            description: food?.description,
            image: food?.image
        })
        //@ts-ignore
        if (res?.data) {
            toast.success("Successfully added this food on your food list ")
            await removeFoodFromTrash(food?.id)
        }
    }


    return (
        <Card sx={{ display: 'flex', bgcolor: "#161b22", }} className='text-light_white'>
            <Box >
                <div>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h6">
                            {food?.name}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div" className='text-light_white font-semibold text-[20px]'>
                            $ {food?.price}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div" className='text-light_white h-[80px] '>
                            {food?.description.slice(0, 120)} ...
                        </Typography>
                    </CardContent>
                </div>
                <div className='flex justify-center items-center'>
                    <div className='flex items-center gap-2 mb-3'>
                        <Button
                            onClick={handleRemoveFormTrash}
                            variant='contained' className='bg-red-600 hover:bg-red-600/90'>Remove</Button>
                        <Button
                            onClick={handleRestorFormTrash}
                            variant='contained' className='bg-primary hover:bg-primary/90'>Restore</Button>

                    </div>
                </div>
            </Box>

        </Card>)
}

export default TrashCard