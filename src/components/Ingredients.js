import styles from "./Ingredients.module.css";

export default function RecipeIngredients() {
    let ingredients = ["pasta", "filling", "sauce"]
    let pasta = {
        1: "2 1/4 cups all-purpose flour",
        2: "4 eggs",
        3: "1 1/2 tablespoon semolina flour, plus more for dusting",
        4: "1 1/2 tablespoon extra-virgin olive oil",
        5: "3/4 teaspoon fine sea salt",
        6: "1/8 teaspoon nutmeg"
    };
    let filling = {
        1: "1 pound ground beef",
        2: "1/4 cup Parmesan cheese, grated",
        3: "1 tablespoon onion powder",
        4: "1 tablespoon garlic powder",
        5: "kosher salt and pepper, to taste",
    }
    let sauce = {
        1: "1/2 pound ground beef",
        2: "1 (12 oz.) can tomato soup, undiluted",
        3: "2/3 cup cheddar cheese",
        4: "1/2 cup tomato sauce",
        5: "1/3 cup water",
        6: "1 teaspoon dried parsley",
        7: "1/2 teaspoon garlic powder",
        8: "1/2 teaspoon onion powder",
        9: "1 pinch sugar",
        10: "kosher salt and pepper, to taste"
    }
    return (
        <div>
        <h3>Recipe Ingredients</h3>
        <ul className = {styles.ingredientList}>
           <li>{ingredients[0]}</li>
           <li>{ingredients[1]}</li>
           <li>{ingredients[2]}</li>
           {/* <li>{ingredients[3]}</li>
           <li>{ingredients[4]}</li> */}
        </ul>
     </div>
    )
}