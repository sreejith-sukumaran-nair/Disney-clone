import React from 'react'
import GenreList from '../assets/Constants/GenreList'
import MovieList from './MovieList'

function GenreListMovies() {
  return (
    <div>
      {GenreList.genere.map((item,index) => (
        <div className="p-8 px-8 md:px-16">
          
          <h2 className='text-[20px] text-white font-extralight'>{item.name}</h2>
          <MovieList genreId = {item.id} index_={index}/>
          
          
        </div>
      ) )}
    </div>
  )
}

export default GenreListMovies