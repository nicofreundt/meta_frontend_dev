const Highlights = () => {
  return (
    <section>
        <div id="highlightHeading">
            <h2>Specials</h2>
            <button>Online Menu</button>
        </div>
        <div id="highlightWrapper">
            <article className="card">
                <div className="cardImageWrapper">
                    <img src="/greek salad.jpg" className="cardImage"/>
                </div>
                <div>
                    <div>
                        <div className="cardHeader">
                            <h3>Greek Salad</h3>
                            <span>$12.99</span>
                        </div>
                        <p className="cardContent">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                    </div>
                    <div className="cardFooter">
                        <p>Order a delivery</p>
                    </div>
                </div>
            </article>
            <article className="card">
                <div className="cardImageWrapper">
                    <img src="/bruchetta.svg" className="cardImage"/>
                </div>
                <div>
                    <div>
                        <div className="cardHeader">
                            <h3>Bruchetta</h3>
                            <span>$5.99</span>
                        </div>
                        <p className="cardContent">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                    </div>
                    <div className="cardFooter">
                        <p>Order a delivery</p>
                    </div>
                </div>
            </article>
            <article className="card">
                <div className="cardImageWrapper">
                    <img src="/lemon dessert.jpg" className="cardImage"/>
                </div>
                <div>
                    <div>
                        <div className="cardHeader">
                            <h3>Lemon Dessert</h3>
                            <span>$5.00</span>
                        </div>
                        <p className="cardContent">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                    </div>
                    <div className="cardFooter">
                        <p>Order a delivery</p>
                    </div>
                </div>
            </article>
        </div>
    </section>
  )
}
export default Highlights