import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Dashbord from './components/Dashbord'
import Navbar from './components/Navbar'
import Students from './components/Students'
import PageNotFound from './components/PageNotFound'
import Report from './components/Report'
import Mytest from './components/Mytest'

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
      </div>,
      children: [
        {
          path: 'report',
          element:<Report />,
        },
        {
          path: 'mytest',
          element: <Mytest />,
        }
      ]
    
  },
  {
    path: '/student/:id',
    element: 
    <div>
        <Navbar />
        <Students />
    </div>
  },
  {
    path: '*',
    element: < PageNotFound />
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