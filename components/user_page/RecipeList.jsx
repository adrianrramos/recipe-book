import { useEffect, useState } from "react";
import api from "../../lib/mock-api";

import styles from "./recipe-list.module.css";

export default function RecipeList({ user_id }) {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const recipes_data = api.getUserRecipes(user_id);
        setRecipes(recipes_data);
    }, [user_id]);

    return <div className={styles.container}>This is the recipe list</div>;
}
