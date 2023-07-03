import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import "./style.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Hallo Welt</div>,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
