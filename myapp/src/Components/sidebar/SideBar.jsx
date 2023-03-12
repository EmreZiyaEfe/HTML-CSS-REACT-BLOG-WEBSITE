import "./sidebar.css"

function SideBar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">HAKKIMDA</span>
            <img src="https://images.pexels.com/photos/9319407/pexels-photo-9319407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus odio quia harum perferendis suscipit adipisci.</p>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">KATEGORİLER</span>
        <ul className="sidebarList">
            <li className="sidebarListItem">Hayat</li>
            <li className="sidebarListItem">Müzik</li>
            <li className="sidebarListItem">Spor</li>
            <li className="sidebarListItem">Teknoloji</li>
            <li className="sidebarListItem">Tarih</li>
            <li className="sidebarListItem">Bilim</li>
        </ul>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">TAKİP EDİN</span>
        <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-square-facebook"></i>
            <i className="sidebarIcon fa-brands fa-square-twitter"></i>
            <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
            <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
        </div>
    </div>
  )
}

export default SideBar