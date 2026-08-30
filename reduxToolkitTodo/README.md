# 📝 Redux Toolkit Todo App

A modern, feature-rich Todo application built with React, Redux Toolkit, and Tailwind CSS. Manage your tasks efficiently with a beautiful and responsive UI.

## ✨ Features

- **Add Todos** ➕ - Quickly add new tasks to your todo list
- **Edit Todos** ✏️ - Update your todos with inline editing
- **Delete Todos** 🗑️ - Remove completed or unwanted tasks
- **Mark Complete** ✓ - Toggle task completion status
- **Beautiful UI** 🎨 - Modern gradient design with smooth animations
- **Responsive Design** 📱 - Works seamlessly on all devices
- **Redux State Management** 🔄 - Centralized state with Redux Toolkit

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Technology Stack

- **React 19** - UI library
- **Redux Toolkit** - State management
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **React Redux** - React bindings for Redux

## 📦 Project Structure

```
src/
├── components/
│   ├── AddTodo.jsx      # Add new todo component
│   └── Todos.jsx        # Display and manage todos
├── features/
│   └── todo/
│       └── todoSlice.js # Redux slice with reducers
├── app/
│   └── store.js         # Redux store configuration
├── App.jsx              # Main app component
├── App.css              # Global styles
├── index.css            # Tailwind imports
└── main.jsx             # Application entry point
```

## 🎯 Available Actions

### Add Todo
- Type your task in the input field
- Click "➕ Add" button or press Enter
- The todo appears in your list

### Edit Todo
- Click "✏️ Edit" button on any todo
- Edit the text in the inline editor
- Click "Save" to confirm or "Cancel" to discard changes

### Mark Complete
- Click the checkbox next to a todo to mark it complete
- Completed todos appear with strikethrough text

### Delete Todo
- Click "🗑️ Delete" button to remove a todo
- The todo is immediately removed from your list

## 🎨 Styling Features

- **Gradient Background** - Beautiful dark gradient theme
- **Smooth Animations** - Slide-in effects for new todos
- **Hover Effects** - Interactive button and card hover states
- **Focus States** - Accessible focus indicators for keyboard navigation
- **Responsive Spacing** - Perfect padding and margins for all screen sizes

## 🔧 Redux State Structure

```javascript
{
  todos: [
    {
      id: "unique-id",
      text: "Your todo text",
      completed: false
    }
  ]
}
```

## 📝 Redux Actions

- `addTodo(text)` - Add a new todo
- `updateTodo({id, text})` - Update a todo's text
- `removeTodo(id)` - Delete a todo
- `toggleTodo(id)` - Toggle completion status

## 📄 License

This project is open source and available under the MIT License.

## 💡 Tips

- Use Edit feature to correct mistakes without deleting and re-adding
- Check off completed tasks to keep track of your progress
- Your todos are stored in the Redux store (refresh page to reset)

Happy task managing! 🎉
