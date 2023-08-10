import { Route, Routes } from 'react-router-dom'
import { Home, CreatePost } from '../Pages'
import React from 'react'
export const AllRoutes = () => {
  return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/createPost" element={<CreatePost/>}/>
            </Routes>
        </>
  )
}
