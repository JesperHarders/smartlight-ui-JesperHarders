import Bubble from "./Bubble";
import BubbleThree from "./BubbleThree";
import BubbleTwo from "./BubbleTwo";
import { BiArrowBack } from "react-icons/bi";
import LampComponent from "./Lamp";
import LightButtonWhite from "./LightButtonWhite";
import LightbulbIcon from "./icons/Lightbulb";
import SimpleBed from "./icons/SimpleBed";
import LightButtondark from "./LightButtonDark";
import DeskComponent from "./icons/Desk";
import { Link } from "react-router-dom";

const HeaderDetails = () => {
    return (
        <header className="bg-[#0A4DA2] h-72 relative">
            <div className="pt-[15%] pl-6 flex justify-between relative">
                <Link to='/'>
                    <h1 className="text-white text-3xl font-medium flex"><BiArrowBack/> Bed<br/>Room</h1>
                    <p className="text-[#FFD239] text-[19px]">4 Lights</p>
                </Link>
                <div></div>
            </div>
            <div className="flex overflow-auto whitespace-nowrap mt-[10%]">
                <LightButtonWhite icon={<LightbulbIcon/>} text='Main Light'/>
                <LightButtondark icon={<DeskComponent/>} text='Desk light'/>
                <LightButtonWhite icon={<SimpleBed/>} text='Bed Light'/>
                <LightButtondark icon={<DeskComponent/>} text='Extra light'/>
            </div>
            <LampComponent/>
            <Bubble/>
            {/* <BubbleTwo/> */}
            <BubbleThree/>
        </header>
    );
}
 
export default HeaderDetails;