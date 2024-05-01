import { Button, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'
import StorageIcon from '@mui/icons-material/Storage';



const SummaryCard = () => {
    return (
        <React.Fragment>
            <CardContent className="bg-[#161b22]  border border-[#30363d] text-white  rounded-md w-full ">
                <div>
                    <Typography sx={{ fontSize: 20 }} className=' text-light_white mb-6' >
                        All Foods
                    </Typography>
                    <Typography component="div" className='flex justify-between items-center'>

                        <Typography variant='h3' className='font-semibold text-secondary'>
                            50
                        </Typography>
                        <Typography component="div" className='text-secondary ' >
                            <StorageIcon fontSize='large' />
                        </Typography>
                    </Typography>
                </div>
            </CardContent>
        </React.Fragment>
    )
}

export default SummaryCard