import Card from "./Card";
import BedComponent from "./icons/Bed";

const ContentArea = () => {
    return (
        <section>
            <Card image={<BedComponent/>} titel='Bed room' light='4 lights'/>
        </section>
    );
}
 
export default ContentArea;