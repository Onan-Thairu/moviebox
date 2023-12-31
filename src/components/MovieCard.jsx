function MovieCard({ movie }) {
  
  return (
    <div key={movie.id} data-testid="movie-card" >
      <div className=" max-w-fit">
        <img src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} data-testid="movie-poster" />
        <p className="text-gray-300 text-xs mt-2 mb-2 font-medium tracking-wide" data-testid="movie-release-date" >{movie.release_date}</p>
        <p className="font-semibold tracking-wide mb-2" data-testid="movie-title">{movie.title}</p>    
        <div className="flex justify-between mb-2">
          <div className="flex items-center gap-2">
            <img src="/assets/images/imdb.svg" alt="imdb" className="w-6" />
            <p className="text-xs tracking-wider">{movie.vote_average}/10</p>
          </div>    
          <div className="flex items-center gap-2">
            <img src="/assets/images/rotten-tomato.svg" alt="imdb" />
            <p className="text-xs tracking-wider">{movie.vote_average * 10}%</p>
          </div>
        </div>
        <p className="text-gray-300 text-xs">Action, Adventure, Horror</p>
      </div>
    </div>
  )
}

export default MovieCard