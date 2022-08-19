import { Link } from "react-router-dom";
import BedComponent from "./icons/Bed";
import LivingRoomComponent from "./icons/LivingRoom";
import KitchenComponent from "./icons/KitchenComponent";
import BathRoomComponent from "./icons/Bath";
import OutdoorComponent from "./icons/Outdoor";
import BalconyComponent from "./icons/Balcony";
import { useContext, useEffect, useState } from "react";
import { CardContext } from "../context/cardContext";
import axios from "axios";
import EntreComponent from "./icons/Entre";

const Card = (props) => {

    const [bedRoomLights, setBedRoomLights] = useState()
    const [livingRoomLights, setLivingRoomLights] = useState()
    const [kitchen, setKitchenLights] = useState()
    const [bathroomLights, setBathroomLights] = useState()
    const [spaLights, setSpaLights] = useState()
    const [balconyLights, setBalconyLights] = useState()
    const [entreLights, setEntreLights] = useState()
    const [spiseStueLights, setSpiseStueLights] = useState()

    useEffect(() => {
        axios.get('http://192.168.8.100/api/MujQ7it6o5Kl-wVXp9pDWX7d3x9DsnY7rynghzfN/groups').then(response => {
            setBedRoomLights(response.data[21].lights.length + ' ' + 'lights')
            setLivingRoomLights(response.data[13].lights.length + ' ' + 'lights')
            setKitchenLights(response.data[11].lights.length + ' ' + 'lights')
            setBathroomLights(response.data[8].lights.length + ' ' + 'light')
            setSpaLights(response.data[1].lights.length + ' ' + 'light')
            setBalconyLights(response.data[4].lights.length + ' ' + 'lights')
            setEntreLights(response.data[20].lights.length + ' ' + 'light')
            setSpiseStueLights(response.data[2].lights.length + ' ' + 'lights')
        })
    }, [])
    const test = bedRoomLights
    let cards = [{
        image: <BedComponent/>,
        title: 'Bed room',
        lights: test,
        room: '21',
        roomId: 1
    },
    {
        image: <LivingRoomComponent/>,
        title: 'Living room',
        lights: livingRoomLights,
        room: '13',
        roomId: 2
    },
    {
        image: <KitchenComponent/>,
        title: 'Kitchen',
        lights: kitchen,
        room: '11',
        roomId: 3
    },
    {
        image: <BathRoomComponent/>,
        title: 'Bathroom',
        lights: bathroomLights,
        room: '8',
        roomId: 4
    },
    {
        image: <OutdoorComponent/>,
        title: 'Spa',
        lights: spaLights,
        room: '1',
        roomId: 5
    },
    {
        image: <BalconyComponent/>,
        title: 'Balcony',
        lights: balconyLights,
        room: '4',
        roomId: 6
    },
    {
        title: "Entré",
        lights: entreLights,
        room: '20',
        roomId: 7
    },
    {
        title: 'Spise stue',
        lights: spiseStueLights,
        room: '2',
        roomId: 8
    }]

    const {setCardData} = useContext(CardContext)
    useEffect(() => {
        setCardData(cards)
    }, [setCardData])
    return (
    <div className="grid grid-cols-2 gap-5">
        {cards.map((card) => (
                <Link to={`/${card.roomId}`} className="w-[100%]" key={card.roomId}>
                <div className="rounded-xl p-3 shadow-xl">
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