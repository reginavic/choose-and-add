import { getCartItems, getTotalPrice } from "../../redux/cartSlice";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = () =>{
    const cartItems= useSelector(getCartItems);
    const totalPrice= useSelector(getTotalPrice);
    return( <div className="column">
        <img className="cartIcon" alt="food" src="https://img.icons8.com/external-flaticons-flat-flat-icons/512/external-shopping-basket-technology-ecommerce-flaticons-flat-flat-icons.png"/> 
        <h3>TOTAL: $ { totalPrice }</h3>
        {cartItems.map(cartItem => <CartItem cartItem={ cartItem } key={cartItem.id}/>)}   
    </div>
    );
}

export default Cart;