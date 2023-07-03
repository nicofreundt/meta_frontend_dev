import { Link } from "react-router-dom";
import "./style.css";

const Footer = () => {
  return (
    <footer>
      <section id="footerContent">
        <img id="logo_small" src="/logo_small.png" alt="logo" />
        <section id="footerInfo">
          <div className="">
            <dl id="bottom-nav" className="ls-none">
              <dt>Doormat Navigation</dt>
              <dd><Link className="td-none" to="/">Home</Link></dd>
              <dd><Link className="td-none" to="about">About</Link></dd>
              <dd><Link className="td-none" to="/menu">Menu</Link></dd>
              <dd><Link className="td-none" to="/reservations">Reservations</Link></dd>
              <dd><Link className="td-none" to="/order_online">Order Online</Link></dd>
              <dd><Link className="td-none" to="/login">Login</Link></dd>
            </dl>
          </div>
          <div className="">
            <dl>
              <dt>Contact</dt>
              <dd>Little Lemon AG</dd>
              <dd>+49 123 456789</dd>
              <dd>info@littlelemon.com</dd>
            </dl>
          </div>
          <div className="">
            <dl>
              <dt>Social Media Links</dt>
              <dd><a>Facebook</a></dd>
              <dd><a>LinkedIn</a></dd>
              <dd><a>Github</a></dd>
            </dl>
          </div>
        </section>
      </section>
    </footer>
  )
}
export default Footer