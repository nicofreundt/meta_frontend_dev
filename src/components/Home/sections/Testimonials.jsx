const Testimonials = () => {
  return (
    <section>
      <h2>Testimonials</h2>
      <div id="testCards">
        <article className="card">
          <img className="testImage" src="/person_a.jpg" alt="" />
          <h3>Person A</h3>
          <div className="rating">
            <img src="/star.jpg" alt="" /><img src="/star.jpg" alt="" /><img src="/star.jpg" alt="" /><img src="/star.jpg" alt="" /><img src="/star.jpg" alt="" />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </article>
        <article className="card">
          <img className="testImage" src="/person_b.jpg" alt="" />
          <h3>Person B</h3>
          <div className="rating">
            <img src="/star.jpg" alt="" /><img src="/star.jpg" alt="" /><img src="/star.jpg" alt="" /><img src="/star.jpg" alt="" /><img src="/star.jpg" alt="" />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </article>
        <article className="card">
          <img className="testImage" src="/person_c.jpg" alt="" />
          <h3>Person C</h3>
          <div className="rating">
            <img src="/star.jpg" alt="" /><img src="/star.jpg" alt="" /><img src="/star.jpg" alt="" /><img src="/star.jpg" alt="" /><img src="/star.jpg" alt="" />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </article>
        <article className="card">
          <img className="testImage" src="/person_d.jpg" alt="" />
          <h3>Person D</h3>
          <div className="rating">
            <img src="/star.jpg" alt="" /><img src="/star.jpg" alt="" /><img src="/star.jpg" alt="" /><img src="/star.jpg" alt="" /><img src="/star.jpg" alt="" />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </article>
      </div>
    </section>
  )
}
export default Testimonials