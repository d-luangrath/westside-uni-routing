import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import About from './components/About'


import axios from 'axios'

const Router = () => {
    const router = createBrowserRouter([
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
        children: [
          {
            index: true,
            element: <AboutMain />,
          },
         
        ],
      },

    ])
    return <RouterProvider router={router} />
  }
  
  export default Router
  