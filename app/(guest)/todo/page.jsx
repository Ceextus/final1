import TodoForm from '@/app/components/TodoForm'
import React from 'react'

const page = () => {
  return (
    <div className='bg-blue-50'>
        <h1 className='uppercase text-blue-600 font-bold text-center text-4xl p-8'>add todos</h1>
        <TodoForm/>
    </div>
  )
}

export default page
