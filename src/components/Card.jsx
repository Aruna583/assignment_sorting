import React from 'react';
import { TbMenu } from "react-icons/tb";
import { FaStar } from "react-icons/fa";
import { LuPencil } from "react-icons/lu";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { ImAttachment } from "react-icons/im";
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from "@dnd-kit/utilities"

const Card = ({ id, task }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id })

    const style = {
        transition,
        transform: CSS.Transform.toString(transform)
    }

    return (
        <div key={task.id}
            className='flex gap-4 py-2'
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            style={style}

        >
            <div className='text-center flex flex-col justify-center'><TbMenu /></div>
            <div className='md:flex gap-2'>
                <img src={task.imageUrl} className='h-28 w-28 rounded-xl hidden md:block my-3' />

                <div>
                    <div className='flex gap-4 py-2'>
                        <img src={task.imageUrl} className='w-16 h-16 rounded-md md:hidden' />
                        <div className='flex justify-between items-start w-full'>
                            <div>
                                <p className='font-bold text-base text-gray-800'>{task.placeName}</p>
                                <div className='flex pt-3 gap-2'>
                                    <p className='text-sm text-gray-600'>{task.rating}</p>
                                    <FaStar className='text-yellow-400' />
                                    <p className='text-sm text-gray-600'>{task.viewsCount}</p>
                                </div>
                            </div>
                            <div className='flex gap-4'>
                                <img src='https://res.cloudinary.com/ddectomha/image/upload/v1749201413/gmap_irtovu.png' className='h-5 w-4' />
                                <ImAttachment className='hidden md:block' />
                                <RiDeleteBin6Fill className='text-red-600 hidden md:block' />
                                <HiOutlineDotsVertical className='md:hidden' />
                            </div>
                        </div>
                    </div>
                    <div className='p-4 flex justify-start bg-gray-100 rounded-xl'>
                        <p className='truncate w-64 md:w-full lg:truncate-none md:text-wrap h-14 text-sm'>{task.description}</p>
                        <div className='flex flex-col justify-center items-center p-1 '>
                            <LuPencil className='h-4 w-4' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card