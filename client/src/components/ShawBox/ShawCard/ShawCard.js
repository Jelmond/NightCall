import './ShawCard.scss';
import PriceButton from '../../../UI/Buttons/PriceButton/PriceButton';


function ShawCard({image, title, info, price}) {
  return (
    <div className="shaw-card">
        <picture>
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
        <PriceButton image={image} title={title} price={price}>{price}</PriceButton>
    </div>
  );
}

export default ShawCard;
