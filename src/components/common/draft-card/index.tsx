import React from 'react'
import { useTheme } from '@mui/material/styles';
import { FoodType } from '@/components/ui/Foods/Foods';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';

interface DraftCardType {
    food: FoodType
}

const DraftCard = ({ food }: DraftCardType) => {
    return (
        <Card sx={{ maxWidth: 345 }} className='relative '>
            <CardActionArea className='relative after:bg-black/50 after:top-0 after:left-0 after:absolute after:w-full after:h-full'>
                <CardMedia
                    component="img"
                    height="140"
                    image={food?.image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {food?.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {food?.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <div className='p-2 flex items-center gap-3'>
                <Button variant='contained' className='bg-red-600 hover:bg-red-600/90'>Delete</Button>
                <Button variant='contained' className='bg-primary hover:bg-primary/90'>Restore</Button>

            </div>
        </Card>
    )
}

export default DraftCard