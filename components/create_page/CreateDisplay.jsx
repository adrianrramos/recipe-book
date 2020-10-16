import styles from "./create-display.module.css";

export default function CreateDisplay({ title, caption, ingredients, steps }) {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 id="title-display" className={styles.title}>
                    {title}
                </h1>
                <quote id="caption-display" className={styles.caption}>
                    {caption}
                </quote>
            </div>
            <div className={styles.media}>
                <p id="image-display">Image/Embedded Video goes here</p>
            </div>
            <div className={styles.body}>
                <ul>
                    {ingredients && ingredients.split(",").map((ingredient) => <li key={ingredient}>{ingredient}</li>)}
                </ul>
                <p id="steps-display" className={styles.steps}>
                    {steps}
                </p>
            </div>
        </div>
    );
}
