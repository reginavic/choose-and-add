import Filter from "./Filter";

const AllCategories = () =>{
    return( <div className="column">
        
        <h1>CHOOSE AND BUY!</h1>
        
        {['ALL CATEGORIES', 'MILKSHAKE', 'COFFEE', 'TEA', 'JUICE' ,'DRINK'].map(category => <Filter key={category.toString()} category={category} /> )}
        
        </div>
    
    );
}

export default AllCategories;