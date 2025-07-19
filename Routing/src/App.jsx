import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path : "/",
      element : <>  <Navbar /> <Home /> </>
    },
    {
      path : "/login",
      element : <>  <Navbar /> <Login /> </>
    },
        {
      path : "/about",
      element : <>  <Navbar /> <About /> </>
    },
  ])

  return (
    <>
    <div>HELLO I'M AK$HIT</div>
    <RouterProvider router={router} />
    </>
  )
}

export default App
