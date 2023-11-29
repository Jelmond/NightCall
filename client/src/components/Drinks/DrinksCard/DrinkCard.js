import './DrinkCard.scss';
import PriceButton from '../../../UI/Buttons/PriceButton/PriceButton';
import useStore from '../../../store/store';


function DrinkCard({image, title, info, price}) {

  return (
    <div className="drink-card">
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
