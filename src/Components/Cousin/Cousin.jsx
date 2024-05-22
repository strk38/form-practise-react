import Friend from "../Friend/Friend";
import Special from "../Special/Special";


const Cousin = ({ name, asset }) => {
    return (
        <div>
            <h3>Cousin</h3>
            <p>{name}</p>
            <section>
                {asset && <Special asset={asset}></Special>}
                {name === 'Rubisha' && <Friend></Friend>}
            </section>
        </div>
    );
};

export default Cousin;