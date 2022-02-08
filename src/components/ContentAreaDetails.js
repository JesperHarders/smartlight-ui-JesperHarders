import LightbulbTwo from "./icons/LightbulbTwo";
import LightbulbThree from "./icons/LightbulbThree";
import ChangeColorbutton from "./changeColorButtons/ChangeColorButton";
import GreenButton from "./changeColorButtons/GreenButton";
import BlueButton from "./changeColorButtons/BlueButton";
import PurpleButton from "./changeColorButtons/PurpleButton";
import PinkButton from "./changeColorButtons/PinkButton";
import OrangeButton from "./changeColorButtons/OrangeButton";
import NewColorButton from "./changeColorButtons/NewColorButton";
import Heading from "./Heading";
import BirthdayScene from "./scenes/BirthdayScene";
import PartyScene from "./scenes/PartyScene";
import RelaxScene from "./scenes/RelaxScene";
import FunScene from "./scenes/FunScene";
import { motion } from "framer-motion";

const ContentAreaDetails = ({handleColor}) => {
    return (
        <section className="pt-[20px] px-[15px]">
            <Heading text='Intensity'/>
            <div className="flex justify-around py-[20px]">
                <LightbulbTwo/>
                <form>
                    <input className="w-[300px]" type='range' min='0' max='100'/>
                </form>
                <LightbulbThree/>
            </div>
            <Heading text='Colors'/>
            <motion.div animate={{width: 350}} transition={{duration: 1}} onClick={handleColor} className="flex justify-around py-[20px] w-[130px]">
                <ChangeColorbutton/>
                <GreenButton/>
                <BlueButton/>
                <PurpleButton/>
                <PinkButton/>
                <OrangeButton/>
                <NewColorButton/>
            </motion.div>
            <Heading text='Scenes'/>
            <motion.div animate={{width: 350}} transition={{duration: 1}} className="grid grid-cols-2 gap-5 pt-[20px] w-[90px]">
                <BirthdayScene/>
                <PartyScene/>
                <RelaxScene/>
                <FunScene/>
            </motion.div>
        </section>
    );
}
 
export default ContentAreaDetails;