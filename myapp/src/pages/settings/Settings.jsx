import SideBar from "../../Components/sidebar/SideBar"
import "./settings.css"

function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form className="settingsForm">
                <label>Profil Fotağrafı</label>
                <div className="settingsPP">
                    <img src="https://images.pexels.com/photos/699624/forest-autumn-orange-colorful-699624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <label htmlFor="fileInput">
                        <i className="settingsPPIcon fa-regular fa-circle-user"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                </div>
                <label>Kullanıcı Adı</label>
                <input type="text" placeholder="admin"/>
                <label>Email</label>
                <input type="email" placeholder="admin@gmail.com"/>
                <label>Şifre</label>
                <input type="password"/>
                <button className="settingsSubmit">Güncelle</button>
            </form>
        </div>
        <SideBar />
    </div>
  )
}

export default Settings