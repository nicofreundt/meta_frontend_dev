import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import "./style.css"
import ErrorPage from './components/ErrorPage'
import Booking from './components/Booking'
import BookingConfirmation from './components/Booking/BookingConfirmation.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Hallo Welt</div>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "reservations",
        children: [
          {
            index: true,
            element: <Booking />
          },
          {
            path: "success",
            element: <BookingConfirmation />
          }
        ]
      },
      {
        path: "*",
        element: <ErrorPage />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
