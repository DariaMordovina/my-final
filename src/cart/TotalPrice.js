import { getTotalPrice } from "../redux/counterCart";
import { useSelector } from "react-redux";



const TotalPrice =()=>{

const totalPrice=useSelector(getTotalPrice)

    return(
        <h3>Итого: {totalPrice} ₽</h3>
    )
}
export default TotalPrice;
