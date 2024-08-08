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
          {
            path: 'contact',
            element: <Contact />,
          },
          {
            path: 'history',
            element: <History />,
          },
        ],
      },
      {
        path: 'classlist/:name',
        element: <ClassList />,
        loader: async ({ params }) => {
          const { name } = params
          let res = await axios.get(`/classlist/${name}`)
          return res.data
        },
      },
    ])
    return <RouterProvider router={router} />
  }
  
  export default Router
  