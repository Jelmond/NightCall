import './Drinks.scss';
import ShawCard from '../ShawBox/ShawCard/ShawCard';
import Cola from './coke.png'
import DrinksLogo from './Web.png'



function Drinks() {
  
    const cards = [
        [Cola, 'Кока кола 0.5', '12.20 Br.'],
        [Cola, 'Восточная', '12.50 Br.'],
        [Cola, 'Терияки', '13.70 Br.'],
        [Cola, 'Цезарь', '13.70 Br.'],
    ]
    

    return (
    <div className="drinks">
        <p className="shaw-box__title">Холодные напитки, соусы</p>
        <img src={DrinksLogo} alt='' width='42' height='51' className='shaw-box__logo'/>
        <div className="shaw-box__container">
            {cards.map((card) => (
                <ShawCard image={card[0]} title={card[1]} price={card[2]} key={card[1]}/>
            ))}
        </div>
    </div>
  );
}

export default Drinks;
