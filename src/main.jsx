import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
 
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes';
import AuthProvider from './providers/AuthProvider';

import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify';
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<QueryClientProvider client = {queryClient}>
<AuthProvider>
 <RouterProvider router={router} />
 <ToastContainer></ToastContainer>
 </AuthProvider>
</QueryClientProvider>
  </React.StrictMode>,
)
