import './DrinkCard.scss';
import PriceButton from '../../../UI/Buttons/PriceButton/PriceButton';
import useStore from '../../../store/store';
import { useState } from 'react';


function DrinkCard({image, title, info, price}) {

    const addToOrder = useStore((state) => state.addToOrder);
    const toastIndicator = useStore((state) => (state.toastIndicator))

    const spice = false


    const handleButtonClick = () => {
        const item = { title, price, image, spice};


        useStore.setState({toastIndicator: toastIndicator + 1})

        addToOrder(item);
    };


  return (
    <div className="drink-card" onClick={handleButtonClick}>
        <div className='drink-card__wrapper'>
            <picture className='imgWrapper'>
                <img src={image} alt='' width='115' height='77'/>
            </picture>
            <div className='drink-card__container'>
                <p>
                    {title}
                </p>
                <p>
                    {info}
                </p>
            </div>
        </div>
        <PriceButton image={image} title={title} price={price}>{price}</PriceButton>
    </div>
  );
}

export default DrinkCard;
