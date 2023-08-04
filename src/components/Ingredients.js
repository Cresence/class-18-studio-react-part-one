import styles from "./Ingredients.module.css";

export default function RecipeIngredients() {
    let ingredients = ["ing #1", "ing #2", "ing #3", "ing #4", "ing #5"]
    return (
        <div>
        <h3>Recipe Ingredients</h3>
        <ul className = {styles.ingredientList}>
           <li>{ingredients[0]}</li>
           <li>{ingredients[1]}</li>
           <li>{ingredients[2]}</li>
           <li>{ingredients[3]}</li>
           <li>{ingredients[4]}</li>
        </ul>
     </div>
    )
}