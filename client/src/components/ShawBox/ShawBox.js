import './ShawBox.scss';
import moscow from './images/moscow.png'
import krispy from './images/krispy.png'
import daivinchi from './images/daivinchi.png'
import chillHot from './images/chillHot.png'
import cezar from './images/cezar.png'
import teriyaki from './images/teriyaki.png'
import tropikana from './images/tropikana.png'
import vostochnaya from './images/vostochnaya.png'
import ShawCard from './ShawCard/ShawCard';
import ShawLogo from './images/shawBoxLogo.png'
import { useRef } from 'react';



function ShawBox() {
  
    const shawRef = useRef(null)

    const cards = [
        [moscow, 'Московская', 'Сырный лаваш, курочка гриль, огурчик соленый, капуста, помидор, морковь «По-Корейски», соус.', 12.20],
        [vostochnaya, 'Восточная', 'Сырный лаваш, курочка гриль, огурчик соленый, капуста, помидор, картошка фри, соус.', 12.50],
        [teriyaki, 'Терияки', 'Сырный лаваш, курочка гриль, огурчик свежий, капуста, помидор, сыр, соус Терияки.', 13.70],
        [cezar, 'Цезарь', 'Сырный лаваш, курочка гриль, капуста, помидор, сухарики, сыр, соус.', 13.70],
        [krispy, 'Криспи', 'Сырный лаваш, наггетсы, луковые кольца во фритюре, шампиньоны, капуста, помидор, соус.', 14.80],
        [chillHot, 'Чили-Хот', 'Сырный лаваш, курочка гриль, огурчик соленый, капуста, помидор, шампиньоны, соус чили + соус.', 14.80],
        [daivinchi, 'Давинчи', 'Сырный лаваш, курочка гриль, помидор, колбаска «Пеперони», сыр, соус.', 14.80],
        [tropikana, 'Тропикана', 'Сырный лаваш, курочка гриль, ананас, ветчина, капуста, сыр, соус.', 14.80]
    ]

    
    const handleScroll = (routeName) => {
        if(routeName === 'шаурма') {
            window.scrollTo({
                top: shawRef.current.offsetTop,
                behavior: 'smooth',
                });
        }
      };
    

    return (
    <div className="shaw-box">
        <p className="shaw-box__title">Shaw Box</p>
        <img src={ShawLogo} alt='' width='42' height='51' className='shaw-box__logo'/>
        <div className='navigation'>
            <p onClick={() => handleScroll('шаурма')}>
                Шаурма
            </p>
        </div>
        <div className="shaw-box__container" ref={shawRef}>
            {cards.map((card) => (
                <ShawCard image={card[0]} title={card[1]} info={card[2]} price={card[3]} key={card[1]}/>
            ))}
        </div>
        <p className='difference'>
            Внешний вид блюда может отличаться от изображения на картинке
        </p>
    </div>
  );
}

export default ShawBox;
