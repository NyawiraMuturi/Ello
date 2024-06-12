import Landing from "../pages/landing";
import { createBrowserRouter } from "react-router-dom";
import ReadingList from "../pages/readingList/ReadingList";

const router = createBrowserRouter([
    {
        path:"/", 
        element: <Landing/>
    }, 
    {
        path:"/reading-list",
        element:<ReadingList/>
    }
    
])

export {router}