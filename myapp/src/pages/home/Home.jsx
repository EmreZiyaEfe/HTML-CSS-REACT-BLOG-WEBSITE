import Header from "../../header/Header"
import Posts from "../../posts/Posts"
import SideBar from "../../sidebar/SideBar"
import "./home.css"


function Home() {
  return (
    <>
    <Header />
    <div className="home">
        <Posts />
        <SideBar />
    </div>
    </>
  )
}

export default Home