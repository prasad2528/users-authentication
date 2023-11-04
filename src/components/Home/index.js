import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="home-container">
    <Header />
    <div className="main-container">
      <div className="text-container">
        <h1 className="heading">Clothes That Get You Noticed</h1>
        <p className="paragraph">
          Fashion is part of the daily air and it does not quite help that it
          changed all the time. Clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you been and heard that way
          you are so, celebrate the seasons new and exciting fashion in your own
          way.
        </p>
        <button type="button" className="shop-now">
          Shop Now
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
        className="home-logo"
      />
    </div>
  </div>
)
export default Home
