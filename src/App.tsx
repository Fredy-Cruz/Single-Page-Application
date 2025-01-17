import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import { HomePage } from './Home/HomePage'
import { CommentPage } from './Comment/CommentPage'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage/>
    },
    {
      path: '/comment',
      element: <CommentPage/>
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
