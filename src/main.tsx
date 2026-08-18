import { createRoot } from 'react-dom/client'
import './index.css'
import Login from "./components/Login/Login"
import {createBrowserRouter,RouterProvider} from "react-router";
import { formAction } from "./components/Login/LoginForm"
import HomePage from './components/HomePage/HomePage';

const routes=createBrowserRouter([
  {path:"/",Component:Login,action:formAction},
  {path:"/homepage",Component:HomePage}
])



createRoot(document.getElementById('root')!).render(<RouterProvider router={routes}/>)
