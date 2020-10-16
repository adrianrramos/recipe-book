import styles from "./recipe-card.module.css";

export default function RecipeCard({ recipe: { title, imageURL } }) {
    return (
        <div className={styles.container}>
            <img src={imageURL} className={styles.image} />
            <p>{title}</p>
        </div>
    );
}
