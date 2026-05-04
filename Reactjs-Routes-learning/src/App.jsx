import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Dashbord from './components/Dashbord'
import Navbar from './components/Navbar'

const router = createBrowserRouter([
  {
    path: "/",
    element: 
      <div>
        <Navbar />
        <Home />
      </div>
    
  },
  {
    path: "/about",
    element: 
      <div>
        <Navbar />
        <About />
      </div>
    
  },
  {
    path: "/dashbord",
    element: 
      <div>
        <Navbar />
        <Dashbord />
      </div>
    
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App