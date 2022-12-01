import dataDishes from "../../data/dataDishes";
import Dish from "./Dish";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/dishesSlice";

const Dishes = () =>{
    
    const selectedCategory = useSelector(getSelectedCategory);
    
    return( <div >
    {dataDishes
    
    .filter(dish => {
        if (selectedCategory ==="ALL CATEGORIES") return true;
        
        return selectedCategory === dish.category;
    })
    
    .map(dish => <Dish dish={dish} key={dish.id} />)}
    
    </div>)
}

export default Dishes;