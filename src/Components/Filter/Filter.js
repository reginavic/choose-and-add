import { useDispatch, useSelector } from "react-redux";
import { getSelectedCategory, filterCategory } from "../../redux/dishesSlice";

const Filter =({category})=>{
    const dispatch = useDispatch();
    const selectedCategory = useSelector(getSelectedCategory);
    return( <div className="column">
    <p onClick={()=>{dispatch(filterCategory(category))}} className={selectedCategory === category ?  'categoryButtonSelected categoryButton' : 'categoryButton'}> {category}</p>
    </div>
    
    )
}


export default Filter;