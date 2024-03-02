import styles from "./inputFood.module.scss";
const InputFood = ({ handleInput }) => {
    return (
        <input className={styles.inputSection} type="text" placeholder="Enter Food Item" onKeyDown={handleInput} />
    );
}

export default InputFood;