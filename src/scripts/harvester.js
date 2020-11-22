


//take output yield and add that many objects to array
//we are getting more than we planted.

const harvest = []
export const harvestPlants = (plants) => {
  // iterate over field to check for plants
  for (let plant of plants){
    
    //only worry about corn. half goes to ranchers (3)
    if (plant.type === "Corn")
    for (let i = 0; i < plant.output / 2; i++){
      harvest.push(plant)
    } else{
      for (let i = 0; i < plant.output; i++){
        harvest.push(plant)
    }
    
      
    }
    
     
  }
  return harvest
  
}