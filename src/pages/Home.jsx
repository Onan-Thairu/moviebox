import { useState } from "react"

import MovieCard from "../components/MovieCard"
import Nav from "../components/Nav"
import { useEffect } from "react"

function Home() {
  const [popular, setPopular] = useState([])

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`
      }
    }

    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
      .then(res => res.json())
      .then(data => {
        const topMovies = data.results.slice(0, 12)
        setPopular(topMovies)
        console.log(popular);
      })
      .catch(error => {
        throw new Error(error)
      })
  }, [])

  return (
    <div>
      <div className="bg-[url('./src/assets/images/Poster.png')] bg-cover bg-center bg-no-repeat h-96">
        <div className="ml-6 pt-2 mr-4 sm:ml-8 sm:mr-8 lg:ml-12">
          <Nav />
          
          <div className="text-white max-w-xs">
            <div className="mt-6 text-2xl font-medium mb-4 sm:text-3xl sm:mt-16 sm:font-semibold sm:mb-6">
              <p>John Wick 3 :</p>
              <p>Parabellum</p>
            </div>

            <div className="flex gap-6 mb-2">
              <div className="flex items-center gap-2">
                <img src="./src/assets/images/imdb.svg" alt="imdb" />
                <p className="text-xs tracking-wider">860/100</p>
              </div>

              <div className="flex items-center gap-2">
                <img src="./src/assets/images/rotten-tomato.svg" alt="tomato" />
                <p className="text-xs tracking-wider">97%</p>
              </div>
            </div>

            <p className="text-xs mb-4">
              John Wick is on the run after killing a member of the international assassins' guild, 
              and with a $14 million price tag on his head, he is the target of hit men and women everywhere.
            </p>

            <div className="flex items-center gap-2 bg-red-600 w-44 p-2 rounded-md">
              <img src="./src/assets/icons/play-icon.svg" alt="play" />
              <p className="text-sm tracking-wide font-medium">WATCH TRAILER</p>
            </div>
          </div>
        </div>
      </div>

      <div className="ml-6 mt-8 mr-4 sm:ml-8 sm:mr-8 lg:ml-12">

        <div className="flex justify-between items-center mb-8">
          <div>
            <p className="text-lg tracking-wide font-semibold">Featured Movie</p>
          </div>

          <div className="flex items-center gap-4 text-red-700">
            <p className="font-semibold tracking-wide">See more</p>
            <img src="./src/assets/icons/right-arrow.svg" alt="arrow" />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {
            popular.map((movie) => {
              return (
                <MovieCard movie={movie} />
              )
            })
          }
        </div>

      </div>
    </div>
  )
}

export default Home