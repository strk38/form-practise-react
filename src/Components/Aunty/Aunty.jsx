import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";


const Aunty = () => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h2>Aunty</h2>
            <section className="flex">
                <Cousin name={'Maysha'}></Cousin>
                <Cousin name={'Rubisha'}></Cousin>
            </section>
            <p>Monry: {money}</p>
            <button onClick={() => setMoney(money + 1000)}>Add 1000 Tk</button>
        </div>
    );
};

export default Aunty;