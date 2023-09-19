import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <div>
      <div className="border border-gray-200 rounded-r-large pt-8 h-screen text-gray-500 font-semibold ">
        <div className="flex items-center gap-4 pl-2 mb-14">
          <img src="/assets/images/tv.svg" alt="logo" className="w-8" />
          <p className="text-black font-semibold">MovieBox</p>
        </div>

        <div className="flex flex-col justify-between h-[35%] mb-8">
            <div className="flex gap-3 items-center pl-4">
              <img src="/assets/icons/home.svg" alt="home" className="w-5" />
              <p className="text-sm">Home</p>
            </div>
    
            <div className="bg-red-100 flex gap-3 items-center pl-4 py-4 border-r-red-600" >
              <img src="/assets/icons/movie-projector.svg" alt="projector" className="w-5" />
              <p className="text-sm text-red-700">Movies</p>
            </div>
    
            <div className="flex gap-3 items-center pl-4">
              <img src="/assets/icons/tv-show.svg" alt="tv-show" className="w-5" />
              <p className="text-sm">TV Series</p>
            </div>
    
            <div className="flex gap-3 items-center pl-4">
              <img src="/assets/icons/upcoming.svg" alt="upcoming" className="w-5" />
              <p className="text-sm">Upcoming</p>
            </div>
        </div>

        <div className="text-xs border rounded-3xl border-red-700 pt-6 pb-4 bg-red-100 max-w-[80%] m-auto leading-5">
          <div className="max-w-[85%] m-auto">
            <p className="font-bold text-sm">Play movie quizes and earn free tickets</p>
            <p className="mt-2">50k people are playing now</p>
            
              <p className="text-center mt-2 bg-red-300 py-2 rounded-3xl text-red-700">Start playing</p>
            
          </div>
        </div>

        <div className="flex gap-3 items-center w-[80%] m-auto mt-6">
          <img src="/assets/icons/logout.svg" alt="logout" className="w-5" />
          <Link to="/" className="text text-sm">Logout</Link>
        </div>

      </div>
    </div>
  )
}

export default Sidebar