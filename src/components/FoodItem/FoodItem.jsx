import styles from "./foodItem.module.scss";

function FoodItem({item, bought, handleBuyClick}) {
    return (
    <div className={`${styles.foodItem} ${bought && styles.active}`}> 
        <p className={styles.foodName}>{item}</p>
        <button className={styles.buyButton} onClick={handleBuyClick}>Buy</button>
    </div>);
}
export default FoodItem;