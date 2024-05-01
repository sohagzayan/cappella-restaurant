"use client"
import { Button } from '@mui/material'
import React, { useState } from 'react'

const activeTabClass = "border-secondary  hover:bg-secondary hover:text-white  bg-secondary text-white hover:border-secondary"

const regularTabClass = "border-secondary text-secondary hover:text-secondary hover:border-secondary"

const HistoryTab = () => {
    const [activeTab, setActiveTab] = useState(0)
    return (
        <ul className='text-white flex items-center gap-5 mt-10 flex-wrap '>
            <li>
                <Button variant={activeTab === 0 ? 'contained' : 'outlined'} className={activeTab === 0 ? activeTabClass : regularTabClass}>All - 223</Button>
            </li>
            <li>
                <Button variant={activeTab === 1 ? 'contained' : 'outlined'} className={activeTab === 1 ? activeTabClass : regularTabClass}>Trash - 223</Button>
            </li>
            <li>
                <Button variant={activeTab === 2 ? 'contained' : 'outlined'} className={activeTab === 2 ? activeTabClass : regularTabClass}>Draft - 223</Button>
            </li>
        </ul>
    )
}

export default HistoryTab