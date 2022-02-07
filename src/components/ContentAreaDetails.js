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

const ContentAreaDetails = () => {

    const changeColor = (e) => {
        let fullString = e.target.classList[0]
        let hexcode = fullString.slice(4, 11)
        console.log(hexcode);
        localStorage.setItem('color', hexcode)
    }
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
            <div onClick={changeColor} className="flex justify-around py-[20px]">
                <ChangeColorbutton/>
                <GreenButton/>
                <BlueButton/>
                <PurpleButton/>
                <PinkButton/>
                <OrangeButton/>
                <NewColorButton/>
            </div>
            <Heading text='Scenes'/>
            <div className="grid grid-cols-2 gap-5 pt-[20px]">
                <BirthdayScene/>
                <PartyScene/>
                <RelaxScene/>
                <FunScene/>
            </div>
        </section>
    );
}
 
export default ContentAreaDetails;