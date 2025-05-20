import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // 3 types of useEffect Hooks
  useEffect(() => {                     // --> runs on every render
    alert("this will run on every render")
  })
  

  useEffect(() => {                    // --> run only once when page reloads
   alert("hey welcome to my page")
  }, [])

    useEffect(() => {                 // --> runs when value of count is changed
   alert("count was changed")
  }, [count])
  

  return (
    <>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    </>
  )
}

export default App
