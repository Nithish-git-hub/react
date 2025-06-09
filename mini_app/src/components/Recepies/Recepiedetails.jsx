// import React from 'react'
// import { data } from "./Recepiesdata"
// import { useParams } from 'react-router-dom'
// const Recepiedetails = () => {
//     const params=useParams()
//     console.log(params)
//   return (
//     <div>
//         {/* <h2>{params.id}</h2> */}
//     </div>
//   )
// }

// export default Recepiedetails


import React from 'react';
import { data } from "./Recepiesdata";
import { useParams } from 'react-router-dom';
import './Recepiedetails.css'
import Recepie from './Recepie';
import Wishlist from '../Navbar/Wishlist';

const Recepiedetails = () => {
  const { id } = useParams();
  const recipeId = parseInt(id);
  const recipe = data.recipes.find(r => r.id === recipeId);
  const cartitems=(abc)=>{
    alert("items added to cart successfully")
    const allcartitems=JSON.parse(localStorage.getItem("cartitems")) || []
    allcartitems.push(abc)
    localStorage.setItem("cartitems",JSON.stringify(allcartitems))
  }

  const wishlistitems=(abc)=>{
    alert("items added to wishlist successfully")
    const allcartitems=JSON.parse(localStorage.getItem("wishlistitems")) || []
    allcartitems.push(abc)
    localStorage.setItem("wishlistitems",JSON.stringify(allcartitems))
  }

  if (!recipe) {
    return <h2>Recipe not found</h2>;
  }
  return (
    <div className='recipe-details'>
        <div className='image'>
            <h2>{recipe.name}</h2>
            <img src={recipe.image} alt={recipe.name} />
        </div>
      
      <div className='text'>
        <h3>Ingredients:</h3>
        <ul>
            {recipe.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h3>prepTimeMinutes:{recipe.prepTimeMinutes}</h3>
          <h3>cookTimeMinutes:{recipe.cookTimeMinutes}</h3>
          <h3>serves:{recipe.servings}</h3>
          <br /><br /><br /><br />
          <span onClick={()=>cartitems(recipe)} className='cart'>ADD To CART</span>
          <span onClick={()=>wishlistitems(recipe)} className='cart'>WISHLIST</span>
          
      </div>
    </div>
  );
};

export default Recepiedetails;