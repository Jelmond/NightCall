import './ShawCard.scss';
import PriceButton from '../../../UI/Buttons/PriceButton/PriceButton';
import useStore from '../../../store/store';
import { useState } from 'react';


function ShawCard({image, title, info, price, isSpicy}) {

    const [isClicked, setIsClicked] = useState(false)

    const addToOrder = useStore((state) => state.addToOrder);
    const toastIndicator = useStore((state) => (state.toastIndicator))




    const handleButtonClick = () => {
        const spice = isSpicy ? !isClicked : false

        const item = { title, price, image, spice};


        useStore.setState({toastIndicator: toastIndicator + 1})

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
