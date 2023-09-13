function MovieCard() {
  return (
    <div>
      <div className="bg-amber-100 max-w-fit">
        <img src="./src/assets/images/stranger-things.png" alt="movie" />
        <p className="text-gray-300 text-xs mt-2 mb-2 font-medium tracking-wide">USA, 2016 - Current</p>
        <p className="font-semibold tracking-wide mb-2">Stranger Things</p>

        <div className="flex justify-between mb-2">
          <div className="flex items-center gap-2">
            <img src="./src/assets/images/imdb.svg" alt="imdb" className="w-6" />
            <p className="text-xs tracking-wider">860/100</p>
          </div>
  
          <div className="flex items-center gap-2">
            <img src="./src/assets/images/rotten-tomato.svg" alt="imdb" />
            <p className="text-xs tracking-wider">96%</p>
          </div>
        </div>
        <p className="text-gray-300 text-xs">Action, Adventure, Horror</p>
      </div>
    </div>
  )
}

export default MovieCard