import { Link } from "react-router-dom";
import Gear from "./icons/Gear";
import House from "./icons/House";
import LightbulbNav from "./icons/LightbulbNav";

const Navigation = () => {
    return (
        <nav className="mt-10">
            <div className="flex justify-evenly shadow-[-1px_-5px_5px_1px_rgba(0,0,0,0.3)] p-5">
                <Link to='/'>
                    <LightbulbNav/>
                </Link>
                <Link to='/'>
                    <House/>
                </Link>
                <Link to='/'>
                    <Gear/>
                </Link>
            </div>
        </nav>
    );
}
 
export default Navigation;