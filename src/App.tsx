import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import { HomePage } from './Home/HomePage'
import { CommentPage } from './Comment/CommentPage'
import { NotFoundPage } from './shared/components/NotFound/NotFoundPage'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage/>
    },
    {
      path: '/comment',
      element: <CommentPage/>
    },
    {
      path: "*",
      element: <NotFoundPage/>
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
