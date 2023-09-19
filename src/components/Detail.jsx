function Detail() {
  return (
    <div>
      <div className="mt-5">
        <div>
          <img src="/assets/images/top-gun.png" className="h-96" alt="poster"/>
        </div>

        <div className="max-w-[96%] m-auto mt-4">
          <div>
            <div className="flex justify-between items-center mb-4">
              <div>
                <ul className="flex gap-2 items-center text-sm">
                  <p className="font-semibold">Top Gun: Maverick</p>
                  <li className="font-semibold">2022</li>
                  <li className="font-semibold">PG-13</li>
                  <li className="font-semibold">2h 10m</li>
                  <li className="border border-red-100 text-red-700 py-1 px-2 rounded-lg font-medium">Action</li>
                  <li className="border border-red-100 text-red-700 py-1 px-2 rounded-lg font-medium">Drama</li>
                </ul>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <img src="/assets/icons/star.svg" alt="star" className="w-4" />
                <p className="text-gray-200">8.5</p>
                <p>|</p>
                <p>350k</p>
              </div>
            </div>

          <div className="flex gap-4">
            <div className="text-sm max-w-[65%]">
              <p>
                After thirty years, Maverick is still pushing the envelope as a top naval aviator,
                but must confront ghosts of his past when he leads TOP GUN's elite graduates
                on a mission that demands the ultimate sacrifice from those chosen to fly it.
              </p>
              <div className="mt-4">
                <p className="mb-4">Director: <span className="ml-2 text-red-700">Joseph Kosinski</span></p>
                <p className="mb-4">Writers: <span className="ml-2 text-red-700">Jim Cash, Jack Epps Jr, Peter Craig</span></p>
                <p className="mb-4">Stars: <span className="ml-2 text-red-700">Tom Cruise, Jennifer Connelly, Miles Teller</span></p>
              </div>
    
              <div className="flex items-center">
                <p className="bg-red-700 rounded-lg text-white px-3 py-2">Top rated movie #65</p>
                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-red-700 focus:border-red-700 block py-2 px-3 border-l-transparent">
                  <option selected>Awards 9 nominations</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
            </div>

            <div>
                <div className="flex bg-red-700 text-white justify-around">
                  <p>See Showtimes <span><img src="/assets/icons/two-tickets.svg" alt="ticket" /></span></p>
                </div>
  
                <div>
                  <img src="/assets/icons/list.svg" alt="list" />
                  <p>More watch options</p>
                </div>
  
                <div>
                  <img src="/assets/images/images.png" alt="images" />
                  <div>
                    <img src="/assets/icons/white-list.svg" alt="list" />
                    <p>The Best Movies and Shows in September</p>
                  </div>
                </div>
            </div>
          </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Detail