import styles from "./Description.module.css";
import { Component } from "react";

const RecipeAuthor = () => {
    let authorLink, authorPhoto, authorName;

    // Data:
    authorLink = "https://en.wikipedia.org/wiki/Chef_Boyardee";
    authorPhoto = "https://upload.wikimedia.org/wikipedia/en/thumb/1/15/Chefboyardeepic.jpg/220px-Chefboyardeepic.jpg";
    authorName = "Ettore Boiardi (Chef Boyardee)"

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Blog name</a> 
           </div>
        </div>
     );
}

class RecipeDescription extends Component {
    render() {
        return (
            <div> 
            <div>
               <h1>Recipe Title: Beef Ravioli</h1>
               <p>Short recipe description:</p>
               <p>Beef Ravioli, classic Italian dish made just as if it came out of the can from the 60s!</p>
            </div>
            <RecipeAuthor />
         </div>
        )
    }
}



export default RecipeDescription;