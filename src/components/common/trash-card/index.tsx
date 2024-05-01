import React from 'react'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { FoodType } from '@/components/ui/Foods/Foods';
import Image from 'next/image';
import { Button } from '@mui/material';


interface TrashCardType {
    food: FoodType
}

const TrashCard = ({ food }: TrashCardType) => {
    return (
        <Card sx={{ display: 'flex', bgcolor: "#161b22", }} className='text-light_white'>
            <Box >
                <div>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            {food?.name}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div" className='text-light_white font-semibold text-[20px]'>
                            $ {food?.price}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div" className='text-light_white '>
                            {food?.description}
                        </Typography>
                    </CardContent>
                </div>
                <div className='flex justify-center items-center'>
                    <div className='flex items-center gap-2 mb-3'>
                        <Button variant='contained' className='bg-red-600 hover:bg-red-600/90'>Remove</Button>
                        <Button variant='contained' className='bg-primary hover:bg-primary/90'>Restore</Button>

                    </div>
                </div>
            </Box>

        </Card>)
}

export default TrashCard