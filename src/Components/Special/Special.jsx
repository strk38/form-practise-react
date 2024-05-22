import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";


const Special = ({ asset }) => {
    const gift = useContext(AssetContext);
    return (
        <div>
            <h2>Special</h2>
            <p>has: <b>{asset}</b></p>
            <p>has: <b>{gift}</b></p>
        </div>
    );
};

export default Special;