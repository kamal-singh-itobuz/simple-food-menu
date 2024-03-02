import InputFood from "./components/InputFood/InputFood";
import FoodContainer from "./components/FoodContainer/FoodContainer";
import styles from "./app.module.scss";
import { useState } from "react";
function App() {
    const [foodItems, setFoodItems] = useState(["Beer", "Kingfisher"]);
    function onKeyDown(e) {
        if(e.key === 'Enter') {
            const newFood = e.target.value;
            const newFoodItems = [newFood, ...foodItems];
            setFoodItems(newFoodItems);
            e.target.value = '';
        }
    }
    return (
        <div className={styles.mainContainer}>
            <h1>Food Menu</h1>
            <InputFood handleInput={(e) => onKeyDown(e)}></InputFood>
            <FoodContainer items={foodItems}></FoodContainer>
        </div>
    );
}

export default App
