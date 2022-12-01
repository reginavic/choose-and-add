import { useDispatch } from 'react-redux';
import dataDishes from '../../data/dataDishes';
import { removeItemFromCart } from '../../redux/cartSlice';

const CartItem =({ cartItem })=>{

    const dishes= dataDishes.find(item => item.id === cartItem.dishId);
    const dispatch= useDispatch();
    
    return ( <div>
        <p> { dishes.name } </p>
        <p> { cartItem.quantity } portion(s)</p>
        <p>Price: $ { dishes.price * cartItem.quantity }</p>
        <span onClick ={ ()=> dispatch(removeItemFromCart({ cartItemId: cartItem.id }))}>
        <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt="food"/>  
        </span>
    </div>
    )
}

export default CartItem;