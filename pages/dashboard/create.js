import Layout from '../../components/layouts/DashBoardLayout'
import CreateForm from '../../components/create_page/CreateForm'
import CreateDisplay from '../../components/create_page/CreateDisplay'
import styles from '../../styles/Create.module.css'
import { useEffect, useState } from 'react'

export default function Create() {
    const [title, setTitle] = useState("")
    const [caption, setCaption] = useState("")
    const [ingredients, setIngredients] = useState("")
    const [steps, setSteps] = useState("")

    useEffect(() => {
        let session_post = JSON.parse(localStorage.getItem("current_post"))

        if (session_post) {
            setTitle(session_post.title)
            setCaption(session_post.caption)
            setIngredients(session_post.ingredients)
            setSteps(session_post.steps)
        }
    }, [])

    useEffect(() => {
        let post = {
            title,
            caption,
            ingredients,
            steps
        }

        localStorage.setItem("current_post", JSON.stringify(post))
    }, [title, caption, ingredients, steps])


    return (
        <Layout>
            <div className={styles.container}>
                <CreateForm
                    title={title}
                    caption={caption}
                    ingredients={ingredients}
                    steps={steps}
                    changeTitle={setTitle}
                    changeCaption={setCaption}
                    changeIngredients={setIngredients}
                    changeSteps={setSteps}
                />
                <CreateDisplay title={title} caption={caption} ingredients={ingredients} steps={steps} />
            </div>
        </Layout>
    )
}