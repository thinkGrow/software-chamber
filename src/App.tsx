import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import FontTest from './FontTest'

function App() {
  const [count, setCount] = useState(0)
  const [showFontTest, setShowFontTest] = useState(false)

  if (showFontTest) {
    return (
      <div className="min-h-screen bg-base-100">
        <div className="p-4">
          <button 
            className="btn btn-secondary mb-4" 
            onClick={() => setShowFontTest(false)}
          >
            ← Back to Main App
          </button>
        </div>
        <FontTest />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-base-100 p-8">
      <div className="flex justify-center gap-8 mb-8">
        <a href="https://vite.dev" target="_blank" className="hover:opacity-80 transition-opacity">
          <img src={viteLogo} className="h-24 p-6 animate-pulse" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" className="hover:opacity-80 transition-opacity">
          <img src={reactLogo} className="h-24 p-6 animate-spin" alt="React logo" />
        </a>
      </div>
      
      <div className="text-center space-y-6">
        <h1 className="font-primary text-4xl font-bold text-primary">Vite + React</h1>
        
        <div className="space-y-4">
          <h2 className="font-dmsans text-2xl font-semibold text-secondary">Font Demonstrations</h2>
          <p className="font-inter text-lg text-base-content">This is Inter font - great for body text</p>
          <p className="font-secondary text-lg text-base-content">This is Outfit font (secondary) - modern and clean</p>
          <p className="font-rubik text-lg text-base-content">This is Rubik font - rounded and friendly</p>
          <p className="font-primary text-lg text-base-content">This is Bricolage Grotesque (primary) - unique and stylish</p>
          <p className="font-poppins text-lg text-base-content">This is Poppins font - versatile and professional</p>
          <p style={{fontFamily: '"Inter", sans-serif'}} className="text-lg text-info">Inline style test: Inter font working</p>
        </div>
        
        <div className="card bg-base-200 shadow-xl p-6 max-w-md mx-auto">
          <button 
            className="btn btn-primary mb-4" 
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </button>
          <p className="font-inter text-sm text-base-content/70">
            Edit <code className="bg-base-300 px-2 py-1 rounded">src/App.tsx</code> and save to test HMR
          </p>
        </div>
        
        <p className="font-secondary text-sm text-base-content/60">
          Click on the Vite and React logos to learn more
        </p>
        
        <button 
          className="btn btn-outline btn-primary mt-4" 
          onClick={() => setShowFontTest(true)}
        >
          🔤 Test Font Utilities
        </button>
      </div>
    </div>
  )
}

export default App
