import './Mac.scss';
import ShawCard from '../ShawBox/ShawCard/ShawCard';
import Burger from './burger (1).png'
import MacLogo from './logo.png'
import beef from './images/beef.png'
import hamburger from './images/hamburger.png'
import doubleCheese from './images/doubleCheese.png'
import cheese from './images/cheese.png'
import beefRoll from './images/beefRoll.png'
import country from './images/country.png'
import tastyGrill from './images/tastyGrill.png'
import fish from './images/fish.png'
import free from './images/free.png'
import roll from './images/roll.png'
import classic from './images/classic.png'
import chicken from './images/chicken.png'
import big from './images/big.png'
import chickenJune from './images/chickenJune.png'
import freshLuxe from './images/freshLuxe.png'
import chickenLuxe from './images/chickenLuxe.png'
import { useRef, useState } from 'react';



function Mac() {
  
    const burgersRef = useRef()

    const cards = [
        [beef, 'Биф Онион Бургер', 'Бургер на ароматной луковой булочке с сочной котлетой из 100% говядины, сыром Чеддер, свежим салатом, маринованным огурчиком, заправленный пряным соусом.', 10.00],
        [freshLuxe, 'Фреш Де Люкс', 'Бургер с сочным бифштексом, ломтиком сыра Чеддер, свежим помидором и луком, огурчиками, салатом Айсберг, соусом на карамелизированной булочке с кунжутом.', 11.30],
        [big, 'Биг Бургер', 'Бургер с большим рубленым бифштексом из 100%  цельной говядины на большой булочке с кунжутом. Особенной вкус сэндвичу придают три кусочка сыра, два ломтика помидора, свежий салат, лук и соус «Гриль».', 14.40],
        [doubleCheese, 'Двойной Чизбургер', 'Два рубленных бифштекса из натуральной цельной говядины, с двумя кусочками сыра чеддер на  булочке, заправленной горчицей, кетчупом, луком и двумя кусочками маринованного огурчика.', 8.40],
        [cheese, 'Чизбургер', 'Рубленный бифштекс из натуральной цельной говядины, с кусочком сыра чеддер на  булочке, заправленной горчицей, кетчупом, луком и кусочком маринованного огурчика.', 4.50],
        [hamburger, 'Гамбургер', 'Рубленный бифштекс из натуральной цельной говядины на булочке, заправленной горчицей, кетчупом, луком и кусочком маринованного огурчика.', 3.80],
        [chickenJune, 'Чикен Тейсти Джуниор', 'Бургер с куриной котлетой в хрустящей  панировке на булочке с кунжутом. Вкус дополняют два ломтика сыра, ломтик помидора, свежий салат, лук и специальный соус.', 11.00],
        [chickenLuxe, 'Чикен Де Люкс', 'Хрустящее куриное филе, сыр «Чеддер», ломтик помидора, свежий салат, кетчуп, специальный соус Ранч и, конечно, та самая булочка с кунжутом.', 9.30]
    ]

    const handleScroll = (routeName) => {
        if (burgersRef.current) {
            if(routeName = 'говядина') {
                window.scrollTo({
                    top: burgersRef.current.offsetTop,
                    behavior: 'smooth',
                  });
            } else if (routeName = 'говядина') {
                window.scrollTo({
                    top: burgersRef.current.offsetTop,
                    behavior: 'smooth',
                  });
            }   else if (routeName = 'роллы') {
                window.scrollTo({
                    top: burgersRef.current.offsetTop,
                    behavior: 'smooth',
                  });
            } else{
                window.scrollTo({
                    top: burgersRef.current.offsetTop,
                    behavior: 'smooth',
                  });
            }
        }
      };
    

    return (
    <div className="mac">
        <p className="mac__title">Mac.by</p>
        <img src={MacLogo} alt='' width='42' height='51' className='mac__logo'/>
        <div className='navigation'>
            <p onClick={() => handleScroll('говядина')}>
                Бургеры с говядиной
            </p>
            <p onClick={() => handleScroll('курица')}>
                Бургеры с курицей
            </p>
            <p onClick={() => handleScroll('роллы')}>
                Роллы
            </p>
            <p onClick={() => handleScroll('картошка')}>
                Картошка и снэки
            </p>
        </div>
        <div className="mac__container" ref={burgersRef}>
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

export default Mac;
