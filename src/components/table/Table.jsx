import TableItems from "./TableItems";

const Table = ({cookTable,handleRemoveItem,prepareRecipe,totalTime,totalCalory}) => {
    return (
        <div>
            <div className="">
                <h2 className="font-bold text-2xl text-center py-4">Want To Cook: {cookTable.length}</h2>
            </div>
            <div>
                <TableItems totalTime={totalTime} totalCalory={totalCalory}  handleRemoveItem={handleRemoveItem} cookingTable={cookTable} prepareRecipe={prepareRecipe}></TableItems>
            </div>
        </div>
    );
};

export default Table;