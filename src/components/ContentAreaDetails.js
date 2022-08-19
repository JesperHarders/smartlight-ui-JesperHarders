import LightbulbTwo from "./icons/LightbulbTwo";
import LightbulbThree from "./icons/LightbulbThree";
import ChangeColorbutton from "./changeColorButtons/ChangeColorButton";
import NewColorButton from "./changeColorButtons/NewColorButton";
import Heading from "./Heading";
import BirthdayScene from "./scenes/BirthdayScene";
import PartyScene from "./scenes/PartyScene";
import RelaxScene from "./scenes/RelaxScene";
import FunScene from "./scenes/FunScene";
import { motion } from "framer-motion";
import { AiOutlinePoweroff } from "react-icons/ai";
import { useContext, useEffect, useMemo, useState } from "react";
import { CardContext } from "../context/cardContext";
import { useParams } from "react-router-dom";
import axios from "axios";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import _ from "lodash";

const ContentAreaDetails = () => {

    const [brightness, setBrightness] = useState(50)

    const changeBrightness = (value) => {
        setBrightness(value)
    }

    const throttle = useMemo(() => _.throttle(changeBrightness, 100), [])

    const {roomId} = useParams()
    const {cardData} = useContext(CardContext)

    const [roomData, setRoomData] = useState({title: 'Bed room'})

    
    useEffect(() => {
        cardData.forEach((e) => {
            if(e.roomId === parseInt(roomId)){
                setRoomData(e)
            }
        });
    }, [roomId, cardData, setRoomData])
    
    useEffect(() => {
        axios.put(`http://192.168.8.100/api/MujQ7it6o5Kl-wVXp9pDWX7d3x9DsnY7rynghzfN/groups/${roomData.room}/action`, {
            'bri': brightness
        })
    }, [roomData, brightness])

    const turnOnOff = () => {
        axios.get(`http://192.168.8.100/api/MujQ7it6o5Kl-wVXp9pDWX7d3x9DsnY7rynghzfN/groups/${roomData.room}`).then(response => {

            if(response.data.action.on === true){
                axios.put(`http://192.168.8.100/api/MujQ7it6o5Kl-wVXp9pDWX7d3x9DsnY7rynghzfN/groups/${roomData.room}/action`, {
                    'on': false
                })
            }else{
                axios.put(`http://192.168.8.100/api/MujQ7it6o5Kl-wVXp9pDWX7d3x9DsnY7rynghzfN/groups/${roomData.room}/action`, {
                    'on': true
                })
            }
        })
    }
    return (
        <section className="pt-[20px] px-[15px]">
            <div className="flex justify-between relative">
                <Heading text='Intensity'/>
                <div className="border border-solid border-black rounded-[50%] w-fit p-2 absolute bottom-[25px] right-[20px] bg-white" onClick={turnOnOff}><AiOutlinePoweroff/></div>
            </div>
            <div className="flex justify-around py-[20px]">
                <LightbulbTwo/>
                {/* <form>
                    <input className="w-[300px]" type='range' min='0' max='100'/>
                </form> */}
                <Slider defaultValue={brightness} onChange={throttle}/>
                <LightbulbThree/>
            </div>
            <Heading text='Colors'/>
            <motion.div animate={{width: 350}} transition={{duration: 1}} className="flex justify-around py-[20px] w-[130px]">
                <ChangeColorbutton r='255' g='155' b='155' room={roomData.room}/>
                <ChangeColorbutton r='148' g='235' b='158' room={roomData.room}/>
                <ChangeColorbutton r='148' g='202' b='235' room={roomData.room}/>
                <ChangeColorbutton r='165' g='148' b='235' room={roomData.room}/>
                <ChangeColorbutton r='222' g='148' b='235' room={roomData.room}/>
                <ChangeColorbutton r='235' g='208' b='148' room={roomData.room}/>
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