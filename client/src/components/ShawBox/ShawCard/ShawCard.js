import './ShawCard.scss';
import PriceButton from '../../../UI/Buttons/PriceButton/PriceButton';
import useStore from '../../../store/store';
import { useState } from 'react';


function ShawCard({image, title, info, price, isSpicy, ids}) {

    const [isClicked, setIsClicked] = useState(false)

    const addToOrder = useStore((state) => state.addToOrder);



    const handleButtonClick = () => {
        const spice = isSpicy ? !isClicked : false
        const titleDetector = spice ? title + ' spicy' : title

        const item = { title: titleDetector, price, image, spice, ids};


        addToOrder(item);
    };

    const priceButtonHandler = (e) => {
        e.stopPropagation()
        setIsClicked(!isClicked)
    }

  return (
    <div className="shaw-card" onClick={handleButtonClick}>
        <div className='shaw-card__wrapper'>
            <picture className='imgWrapper'>
                <img src={image} alt='' width='115' height='77'/>
            </picture>
            <div className='shaw-card__container'>
                <p>
                    {title}
                </p>
                <p>
                    {info}
                </p>
            </div>
        </div>
        <PriceButton image={image} title={title} price={price} isSpicy={isSpicy} handler={priceButtonHandler} isClicked={isClicked}>{price}</PriceButton>
    </div>
  );
}

export default ShawCard;
