// import { Button } from '@mui/material'
import { Button } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div className='relative text-black flex justify-between h-16 mx-auto lg:container lg:px-16 xl:px-20 z-50 '>
            <div className='flex items-center px-6 lg:px-0 flex-1 sm:items-stretch justify-between w-full '>
                <div className='flex items-center'>
                    <div className='flex items-center flex-shrink-0'>
                        <Link href="/" className='block w-auto h-6 focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-foreground-lighter focus-visible:ring-offset-4 focus-visible:ring-offset-background-alternative focus-visible:rounded-sm'>
                            <Image src="/assets/images/logo.png" width="200" height="200" alt='logo' />
                        </Link>
                    </div>
                </div>
                <div className='flex items-center gap-2 '>
                    <button
                        // variant="contained"
                        className='relative justify-center cursor-pointer items-center space-x-2 text-center ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1  bg-primary/80 hover:bg-brand-button/80 border border-primary focus-visible:outline-brand-600 shadow-sm  data-[state=open]:outline-red-500 text-xs px-2.5 py-1 h-[26px] hidden text-white lg:block'
                    >
                        Create new restaurant
                    </button>




                </div>
            </div>
        </div>
    )
}

export default Header