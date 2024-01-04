import React from 'react';
import '../../css/index.css';
import triangleBackground from '../../imgs/5169614.png'

const Home = () => {
  return (
    <div className="home-container">
      <div className='Recipes'>
        <div className='sectionHeading'>
          <a href='/recipes'>
            <h1>Unleash the Flavours of Homely Recipes</h1>
            <p className='Info'>Introducing vintage, heart-touching kitchen specials that have been passed down for generations.</p>
          </a>
        </div>
      </div>
      <div className="Drinks">
        <div className='sectionHeading'>
          <a href='/drinks'>
              <h1>For Drink Connoisseurs and Amateurs Alike!</h1>
              <p className='Info'>Savor intoxicating beverages, from local gems to international favorites that’ll tingle your taste buds.</p>
          </a>
          </div>
      </div>
      <div className="triangleContainer">
        <img className='triangle' src={triangleBackground} alt="Triangle Background" />
        <div className="overlay">
          <h2>DECADES OF DELICIOUSNESS</h2>
        </div>
      </div>
      <div className="Upload">
        <div className='sectionHeading'>
          <a  href='/upload'>
              <h1>Our Melting Pot</h1>
              <p className='Info'>Share the magic of your favorite recipes with us. Your culinary creations have the power to bring smiles, satisfaction, and togetherness. Let's make our community richer in flavors and experiences. Join in, inspire others, and become a part of our flavorful family. Start sharing your cherished recipe today, and let the joy of cooking connect us all!</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
