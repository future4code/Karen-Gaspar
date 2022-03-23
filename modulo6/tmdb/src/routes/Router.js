import React from 'react'
import {Route, Routes} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import MovieDetails from '../pages/MovieDetails'
import ErrorPage from '../pages/ErrorPage'

export default function Router(){
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/movie/:id' element={<MovieDetails/>}/>
        <Route element={<ErrorPage />} />
    </Routes>
}

