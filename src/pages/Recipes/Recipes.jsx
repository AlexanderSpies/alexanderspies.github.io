import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../css/index.css';

const Recipes = () => {
    const [recipeTiles, setrecipeTiles] = useState([]);
    //pulling information stored in the backend to dynamically populate the cluster tab
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:5000/recipes');
          const data = response.data;
          if (data.success) {
            //logic for generating random question goes here 
            setrecipeTiles(data.data);
            console.log(data.data)

          } else {
            console.error('Error fetching data:', data.message);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
    
    const recipesPerRow = 4;
    const tableDataRows = [];
    
    for (let i = 0; i < recipeTiles.length; i += recipesPerRow) {
        tableDataRows.push(recipeTiles.slice(i, i + recipesPerRow));
    }

    return (
        <div className="page-container">
            <div className="info-block">
                <h1 className='heading'>Recipes</h1>
                <table className="recipe-table">
                    <tbody>
                        {tableDataRows.map((row, rowIndex) => (
                            <tr className='rowFormatting' key={rowIndex}>
                                {row.map((recipe, index) => (
                                    <td key={index} className='cellFormatting'>
                                        <div>{recipe.title}</div>
                                        <div>{recipe.type}</div>
                                        <div>{recipe.cookTime}</div>  
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Recipes;