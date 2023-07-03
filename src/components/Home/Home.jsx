import About from "./sections/About"
import Hero from "./sections/Hero"
import Highlights from "./sections/Highlights"
import Testimonials from "./sections/Testimonials"
import "./style.css"

const Home = () => {
  return (
    <article id="home">
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
    </article>
  )
}

export default Home