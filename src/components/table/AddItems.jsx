const AddItems = ({addItem,ind,handleRemoveItem}) => {
    return (  
            <tr>
                <th>{ind + 1}</th>
                <td>{addItem.recipe_name}</td>
                <td>{addItem.preparing_time} min</td>
                <td>{addItem.calories} Calories</td>
                <td><button onClick={() => handleRemoveItem(addItem.recipe_id,addItem.preparing_time,addItem.calories)} className="bg-[#4ade80] px-8 py-3 rounded-full font-bold text-white">Preparing</button></td>
            </tr>
    );
};

export default AddItems;