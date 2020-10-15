import styles from "./create-display.module.css";

export default function CreateDisplay({ title, caption, ingredients, steps }) {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <p id="title-display" className={styles.title}>
                    {title}
                </p>
                <p id="caption-display" className={styles.caption}>
                    {caption}
                </p>
            </div>
            <div className={styles.media}>
                <p id="image-display">Image/Embedded Video goes here</p>
            </div>
            <div className={styles.body}>
                <p id="ingredients-display" className={styles.ingredients}>
                    {ingredients}
                </p>
                <p id="steps-display" className={styles.steps}>
                    {steps}
                </p>
            </div>
        </div>
    );
}
