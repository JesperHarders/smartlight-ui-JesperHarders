const LightButtonWhite = (props) => {
    return (
        <a href="#" className="bg-white flex w-fit p-[10px] rounded-xl mx-5">{props.icon} <p className="pl-[10px]">{props.text}</p></a>
    );
}
 
export default LightButtonWhite;