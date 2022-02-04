const Card = (props) => {
    return (
        <div className="rounded-xl w-fit p-3 shadow-xl">
            <div className="mb-4">
                {props.image}
            </div>
            <p className="text-[19pt]">{props.titel}</p>
            <p className="text-[13pt] text-[#FFA939]">{props.light}</p>
        </div>
    );
}
 
export default Card;