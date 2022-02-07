import { Link } from "react-router-dom";
import BedComponent from "./icons/Bed";
import LivingRoomComponent from "./icons/LivingRoom";
import KitchenComponent from "./icons/KitchenComponent";
import BathRoomComponent from "./icons/Bath";
import OutdoorComponent from "./icons/Outdoor";
import BalconyComponent from "./icons/Balcony";

const Card = (props) => {
    let cards = [{
        image: <BedComponent/>,
        title: 'Bed room',
        lights: '4 lights',
        id: 1
    },
    {
        image: <LivingRoomComponent/>,
        title: 'Living room',
        lights: '2 lights',
        id: 2
    },
    {
        image: <KitchenComponent/>,
        title: 'Kitchen',
        lights: '5 lights',
        id: 3
    },
    {
        image: <BathRoomComponent/>,
        title: 'Bathroom',
        lights: '1 light',
        id: 4
    },
    {
        image: <OutdoorComponent/>,
        title: 'Outdoor',
        lights: '5 lights',
        id: 5
    },
    {
        image: <BalconyComponent/>,
        title: 'Balcony',
        lights: '2 lights',
        id: 6
    }]
    return (
    <div className="grid grid-cols-2 gap-5">
        {cards.map((card) => (
                <Link to={`/rooms/${card.id}`} className="w-[100%]">
                <div className="rounded-xl p-3 shadow-xl" key={card.id}>
                    <div className="mb-4">
                        {card.image}
                    </div>
                    <p className="text-[19pt]">{card.title}</p>
                    <p className="text-[13pt] text-[#FFA939]">{card.lights}</p>
                </div>
                </Link>
            ))}
    </div>
    );
}
 
export default Card;