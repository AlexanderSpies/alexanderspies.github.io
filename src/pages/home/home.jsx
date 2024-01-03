import React from 'react';
import '../../css/index.css';
import foodVid from './imgs/Recipes.mp4';
import Drank from './imgs/Drinks.mp4'
import Upload from './imgs/Upload.mp4'

const Home = () => {
  return (
    <div className="home-container">
      <div className='Recipes'>
        <div className='sectionHeading'>
          <a href='/recipes'>
            <video className='video-background' autoPlay loop muted>
                <source src={foodVid} type='video/mp4' />
            </video>
            <h1>Kitchen Wisdom</h1>
            <p className='Info'>Embark on a heartwarming journey through generations of cherished recipes, where classic flavors and time-honored culinary traditions come together in perfect harmony. Our carefully curated collection brings a fresh and family-friendly twist to these beloved dishes, ensuring that everyone, from the littlest chef to the seasoned cook, finds joy in every bite.</p>
          </a>
        </div>
      </div>
      <div className="Drinks">
        <div className='sectionHeading'>
          <a href='/drinks'>
              <video className='video-background' autoPlay loop muted>
                  <source src={Drank} type='video/mp4' />
              </video>
              <h1>Shake Up Your Social Life</h1>
              <p className='Info'>Elevate your beverage game with a symphony of innovative cocktails that will awaken your senses and ignite your curiosity. Our drink recipes are more than just liquid refreshment; they are a fusion of unique flavors, tantalizing infusions, and well-guarded mixology secrets that promise to unlock a world of excitement.</p>
          </a>
          </div>
      </div>
      <div className="Upload">
        <div className='sectionHeading'>
          <a  href='/upload'>
              <video className='video-background' autoPlay loop muted>
                  <source src={Upload} type='video/mp4' />
              </video>
              <h1>Our Melting Pot</h1>
              <p className='Info'>Share the magic of your favorite recipes with us. Your culinary creations have the power to bring smiles, satisfaction, and togetherness. Let's make our community richer in flavors and experiences. Join in, inspire others, and become a part of our flavorful family. Start sharing your cherished recipe today, and let the joy of cooking connect us all!</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
