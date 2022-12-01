const ChangeQuantity = ({ quantity, setQuantity })=>{
    
    const addQuantity = ()=> {
        const newQuantity = quantity +1;
        setQuantity(newQuantity);
    }
    
    const removeQuantity = ()=> {        
        const newQuantity = quantity -1;
        if (newQuantity < 0) return ;
        setQuantity(newQuantity);
    }
    
    return(<div>
        <button className="mines" onClick={ removeQuantity }> - </button>
        <span> { quantity } </span>   
        <button className="plus" onClick={ addQuantity }> + </button>
    </div>)
}

export default ChangeQuantity;
