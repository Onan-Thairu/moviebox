function Sidebar() {
  return (
    <div>
      <div className="bg-gray-200">
        <div className="flex items-center gap-2">
          <img src="/assets/images/tv.svg" alt="logo" className="w-7" />
          <p className="text-black font-semibold">MovieBox</p>
        </div>
        
        <div>
          <img src="/assets/icons/home.svg" alt="home" />
          <p>Home</p>
        </div>

        <div>
          <img src="/assets/icons/movie-projector.svg" alt="projector" />
          <p>Movies</p>
        </div>

        <div>
          <img src="/assets/icons/tv-show.svg" alt="tv-show" />
          <p>TV Series</p>
        </div>

        <div>
          <img src="/assets/icons/upcoming.svg" alt="upcoming" />
          <p>Upcoming</p>
        </div>

        <div>
          <p>Play movie quizes and earn free tickets</p>
          <p>50k people are playing now</p>
          <button>
            Start playing
          </button>
        </div>

        <div>
          <img src="/assets/icons/logout.svg" alt="logout" />
          <p>Log out</p>
        </div>

      </div>
    </div>
  )
}

export default Sidebar