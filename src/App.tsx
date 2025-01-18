import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import { HomePage } from './Home/HomePage'
import { CommentPage } from './Comment/CommentPage'
import { NotFoundPage } from './shared/components/NotFound/NotFoundPage'
import { VisualizerPage } from './Visualizer/VisualizerPage'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage/>
    },
    {
      path: "/:id",
      element: <VisualizerPage/>
    },
    {
      path: '/comment',
      element: <CommentPage/>
    },
    {
      path: '/test',
      element: <VisualizerPage/>
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
