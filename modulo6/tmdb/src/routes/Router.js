import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import MovieDetails from '../pages/MovieDetails/MovieDetails'
import ErrorPage from '../pages/ErrorPage/ErrorPage'

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/movie/:id' element={<MovieDetails />} />
            <Route element={<ErrorPage />} />
        </Routes>
    )
}

