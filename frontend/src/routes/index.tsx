import Landing from "../pages/landing";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path:"/", 
        element: <Landing/>
    }, 
    
])

export {router}