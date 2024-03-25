import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RouteRule from '@/router'
import "@/global.css"
import '@tabler/icons-webfont/dist/tabler-icons.min.css';

const router = createBrowserRouter([RouteRule]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
