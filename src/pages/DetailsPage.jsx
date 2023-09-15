import Sidebar from "../components/Sidebar"
import Detail from "../components/Detail"


function DetailsPage() {
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>

      <div>
        <Detail />
      </div>
    </div>
  )
}

export default DetailsPage