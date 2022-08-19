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
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { CardContext } from "../context/cardContext";
import axios from "axios";

const HeaderDetails = () => {

    const {roomId} = useParams()
    const {cardData} = useContext(CardContext)

    const [roomData, setRoomData] = useState({title: 'Bed room'})
    const [lights, setLights] = useState()
    const [text, setText] = useState('lights')
    
    useEffect(() => {
        axios.get(`http://192.168.8.100/api/MujQ7it6o5Kl-wVXp9pDWX7d3x9DsnY7rynghzfN/groups/${roomData.room}`).then(response => {
            setLights(response.data.lights.length)

            if(response.data.lights.length === 1){
                setText('light')
            }
        })
    }, [roomData])

    useEffect(() => {
        cardData.forEach((e) => {
            if(e.roomId === parseInt(roomId)){
                setRoomData(e)
            }
        });
    }, [roomId, cardData, setRoomData])


    return (
        <header className="bg-[#0A4DA2] h-72 relative">
            <div className="pt-[15%] pl-6 flex justify-between relative">
                <Link to='/'>
                    <h1 className="text-white text-3xl font-medium flex"><BiArrowBack/>{roomData.title}</h1>
                    <motion.p initial={{y: -50, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 1}} className="text-[#FFD239] text-[19px]">{`${lights} ${text}`}</motion.p>
                </Link>
                <div></div>
            </div>
            <motion.div initial={{x: 500}} animate={{x: 0}} transition={{duration: 1}} className="flex overflow-auto whitespace-nowrap mt-[10%]">
                <LightButtonWhite icon={<LightbulbIcon/>} text='Main Light'/>
                <LightButtondark icon={<DeskComponent/>} text='Desk light'/>
                <LightButtonWhite icon={<SimpleBed/>} text='Bed Light'/>
                <LightButtondark icon={<DeskComponent/>} text='Extra light'/>
            </motion.div>
            <LampComponent/>
            <Bubble/>
            <BubbleThree/>
        </header>
    );
}
 
export default HeaderDetails;