import { useNavigate } from "react-router-dom"

const Hero = () => {
  const nav = useNavigate();

  return (
    <section id="heroSection">
      <div id="heroInfo">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button onClick={() => nav('reservations')}>Reserve a table</button>
      </div>
      <div id="heroImageWrapper">
        <img src="/restauranfood.jpg" alt="Restaurant Food" />
      </div>
    </section>
  )
}
export default Hero