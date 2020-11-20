

const field = []

export const addPlant = (seed) => {
  if (Array.isArray(seed)){
    for (const seeds of seed){
     field.push(seeds)
     
    }
  }else{
    
     field.push(seed) 
     
  }
  return field
}

export const usePlants = () => {
  
  return field.slice()
  
}