import AddItems from "./AddItems";

const TableItems = ({cookingTable,handleRemoveItem,prepareRecipe,totalTime,totalCalory}) => {
    return (
        <div>
            <div className="overflow-x-auto">
                {/* Want to Cook Table */}
                <table className="table"> 
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        cookingTable.map((addItem,index) => <AddItems key={index} ind={index} handleRemoveItem={handleRemoveItem} addItem={addItem}></AddItems>)
                    }
                    
                    </tbody>
                </table>
            </div>


            <div className="">
                <h2 className="font-bold text-2xl text-center py-6">Currently Cooking: {prepareRecipe.length}</h2>
            </div>
            <div className="overflow-x-auto">
                {/* Want to Cook Table */}
                <table className="table"> 
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        prepareRecipe.map((addItem,index) => (         
                        <tr key={index}>
                            <th>{index + 1}</th>
                            <td>{addItem.recipe_name}</td>
                            <td>{addItem.preparing_time} min</td>
                            <td>{addItem.calories} Calories</td>
                        </tr>
                    ))}
                    <tr className="border-none">
                        <th></th>
                        <td></td>
                        <td>Total Time : {totalTime}</td>
                        <td>Total Calories: {totalCalory}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TableItems;