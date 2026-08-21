import { useState } from 'react'

function App() {
  const [color, setColor] = useState('grey')
  const colors = [
    { name: 'Blue', value: 'blue', text: 'white' },
    { name: 'Red', value: 'red', text: 'white' },
    { name: 'White', value: 'white', text: 'black' },
    { name: 'Black', value: 'black', text: 'white' },
    { name: 'Green', value: 'green', text: 'white' },
    { name: 'Pink', value: 'pink', text: 'black' },
    { name: 'Brown', value: 'brown', text: 'white' },
  ]

  return (
    <>
      <div className="w-full h-screen duration-300" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 rounded-3xl bg-white/90 px-4 py-3 shadow-2xl backdrop-blur-sm">
            {colors.map(({ name, value, text }) => (
              <button
                key={value}
                type="button"
                onClick={() => setColor(value)}
                className="rounded-full px-5 py-2 font-semibold shadow-md outline-none transition duration-200 hover:-translate-y-1 hover:shadow-lg focus-visible:ring-4 focus-visible:ring-slate-400/60"
                style={{ backgroundColor: value, color: text }}
              >
                {name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
