import ColorConverter from "cie-rgb-color-converter";
import { useState } from "react";
import axios from "axios";

const ChangeColorbutton = (props) => {

    let xy = ColorConverter.rgbToXy(props.r, props.g, props.b)
    const [color, setColor] = useState([])

    if(color !== []){
    axios.put(`http://192.168.8.100/api/MujQ7it6o5Kl-wVXp9pDWX7d3x9DsnY7rynghzfN/groups/${props.room}/action`, {
            'xy': [color.x, color.y]
        })
    }
    return (
        <div onClick={() => {setColor(xy)}} style={{backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`}} className='w-12 h-12 rounded-full'></div>
    );
}
 
export default ChangeColorbutton;