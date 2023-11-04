const RecipeCard =({calories,image,ingredients,label})=>{

    
    return <div className="recipe">
        <h1>{label}</h1>
        <ul>
            {ingredients.map((item,idx)=> <li key={idx}>{item.text}</li>)}
        </ul>   
            <img src={image} height ={200}  width={200} className="image"/>
            <h4>Calories - {calories}Kcal</h4>
        
    </div>
}

export default RecipeCard