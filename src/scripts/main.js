console.log("Welcome to the main module")

import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

createAsparagus()
createCorn()
createPotato()
createSoybean()
createSunflower()
createWheat()



import { createPlan } from "./plan.js"
const yearlyPlan = createPlan()
console.log(yearlyPlan)