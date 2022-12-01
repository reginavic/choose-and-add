import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";
import ChangeQuantity from "../Cart/ChangeQuantity";

const Dish = ({dish}) =>{

    const [quantity, setQuantity] = useState(0);
    const dispatch= useDispatch();

return(
    <div className="catalog">
        <h2>{dish.name}</h2>
        <img className="foto" src={`${dish.img}.jpg`} alt="food"/>
        <p className="descrpt">{dish.description}</p>
        <p className="price">$ {dish.price}</p>
        <div className="addBtn">
        <ChangeQuantity quantity={ quantity } setQuantity={ setQuantity }/>
        <button onClick = { () => {dispatch(addItemToCart({dish, quantity}));
        }}>Add to cart</button>   
        </div>
    </div>
)
}

export default Dish;