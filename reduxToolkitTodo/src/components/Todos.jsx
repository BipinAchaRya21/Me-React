import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {removeTodo, updateTodo, toggleTodo} from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    const [editingId, setEditingId] = useState(null)
    const [editText, setEditText] = useState('')

    const handleEditStart = (todo) => {
      setEditingId(todo.id)
      setEditText(todo.text)
    }

    const handleEditSave = (id) => {
      if (editText.trim()) {
        dispatch(updateTodo({id, text: editText}))
        setEditingId(null)
        setEditText('')
      }
    }

    const handleEditCancel = () => {
      setEditingId(null)
      setEditText('')
    }

  return (
    <div className="mt-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 inline-block px-4 py-2 rounded-lg">
          📋 Your Todos
        </h2>
      </div>
      {todos.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">No todos yet. Add one to get started! 🚀</p>
        </div>
      ) : (
        <ul className="list-none space-y-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center bg-gradient-to-r from-gray-800 to-gray-900 px-5 py-4 rounded-lg border border-gray-700 hover:border-purple-500 transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
            >
              <div className='flex items-center gap-3 flex-1'>
                <input 
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => dispatch(toggleTodo(todo.id))}
                  className="w-5 h-5 cursor-pointer"
                />
                {editingId === todo.id ? (
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="flex-1 bg-gray-700 rounded border border-purple-500 focus:ring-2 focus:ring-purple-400 text-white px-3 py-2 outline-none"
                    autoFocus
                  />
                ) : (
                  <span className={`text-white text-lg ${todo.completed ? 'line-through text-gray-500' : ''}`}>
                    {todo.text}
                  </span>
                )}
              </div>

              <div className='flex gap-2 ml-3'>
                {editingId === todo.id ? (
                  <>
                    <button
                      onClick={() => handleEditSave(todo.id)}
                      className="text-white bg-green-600 hover:bg-green-700 border-0 py-1 px-3 rounded text-sm transition-colors duration-200"
                    >
                      Save
                    </button>
                    <button
                      onClick={handleEditCancel}
                      className="text-white bg-gray-600 hover:bg-gray-700 border-0 py-1 px-3 rounded text-sm transition-colors duration-200"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => handleEditStart(todo)}
                      className="text-white bg-blue-600 hover:bg-blue-700 border-0 py-1 px-3 rounded text-sm transition-colors duration-200 flex items-center gap-1"
                    >
                      ✏️ Edit
                    </button>
                    <button
                      onClick={() => dispatch(removeTodo(todo.id))}
                      className="text-white bg-red-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded text-sm transition-colors duration-200"
                    >
                      🗑️ Delete
                    </button>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Todos