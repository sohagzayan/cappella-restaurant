import { SummaryCard } from '@/components/common'
import React from 'react'

const Summary = () => {
    return (
        <div className='grid lg:grid-cols-2 xl:grid-cols-3 grid-cols-1 w-full items-center justify-center gap-10 mt-10'>
            <SummaryCard />
            <SummaryCard />
            <SummaryCard />
        </div>
    )
}

export default Summary