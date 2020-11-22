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
import { harvestPlants } from "./harvester.js";
import { catalog } from "./catalog.js";


// calling all the veggies
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
//calling harvester function
const plantedSeeds = plantSeeds(yearlyPlant)
const fieldOutPut = usePlants(plantedSeeds)
const getHarvest = harvestPlants(fieldOutPut)
const foodCatalog = catalog(getHarvest)
console.log("test: did itteration over flat array add plants?",fieldOutPut)
console.log("test: get harvest from field", getHarvest)
console.log("test: inject html?",foodCatalog )
//console.log("seedsForField test", seedsForField)


