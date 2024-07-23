import logo from "/Users/khachkarapetyan/Desktop/skills/src/img/logo.jpeg"
import "./Nav.css"
export default function Nav() {
    return (
        <div className="navbar">
            <div className="logo">
                <img className="logo" src={logo} alt="logo" width={50} />
            </div>
            <a id="little" href="">Menu</a>
            <div className="menu">
                <a href="">Appartements</a>
                <a href="">Contact Us</a>
                <a href="">Images</a>
                <a><button className="primaryButton">Get Start</button></a>
            </div>
            <button id="little-btn" className="primaryButton">Get Start</button>
        </div>
    )
}