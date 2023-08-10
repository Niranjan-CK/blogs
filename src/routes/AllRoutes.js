import { Route, Routes } from "react-router-dom"
import { Home , CreatePost } from "../Pages"
export const AllRoutes=()=>{
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/createPost" element={<CreatePost/>}/>
            </Routes>
        </>
    )
}