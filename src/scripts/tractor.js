
import { addPlant } from "./field.js";
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"




// passing plan into function to yeild plants

export const plantSeeds = (plan) => {
 //pulling the plan into the array and flattening it
  const seedplan = plan.flat()
  console.log("test: flatten array from function",seedplan)
  // iterating over the array inorder to add to field
  for (const plants of seedplan){
    if (plants === "Asparagus"){
      const asparagus = createAsparagus()
      addPlant(asparagus)
    }else if(plants === "Corn"){
      const corn = createCorn()
      addPlant(corn)
    }else if(plants === "Potato"){
      const potato = createPotato()
      addPlant(potato)
    }else if(plants === "Soybean"){
      const soybean = createSoybean()
      addPlant(soybean)
    }else if(plants === "Sunflower"){
      const sunflower = createSunflower()
      addPlant(sunflower)
    }else if(plants === "Wheat"){
      const wheat = createWheat()
      addPlant(wheat)
    }
   
    
   
  }
  
}
//test