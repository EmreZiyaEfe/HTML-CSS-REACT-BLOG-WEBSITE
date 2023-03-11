import "./header.css"

function header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm"> React & Node</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img className="headerImage" src="https://images.pexels.com/photos/1002812/pexels-photo-1002812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
    </div>
  )
}

export default header