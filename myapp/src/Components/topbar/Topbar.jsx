import "./topbar.css"

function Topbar() {
  return (
    <div className='top'>
        <div className="topLeft">
            <i className="topIcon fa-brands fa-square-facebook"></i>
            <i className="topIcon fa-brands fa-square-twitter"></i>
            <i className="topIcon fa-brands fa-square-pinterest"></i>
            <i className="topIcon fa-brands fa-square-instagram"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">ANA SAYFA</li>
                <li className="topListItem">HAKKIMIZDA</li>
                <li className="topListItem">İLETİŞİM</li>
                <li className="topListItem">YAZ</li>
                <li className="topListItem">ÇIKIŞ YAP</li>
            </ul>
        </div>
        <div className="topRight">
            <img className="topImage" src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default Topbar