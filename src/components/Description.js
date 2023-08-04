import styles from "./Description.module.css";
import { Component } from "react";

const RecipeAuthor = () => {
    let authorLink, authorPhoto, authorName;

    // Data for later:
    // authorLink = "https://en.wikipedia.org/wiki/Chef_Boyardee";
    // authorPhoto = "https://upload.wikimedia.org/wikipedia/en/thumb/1/15/Chefboyardeepic.jpg/220px-Chefboyardeepic.jpg";
    // authorName = "Ettore Boiardi"

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
               <h1>Recipe Title</h1>
               <p>Short recipe description</p>
            </div>
            <RecipeAuthor />
         </div>
        )
    }
}



export default RecipeDescription;