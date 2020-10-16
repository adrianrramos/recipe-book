import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import api from '../../../lib/mock-api'
import Layout from '../../../components/layouts/DashBoardLayout'
import styles from '../../../styles/Recipe.module.css'

export default function RecipeShow() {
    const [title, setTitle] = useState("")
    const [caption, setCaption] = useState("")
    const [ingredients, setIngredients] = useState([])
    const [steps, setSteps] = useState("")
    const [imageURL, setImageURL] = useState("")

    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
        const recipe = api.getRecipe(id)

        if (recipe) {
            setTitle(recipe.title)
            setCaption(recipe.caption)
            setIngredients(recipe.ingredients.split(","))
            setSteps(recipe.steps)
            setImageURL(recipe.imageURL)
        }
    }, [id])

    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1>{title}</h1>
                    <p>{caption}</p>
                </div>
                <div className={styles.media}>
                    <img src={imageURL} />
                </div>
                <div className={styles.content}>
                    <ul>
                        {ingredients && ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
                    </ul>
                    <p>{steps}</p>
                </div>
            </div>
        </Layout>
    )
}
