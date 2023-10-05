import './KFS.scss';
import KFCLogo from './Frame.png'
import Sanders from './sanders.png'
import ShawCard from '../ShawBox/ShawCard/ShawCard';



function KFC() {
  
    const cards = [
        [Sanders, 'Московская', 'Сырный лаваш, курочка гриль, огурчик соленый, капуста, помидор, морковь «По-Корейски», соус.', '12.20 Br.'],
        [Sanders, 'Восточная', 'Сырный лаваш, курочка гриль, огурчик соленый, капуста, помидор, картошка фри, соус.', '12.50 Br.'],
        [Sanders, 'Терияки', 'Сырный лаваш, курочка гриль, огурчик свежий, капуста, помидор, сыр, соус Терияки.', '13.70 Br.'],
        [Sanders, 'Цезарь', 'Сырный лаваш, курочка гриль, капуста, помидор, сухарики, сыр, соус.', '13.70 Br.'],
        [Sanders, 'Криспи', 'Сырный лаваш, наггетсы, луковые кольца во фритюре, шампиньоны, капуста, помидор, соус.', '14.80 Br.'],
        [Sanders, 'Чили-Хот', 'Сырный лаваш, курочка гриль, огурчик соленый, капуста, помидор, шампиньоны, соус чили + соус.', '14.80 Br.'],
        [Sanders, 'Давинчи', 'Сырный лаваш, курочка гриль, помидор, колбаска «Пеперони», сыр, соус.', '14.80 Br.'],
        [Sanders, 'Тропикана', 'Сырный лаваш, курочка гриль, ананас, ветчина, капуста, сыр, соус.', '14.80 Br.']
    ]
    

    return (
    <div className="kfc">
        <p className="shaw-box__title">KFC</p>
        <img src={KFCLogo} alt='' width='42' height='51' className='shaw-box__logo'/>
        <div className="shaw-box__container">
            {cards.map((card) => (
                <ShawCard image={card[0]} title={card[1]} info={card[2]} price={card[3]} key={card[1]}/>
            ))}
        </div>
    </div>
  );
}

export default KFC;
