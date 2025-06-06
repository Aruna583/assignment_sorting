import React from 'react'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import Card from './Card';

const Cards = ({ tasks }) => {
    return (
        <div>
            <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
                {tasks.map((task) => (
                    <Card task={task} id={task.id} key={task.id}/>
                ))}
            </SortableContext>

        </div>
    )
}

export default Cards