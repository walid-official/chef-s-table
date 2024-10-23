import { VscAccount } from "react-icons/vsc";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
    return (
        <div className="lg:flex lg:justify-between text-center py-8 items-center">
            <div className="">
                <h2 className="font-bold text-2xl">Chefs Table</h2>
            </div>
                <ul className="flex gap-8 justify-center my-4 lg:my-0">
                    <li className="text-[#150B2BB3] font-bold"> <a href="">Home</a></li>
                    <li className="text-[#150B2BB3] font-bold"> <a href="">Recipes</a></li>
                    <li className="text-[#150B2BB3] font-bold"> <a href="">About</a></li>
                    <li className="text-[#150B2BB3] font-bold"> <a href="">Search</a></li>
                </ul>
            <div className="flex justify-center items-center sm:gap-2 gap-2">
                <div className="relative">
                    <input className="sm:px-10 px-8 w-60 sm:w-full  py-4 font-bold bg-[#f3f4f6] rounded-full" type="text" placeholder="Search" />
                    <div className="absolute top-4 left-2">
                        <button className="text-2xl"><IoSearch></IoSearch></button>
                    </div>
                </div>
                <button className="bg-[#4ade80] min-w-12 min-h-12 rounded-full flex items-center justify-center text-white text-2xl"><VscAccount></VscAccount></button>
                
            </div>
        </div>
    );
};
export default Navbar;