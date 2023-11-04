import { useEffect, useState } from "react"
import Input from "./Components/Input"
import RecipeCard from "./Components/RecipeCard"


const APP_ID = '6873cf1d'
const APP_KEY = '928aa6934b5070a01284e9e903959bfd'

const App= ()=>{

   const [recipeCard, setRecipeCard] = useState([])
   const [type, setType] = useState('Paneer')




   useEffect (()=>{
      fetch(`https://api.edamam.com/search?q=${type}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        .then(res => res.json())
        .then(data => setRecipeCard(data.hits))
        .catch(err=> console.log(err))
 
  },[type])

   return <div>
    <Input  setType={setType}/>
     {recipeCard.map((item,idx)=>{
      
      return <RecipeCard key={idx}  {...item.recipe}/>
     })}
   </div>
}

export default App