import { Link } from "react-router-dom"
import "./style.css"

const Header = () => {
  return (
    <header>
      <section id="headerContent">
        <img src="/Logo.svg" alt="logo"/>
        <nav>
          <ul id="top-nav" className="ls-none">
            <li><Link className="td-none" to="/">Home</Link></li>
            <li><Link className="td-none" to="/about">About</Link></li>
            <li><Link className="td-none" to="/menu">Menu</Link></li>
            <li><Link className="td-none" to="/reservations">Reservations</Link></li>
            <li><Link className="td-none" to="/order_online">Order online</Link></li>
            <li><Link className="td-none" to="/login">Login</Link></li>
          </ul>
        </nav>
      </section>
    </header>
  )
}

export default Header