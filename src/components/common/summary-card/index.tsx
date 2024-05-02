import { Button, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'
import StorageIcon from '@mui/icons-material/Storage';

interface SummaryCardType {
    name: string,
    value: string,
    icon: any
}

const SummaryCard = ({ name, value, icon }: SummaryCardType) => {
    return (
        <React.Fragment>
            <CardContent className="bg-[#161b22]  border border-[#30363d] text-white  rounded-md w-full ">
                <div>
                    <div className='flex md:flex-row flex-col items-center justify-between'>
                        <Typography sx={{ fontSize: 20 }} className=' text-light_white md:mb-6' >
                            {name}
                        </Typography>
                        <Typography variant='h3' className='font-semibold text-secondary md:hidden block'>
                            {value}
                        </Typography>
                    </div>
                    <Typography component="div" className='flex justify-between items-center'>

                        <Typography variant='h3' className='font-semibold text-secondary md:block hidden'>
                            {value}
                        </Typography>
                        <Typography component="div" className='text-secondary md:block hidden' >
                            {icon}
                        </Typography>
                    </Typography>
                </div>
            </CardContent>
        </React.Fragment>
    )
}

export default SummaryCard