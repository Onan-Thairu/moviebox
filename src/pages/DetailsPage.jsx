import Sidebar from "../components/Sidebar"
import Detail from "../components/Detail"


function DetailsPage() {
  return (
    <div className="flex gap-6">
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