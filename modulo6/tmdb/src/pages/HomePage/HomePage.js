import React, { useContext, useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import MovieCard from '../../components/MovieCard/MovieCard'
import MovieCategories from '../../components/Categories/MovieCategories'

function HomePage() {

  return (
    <div>
      <Header/>
      <MovieCategories/>
      <MovieCard/>
    </div>
  );
}

export default HomePage;