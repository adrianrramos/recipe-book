import styles from "./recipe-card.module.css";
import Link from "next/link";

export default function RecipeCard({ recipe: { title, imageURL, id } }) {
    return (
        <Link href={`/dashboard/recipe/${id}`}>
            <div className={styles.container}>
                <img src={imageURL} className={styles.image} />
                <p>{title}</p>
            </div>
        </Link>
    );
}
