import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice' 

function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        if (input.trim()) {
            dispatch(addTodo(input))
            setInput('')
        }
    }

  return (
    <form onSubmit={addTodoHandler} className="flex gap-2 items-center">
      <input
        type="text"
        className="flex-1 bg-gray-800 rounded-lg border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-3 px-4 leading-8 transition-all duration-200 ease-in-out placeholder-gray-500"
        placeholder="✍️ Add a new todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-gradient-to-r from-purple-600 to-blue-600 border-0 py-3 px-8 focus:outline-none hover:from-purple-700 hover:to-blue-700 rounded-lg text-base font-semibold transition-all duration-200 ease-in-out hover:shadow-lg hover:shadow-purple-500/50 whitespace-nowrap"
      >
        ➕ Add
      </button>
    </form>
  )
}

export default AddTodo