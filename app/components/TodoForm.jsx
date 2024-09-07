"use client"
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import * as Yup from 'yup'
import { collection, addDoc, getDocs, doc, updateDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase';
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import {deleteDoc } from "firebase/firestore";
import { useToast } from '@/components/ui/use-toast';
import { LuLoader } from 'react-icons/lu';
import { IoSaveOutline } from 'react-icons/io5';




const TodoForm = () => {
    const { toast } = useToast();
  const [processing, setProcessing] = useState(false)

  const [todos, setTodos] = useState([])

  const [editingTask, setEditingTask]=useState(null)

  useEffect(() => {
    // function to fetch todos
    const fetchTodos = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'todos'))
        const todosData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        setTodos(todosData)
        console.log(todos);

      } catch (error) {
        console.error("Error fetching data: ", error)
      }
    }
    fetchTodos();
  }, [])

  const initVal = {
    title: '',
  }

  const formValidation = Yup.object().shape({
    title: Yup.string()
      .required('Please enter a task')
  })

  const handleSubmit = async (values, { resetForm }) => {
    try {
      setProcessing(true)

      console.log(values);

      // create a document to be stored
      const info = {
        title: values.title,
        createdAt: new Date(),
        completed: false,
      }
      // add this document to the database
      const docRef = collection(db, "todos")
      await addDoc(docRef, info)
      // clear
      values.title = '';

      // fetch updated list from db
      const querySnapshot = await getDocs(collection(db, 'todos'))
      const todosData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      toast({
        title: "Task Added succesfully",
        
      })
      setTodos(todosData)
      resetForm()

    } catch (error) {
      console.error("Error adding task: ", error)
    }
    finally{
      setProcessing(false)
    }

  }
  const check = async (infoId, currentStatus) => {
    try {
      // update info in db
      const infoRef = doc(db, 'todos', infoId)
      await updateDoc(infoRef, {completed: !currentStatus})

      setTodos(prevTodos => 
        prevTodos.map(todo =>
          todo.id === infoId ? { ...todo, completed: !currentStatus } : todo
        )
      )
    }
    catch (e) {
      console.error("error")
    }
  }
  const handleDelete=async(infoId)=>{
    if(!confirm('confirm delete')){
      return
    }
    toast({
      title: "Task deleted successful",
      description: "",
      variant:"destructive",
    })
    try {
      
      await deleteDoc(doc(db, "todos", infoId));
      setTodos(prevTodos =>prevTodos.filter(todo=> todo.id !==infoId))
      
    } catch (error) {
      console.log('error deleting task');
      
      
    }
  }
  const handleUpdateTask = async (infoId) => {
    try {
      const taskRef = doc(db, 'todos', infoId)
      await updateDoc(taskRef, { title: editingTask.title })

      setTodos(prevTodos =>
        prevTodos.map(todo =>
          todo.id === infoId ? { ...todo, title: editingTask.title } : todo
        )
      )

      setEditingTask(null)

    } catch (error) {
      console.error("Error updating task: ", error)
    }
  }

  return (
    <main className='h-dvh bg-blue-50'>
      
      <Formik
        initialValues={initVal}
        validationSchema={formValidation}
        onSubmit={handleSubmit}
      >
        <Form className='flex justify-center items-center'>
          <div className='w-full p-10 flex items-center gap-10 '>
            <div className='w-full h-12'>
              <Field
                name='title'
                placeholder='Enter a task...'
                className="w-full border-none outline-none rounded-md px-3 py-2  text-2xl"
              />
              <ErrorMessage
                name='title'
                component={'p'}
                className='text-red-500 text-sm'
              />
            </div>
            <button
              type='submit'
              disabled={processing}
              className='p-3 rounded-full shadow-md bg-white text-blue-600 text-2xl'
            >
              {
                processing ? <div><LuLoader className='animate-spin '/></div> :<FaPlus/>
              }
        
            </button>
          </div>
        </Form>
      </Formik>

      <div>
        <ul className='w-full'>
          {
          todos.map((todo) => (
            <li key={todo.id} className={`capitalize ${todo.completed ? 'line-through bg-gray-400 text-white' : ''} w-[90%] mx-auto flex justify-between p-3 m-3 text-lg border-b  bg-gray-200 rounded-lg`}>
                <input
                  className=''
                  onChange={() => check(todo.id, todo.completed)}
                  checked={todo.completed}
                  type="checkbox" />
                  
                  {
                  editingTask?.id === todo.id ? (
                    <input type="text"
                    className='p-2 rounded-lg outline-none border-blue-300'
                      value={editingTask.title}
                      onChange={(e) => setEditingTask({ ...editingTask, title: e.target.value })}
                    />
                  ) : (
                    <span className={`${todo.completed ? 'line-through  text-gray-500' : ''}`}>
                      {todo.title}
                    </span>
                  )
                }
                <div className='flex items-center gap-10'>
                  {
                    editingTask?.id === todo.id ? (
                      <button
                        onClick={() => handleUpdateTask(todo.id)}
                      >
                        <IoSaveOutline  className='hover:text-green-600 hover:text-2xl transition-all' />

                      </button>
                    ) : (
                      <button
                        onClick={() => setEditingTask(todo)}
                      >
                        <FaRegEdit  className='hover:text-green-600 hover:text-2xl transition-all' />
                      </button>
                    )
                  }
                <button 
                onClick={()=>handleDelete(todo.id)}
                className='w-24'>
                  <FaTrashAlt className='hover:text-red-600 hover:text-2xl transition-all' />
                  
                
                

                </button>
                </div>
                

              </li>
          ))
          
          }
          
        </ul>
        
      </div>
      <p className='text-center text-sm p-10'>You have {todos.length} tasks</p>
    </main>
  )
}

export default TodoForm
