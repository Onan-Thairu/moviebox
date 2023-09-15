function Footer() {
  return (
    <div>
      <div className="flex justify-between mt-20 mb-6 w-[40%] m-auto sm:w-[22%] sm:mb-10 sm:mt-40">
        <img src="/assets/icons/facebook.svg" alt="facebook" className="w-5" />
        <img src="/assets/icons/instagram.svg" alt="instagram" className="w-5" />
        <img src="/assets/icons/twitter.svg" alt="twitter" className="w-5" />
        <img src="/assets/icons/youtube.svg" alt="youtube" className="w-5" />
      </div>

      <div className="flex justify-between gap-2 w-[90%] m-auto text-xs font-semibold mb-6 sm:w-[55%] sm:mb-10">
        <a href="#">Conditions of Use</a>
        <a href="#">Privacy & Policy</a>
        <a href="#">Press Room</a>
      </div>

      <div className="text-center text-xs text-gray-300 mb-8">
        <p>
          &copy; 2023 MovieBox by Onan Thairu
        </p>
      </div>
    </div>
  )
}

export default Footer