import './Mac.scss';
import ShawCard from '../ShawBox/ShawCard/ShawCard';
import Burger from './burger (1).png'
import MacLogo from './logo.png'



function Mac() {
  
    const cards = [
        [Burger, 'Московская', 'Сырный лаваш, курочка гриль, огурчик соленый, капуста, помидор, морковь «По-Корейски», соус.', '12.20 Br.'],
        [Burger, 'Восточная', 'Сырный лаваш, курочка гриль, огурчик соленый, капуста, помидор, картошка фри, соус.', '12.50 Br.'],
        [Burger, 'Терияки', 'Сырный лаваш, курочка гриль, огурчик свежий, капуста, помидор, сыр, соус Терияки.', '13.70 Br.'],
        [Burger, 'Цезарь', 'Сырный лаваш, курочка гриль, капуста, помидор, сухарики, сыр, соус.', '13.70 Br.'],
        [Burger, 'Криспи', 'Сырный лаваш, наггетсы, луковые кольца во фритюре, шампиньоны, капуста, помидор, соус.', '14.80 Br.'],
        [Burger, 'Чили-Хот', 'Сырный лаваш, курочка гриль, огурчик соленый, капуста, помидор, шампиньоны, соус чили + соус.', '14.80 Br.'],
        [Burger, 'Давинчи', 'Сырный лаваш, курочка гриль, помидор, колбаска «Пеперони», сыр, соус.', '14.80 Br.'],
        [Burger, 'Тропикана', 'Сырный лаваш, курочка гриль, ананас, ветчина, капуста, сыр, соус.', '14.80 Br.']
    ]
    

    return (
    <div className="mac">
        <p className="shaw-box__title">KFC</p>
        <img src={MacLogo} alt='' width='42' height='51' className='shaw-box__logo'/>
        <div className="shaw-box__container">
            {cards.map((card) => (
                <ShawCard image={card[0]} title={card[1]} info={card[2]} price={card[3]} key={card[1]}/>
            ))}
        </div>
    </div>
  );
}

export default Mac;
