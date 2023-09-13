function Nav() {
  return (
    <div>
      <div className="flex items-center gap-2">
        <img src="./src/assets/images/tv.svg" alt="logo" className="w-7" />
        <p className="text-white font-semibold">MovieBox</p>
      </div>
      <div className="flex border border-white rounded-md mt-4 max-w-xs m-auto">
        <input type="search" className="bg-transparent text-white placeholder-white text-xs p-1.5 h- w-full outline-none" placeholder="What do you want to watch?" />
        <img src="./src/assets/icons/search-icon.svg" alt="search" className="pr-1.5" />
      </div>
      <div className="hidden">
        <a href="#" className="text-white text-sm">Sign in</a>
        <img src="./src/assets/icons/Ellipse.svg" alt="ellipse" />
        <img src="./src/assets/icons/burger-icon.svg" alt="burger" />
      </div>
    </div>
  )
}

export default Nav