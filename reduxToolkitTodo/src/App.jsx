

import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent mb-2">
            📝 Redux Todo App
          </h1>
          <p className="text-gray-400 text-lg">Manage your tasks efficiently with Redux Toolkit</p>
        </div>

        {/* Main Card */}
        <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-700">
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-300 mb-4">Add Your Todo</h2>
            <AddTodo />
          </div>

          <div className="border-t border-gray-700 pt-6">
            <Todos />
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>Keep track of your tasks and stay productive! ✨</p>
        </div>
      </div>
    </div>
  )
}

export default App
