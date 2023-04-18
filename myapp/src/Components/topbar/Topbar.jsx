import { Link } from "react-router-dom";
import "./topbar.css"

function Topbar() {

    const user = false;

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
                <li className="topListItem">
                    <Link className="link" to="/">ANA SAYFA</Link>
                </li>
                <li className="topListItem">
                    <Link className="link" to="/about">HAKKIMIZDA</Link>
                </li>
                <li className="topListItem">
                    <Link className="link" to="/contact">İLETİŞİM</Link>
                </li>
                <li className="topListItem">
                    <Link className="link" to="/write">YAZ</Link>
                </li>
                <li className="topListItem">
                    {user && "ÇIKIŞ YAP"}
                </li>
            </ul>
        </div>
        <div className="topRight">
            {
                user ? (
            <img className="topImage" src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/login">GİRİŞ YAP</Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/register">KAYIT OL</Link>
                        </li>
                    </ul>
                )
            }
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  );
}

export default Topbar