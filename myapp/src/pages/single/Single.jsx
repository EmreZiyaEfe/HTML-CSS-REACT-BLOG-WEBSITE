import SideBar from "../../Components/sidebar/SideBar"
import SinglePost from "../../Components/singlePost/SinglePost"
import "./single.css"

function Single() {
  return (
    <div className="single">
        <SinglePost />
        <SideBar />
    </div>
  )
}

export default Single