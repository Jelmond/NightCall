import './PriceButton.scss';
import bucketImage from '../../Icon/Icons/Vector.png'
import penImage from '../../Icon/Icons/Group 99.png'
import useStore from '../../../store/store';

function PriceButton({ children, title, price, image}) {
    const addToOrder = useStore((state) => state.addToOrder);

    const handleButtonClick = () => {
        const item = { title, price, image};

        addToOrder(item);
    };

    return (
        <div className="price-button" onClick={handleButtonClick}>
            <div>
                <img alt='' src={penImage} width='21' height='15' className='pen-img'/>
                <p>{children}</p>
                <img alt='' src={bucketImage} width='10' height='11' className='button-img'/>
            </div>
        </div>
    );
}

export default PriceButton;