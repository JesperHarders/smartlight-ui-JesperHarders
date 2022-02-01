import Bubble from "./Bubble";
import BubbleThree from "./BubbleThree";
import BubbleTwo from "./BubbleTwo";
import ProfilePicture from "./ProfilePicture"

const HeaderComponent = () => {
    return (
        <header className="bg-[#0A4DA2] h-48 relative">
            <div className="flex justify-around">
                <h1 className="text-white text-3xl font-medium">Control <br/> Panel</h1>
                <ProfilePicture/>
            </div>
            <Bubble/>
            <BubbleTwo/>
            <BubbleThree/>
        </header>
    );
}
 
export default HeaderComponent;