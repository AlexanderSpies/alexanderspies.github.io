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
        <div className='uploadContainer'>
              <h2 className='uploadInfo'>You're welcome to share your cherished family recipes here. Our digital repository promises your traditional meals will always be passed on.</h2>
              <a className='uploadInfo' href='/upload'> Upload Here</a>
        </div>
      </div>
  );
}

export default Home;
