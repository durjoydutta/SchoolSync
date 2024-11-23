import Pagination from '@/components/Pagination';
import Table from '@/components/Table';
import TableSearch from '@/components/TableSearch'
import Image from 'next/image';
import React from 'react'
const TeacherList = () => {
  return (
    <div className='bg-white dark:bg-stone-800 p-4 rounded-md flex-1 m-4 mt-0'>
        {/* TOP */}
        <div className='flex items-center justify-between'>
            <h1 className='hidden md:block text-lg font-semibold'>All Teachers</h1>
            <div className='flex flex-col md:flex-row items-cener gap-4 w-full md:w-auto'>
            <TableSearch />
            <div className="flex items-center gap-4 self-end">
                <button className="w-8 h-8 flex items-center justify-center rounded-full dark:bg-lamaYellowLight bg-lamaYellow" >
                    <Image src='/filter.png' alt="filter button" width={14} height={14} />
                </button>                
                <button className="w-8 h-8 flex items-center justify-center rounded-full dark:bg-lamaYellowLight bg-lamaYellow" >
                    <Image src='/sort.png' alt="filter button" width={14} height={14} />
                </button>                
                <button className="w-8 h-8 flex items-center justify-center rounded-full dark:bg-lamaYellowLight bg-lamaYellow" >
                    <Image src='/plus.png' alt="filter button" width={14} height={14} />
                </button>
            </div>
            </div>
        </div>
        {/* LIST */}
        <div className=''>
            <Table />
        </div>
        {/* PAGINATION */}
        <Pagination />
    
    </div>
  )
}

export default TeacherList