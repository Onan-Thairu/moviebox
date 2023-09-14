function Nav() {
  return (
    <div className="sm:flex items-center">
      <div className="flex items-center gap-2">
        <img src="/assets/images/tv.svg" alt="logo" className="w-7" />
        <p className="text-white font-semibold">MovieBox</p>
      </div>
      <div className="flex border border-white rounded-md mt-4 max-w-xs m-auto sm:min-w-[50%] sm:mt-1">
        <input type="search" className="bg-transparent text-white placeholder-white text-xs p-1.5 h- w-full outline-none" placeholder="What do you want to watch?" />
        <img src="/assets/icons/search-icon.svg" alt="search" className="pr-1.5" />
      </div>
      <div className="hidden sm:flex items-center gap-4">
        <div>
          <a href="#" className="text-white text-sm font-semibold tracking-wide">Sign in</a>
        </div>
        <div className="sm:bg-red-700 rounded-full p-2 pt-3 pb-3">
          <img src="/assets/icons/burger-icon.svg" alt="burger" />
        </div>
      </div>
    </div>
  )
}

export default Nav