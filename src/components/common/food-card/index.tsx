"use client"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import { useState } from "react"

export default function ActionAreaCard() {

    return (
        <>
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
                    <CardContent>
                        <Typography component="div" className='flex items-center justify-between'>
                            <Typography variant="h5" component="div" className='font-semibold'>
                                Tuna Roast Source
                            </Typography>
                            <Typography variant="h5" component="div" className='font-semibold'>
                                $24.5
                            </Typography>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    );
}