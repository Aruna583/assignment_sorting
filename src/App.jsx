import './App.css'
import ltinearyData from '../../ltineary.json'
import { closestCenter, closestCorners, DndContext, KeyboardSensor, PointerSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core'
import { useState } from 'react'
import Cards from './components/Cards';
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import Header from './components/Header';

function App() {
  const [tasks, setTasks] = useState(ltinearyData.ltinearyData)

  const getTaskPos = id => tasks.findIndex(task => task.id === id)

  const handleDragEnd = (event) => {
    const { active, over } = event

    if (active.id === over.id) return;

    setTasks(tasks => {
      const originalPos = getTaskPos(active.id)
      const newPos = getTaskPos(over.id)
      return arrayMove(tasks, originalPos, newPos)
    })

  }

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor,
      { coordinateGetter: sortableKeyboardCoordinates }
    )
  )

  return (
    <div className='flex h-screen w-full'>
      <div className='md:w-1/2 w-full px-5 py-10'>
        <Header />

        <DndContext
          sensors={sensors}
          onDragEnd={handleDragEnd}
          collisionDetection={closestCorners}
        >
          <Cards tasks={tasks} />
        </DndContext>
      </div>
      <div className='w-1/2 md:block hidden'>
        <img
          src='https://res.cloudinary.com/ddectomha/image/upload/v1749209758/Screenshot_2025-06-06_165919_vw4rbl.png'
          className='w-full h-screen'
        />
      </div>
    </div>
  )
}

export default App
