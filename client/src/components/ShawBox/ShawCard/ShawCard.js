import './ShawCard.scss';
import PriceButton from '../../../UI/Buttons/PriceButton/PriceButton';
import useStore from '../../../store/store';


function ShawCard({image, title, info, price, isSpicy}) {


  return (
    <div className="shaw-card">
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
        <PriceButton image={image} title={title} price={price} isSpicy={isSpicy}>{price}</PriceButton>
    </div>
  );
}

export default ShawCard;
