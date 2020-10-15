import styles from "./create-form.module.css";

export default function CreateForm({
    title,
    caption,
    ingredients,
    steps,
    changeTitle,
    changeCaption,
    changeIngredients,
    changeSteps,
}) {
    return (
        <div className={styles.container}>
            <form onSubmit={(e) => e.preventDefault()} className={styles.formContainer}>
                <input
                    value={title}
                    onChange={(e) => changeTitle(e.target.value)}
                    type="text"
                    name="title"
                    id="title-input"
                    placeholder="Write your title here..."
                />
                <input
                    value={caption}
                    onChange={(e) => changeCaption(e.target.value)}
                    type="text"
                    name="caption"
                    id="caption-input"
                    placeholder="Write your caption here..."
                />
                <input
                    value={ingredients}
                    onChange={(e) => changeIngredients(e.target.value)}
                    type="text"
                    name="ingredients"
                    id="ingredients-input"
                    placeholder="Write the ingredients here..."
                />
                <input
                    value={steps}
                    onChange={(e) => changeSteps(e.target.value)}
                    type="text"
                    name="steps"
                    id="steps-input"
                    placeholder="Write the recipe steps here..."
                />
                <input
                    type="text"
                    name="image input"
                    id="image input-input"
                    placeholder="Soon to become image uploader"
                />
                <button>Save Your Recipe</button>
            </form>
        </div>
    );
}
