import { CiStopwatch } from "react-icons/ci";
import { FaFire } from "react-icons/fa";

const CookItem = ({cookItem}) => {
    // const {recipe_id,recipe_name,short_description,ingredients,preparing_time,calories,recipe_image} = cookItem
    const {recipe_image,recipe_name,short_description,ingredients,preparing_time,calories} = cookItem
    return (
        <div className="border">
            <div className="">
                <img src={recipe_image} alt="" />
                <div className="px-4">
                    <h2 className="font-bold text-xl py-3">{recipe_name}</h2>
                    <p className="text-[#878787] py-2">{short_description}</p>
                    <h2 className="font-bold text-xl py-2">Ingredients: 5</h2>
                    <ul className="px-4" style={{ listStyleType: 'disc' }}>
                        {
                            ingredients.map((item,index) => <li key={index}>{item}</li>)
                        }
                    </ul>
                    <div className="flex justify-between py-4">
                        <div className="flex gap-2">
                            <i className="text-xl"><CiStopwatch></CiStopwatch></i>
                            <h2>{preparing_time}</h2>
                        </div>
                        <div className="flex gap-2">
                            <i className="text-xl"> <FaFire></FaFire></i>
                            <h2>{calories}</h2>
                        </div>
                    </div>
                    <div className="py-4">
                        <button className="bg-[#4ade80] px-10 py-4 rounded-full font-bold">Want to cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CookItem;