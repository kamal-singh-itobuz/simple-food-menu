import styles from "./foodContainer.module.scss";
import FoodItem from "../FoodItem/FoodItem";
import { useState } from "react";
const FoodContainer = ({ items }) => {
    const [boughtItems, setBoughtItems] = useState([]); // we will set a different color for bought item
    const handleBuyClickFunction = (item) => {
        const newBoughtItems = [...boughtItems, item];
        setBoughtItems(newBoughtItems); 
    }

    return (
        <div className={styles.foodContainer}>
            {items.map(item => <FoodItem item = {item} bought={boughtItems.includes(item)} handleBuyClick = {() => handleBuyClickFunction(item)}/>)}
        </div>
    );
}

export default FoodContainer;