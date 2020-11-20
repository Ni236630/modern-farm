// import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
// import { createPotato } from "./seeds/potato.js"
// import { createSoybean } from "./seeds/soybean.js"
// import { createSunflower } from "./seeds/sunflower.js"
// import { createWheat } from "./seeds/wheat.js"
import { createPlan } from "./plan.js"
import { addPlant } from "./field.js"
import { usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"


// createAsparagus()
const corn = createCorn()
// createPotato()
// createSoybean()
// createSunflower()
// createWheat()

//testing from main to see if we have created an yearly plan
const yearlyPlant = createPlan()
console.log("test: yearly plan from main",yearlyPlant)



// testing usePlants function 
// const check = usePlants()
// const addedCornTest = addPlant(corn)
// console.log("test: passing corn into usePlants",usePlants(addedCornTest))
 
 
 //creating a field from tractor
 
const plantedSeeds = plantSeeds(yearlyPlant)
const fieldOutPut = usePlants(plantedSeeds)
console.log("test: did itteration over flat array add plants?",fieldOutPut)
//console.log("seedsForField test", seedsForField)
