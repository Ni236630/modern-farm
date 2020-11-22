import { food } from "./seeds/foodHTML.js";
import { harvestPlants } from "./harvester.js";



export const catalog = (harvestedPlants) => {
  for ( let foods of harvestedPlants ) {
    const contentElement = document.querySelector(".container")
    const foodHTML = food(foods)
    contentElement.innerHTML += foodHTML
    
    
  }
  
  
}