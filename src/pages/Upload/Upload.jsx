import React, { useState } from 'react';
import Axios from 'axios';
import '../../css/index.css';

const Uploads = () => {
    const [title, setTitle] = useState('');
    const [cookTime, setCookTime] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [formValid, setFormValid] = useState(true);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(`Title: ${title}`);
      Axios.post('http://localhost:5000/insert', {
        title,
        cookTime,
        ingredients,
        instructions,
        date: new Date().getTime(),
      })
        .then((response) => {
          console.log(response.data);
          // Re-setting form values after submission
          setTitle('');
          setCookTime('');
          setIngredients('');
          setInstructions('');
        })
        .catch((error) => {
          console.error('Error submitting form:', error);
        });
    };
  
    return (
     <div className='testing'>   
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
  
        <label>Cook Time:</label>
        <input type="text" value={cookTime} onChange={(e) => setCookTime(e.target.value)} />
  
        <label>Ingredients:</label>
        <textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
  
        <label>Instructions:</label>
        <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} />
  
        <button type="submit">Submit</button>
      </form>
    </div>
    );
  };
  
  export default Uploads;