import styles from "./Description.module.css";
import { Component } from "react";

class RecipeAuthor extends Component {
    
    // Data for later:
    // authorLink = "https://en.wikipedia.org/wiki/Chef_Boyardee";
    // authorPhoto = "https://upload.wikimedia.org/wikipedia/en/thumb/1/15/Chefboyardeepic.jpg/220px-Chefboyardeepic.jpg";
    // authorName = "Ettore Boiardi"
    render() {
        let authorLink, authorPhoto, authorName;
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
}

export default RecipeAuthor;