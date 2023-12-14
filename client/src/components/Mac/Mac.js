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
import freshLuxe from './images/big-mac 1.png'
import chickenLuxe from './images/chickenLuxe.png'
import { useRef, useState } from 'react';



function Mac() {
  
    const burgersRef = useRef()
    const chickenRef = useRef()
    const rollRef = useRef()
    const snacksRef = useRef()

    const cards = [
        [beef, 'Биф Онион Бургер', 'Бургер на ароматной луковой булочке с сочной котлетой из 100% говядины, сыром Чеддер, свежим салатом, маринованным огурчиком, заправленный пряным соусом.', 10.10],
        [freshLuxe, 'Биг Мак', 'Бургер с двумя бифштексами из говядины, маринованными огурчиками, салатом Айсберг, сыром Чеддер и специальным соусом на булочке с кунжутом.', 11.30],
        [big, 'Биг Бургер', 'Бургер с большим рубленым бифштексом из 100%  цельной говядины на большой булочке с кунжутом. Особенной вкус сэндвичу придают три кусочка сыра, два ломтика помидора, свежий салат, лук и соус «Гриль».', 14.50],
        [doubleCheese, 'Двойной Чизбургер', 'Два рубленных бифштекса из натуральной цельной говядины, с двумя кусочками сыра чеддер на  булочке, заправленной горчицей, кетчупом, луком и двумя кусочками маринованного огурчика.', 8.40],
        [cheese, 'Чизбургер', 'Рубленный бифштекс из натуральной цельной говядины, с кусочком сыра чеддер на  булочке, заправленной горчицей, кетчупом, луком и кусочком маринованного огурчика.', 4.50],
        [hamburger, 'Гамбургер', 'Рубленный бифштекс из натуральной цельной говядины на булочке, заправленной горчицей, кетчупом, луком и кусочком маринованного огурчика.', 3.80],

    ]

    const chickenCards = [
        [chickenJune, 'Чикен Тейсти Джуниор', 'Бургер с куриной котлетой в хрустящей  панировке на булочке с кунжутом. Вкус дополняют два ломтика сыра, ломтик помидора, свежий салат, лук и специальный соус.', 11.00],
        [chickenLuxe, 'Чикен Де Люкс', 'Хрустящее куриное филе, сыр «Чеддер», ломтик помидора, свежий салат, кетчуп, специальный соус Ранч и, конечно, та самая булочка с кунжутом.', 9.30],
        [tastyGrill, 'Тейсти Чикен Гриль', 'Новый бургер с сочной котлетой из курицы, приготовленной на гриле, салатом Айсберг, ломтиком свежего помидора и пикантным соусом.', 5.40],
        [classic, 'Чикен классик', 'Обжаренная куриная котлета, панированная в сухарях, которая подается на карамелизованной булочке, заправленной свежим салатом и соусом Ранч.', 9.00],
        [chicken, 'Чикенбургер', 'Обжаренная куриная котлета, панированная в сухарях, которая подается на карамелизованной булочке, заправленной свежим салатом и соусом Ранч.', 4.50],
        [fish, 'Фиш Бургер', 'Филе хорошей прожаренной рыбы (семейство тресковых), которое подается на пышной пропаренной булочке с половинкой кусочка сыра чеддер, заправленный соусом «Тар-тар».', 9.30]
    ]

    const rolls = [
        [roll, 'Цезарь ролл', 'Хрустящие куриные Стрипсы, свежие овощи и тертый сыр Пармезан, заправленные соусом Цезарь и завернутые в пшеничную лепешку.', 10.60],
        [beefRoll, 'Биф тейсти ролл', 'Сочный бифштекс из говядины, свежие овощи, сыр Чеддер, заправленные пикантным соусом Гриль и завернутые в пшеничную лепешку', 11.70],
    ]

    const snacks = [
        [free, 'КАРТОФЕЛЬ ФРИ СРЕДНИЙ', 'Хрустящие, золотистые, обжаренные в растительном фритюре и слегка посоленные соломки отборного картофеля.', 5.50],
        [country, 'КАРТОФЕЛЬ ПО-ДЕРЕВЕНСКИ СРЕДНИЙ', 'Вкусные, обжаренные в растительном фритюре ломтики картофеля со специями.', 5.80]
    ]

    const handleScroll = (routeName) => {
        if (burgersRef.current) {
            if(routeName === 'говядина') {
                window.scrollTo({
                    top: burgersRef.current.offsetTop,
                    behavior: 'smooth',
                  });
            } else if (routeName === 'курица') {
                window.scrollTo({
                    top: chickenRef.current.offsetTop,
                    behavior: 'smooth',
                  });
            }   else if (routeName === 'роллы') {
                window.scrollTo({
                    top: rollRef.current.offsetTop,
                    behavior: 'smooth',
                  });
            } else{
                window.scrollTo({
                    top: snacksRef.current.offsetTop,
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
            <div>
                <p onClick={() => handleScroll('говядина')}>
                    Бургеры с говядиной
                </p>
                <p onClick={() => handleScroll('курица')}>
                    Бургеры с курицей
                </p>
            </div>
            <div>
                <p onClick={() => handleScroll('роллы')}>
                    Роллы
                </p>
                <p onClick={() => handleScroll('картошка')}>
                    Картошка и снэки
                </p>
            </div>
        </div>
        <div className='semiTitle'>
            <svg width="5" height="11" viewBox="0 0 5 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.11312 0C2.42933 0 2.71899 0.14418 2.91485 0.378844L2.97789 0.462821L3.06346 0.42941C3.12256 0.40943 3.18396 0.39577 3.2468 0.388883L3.34205 0.38369C3.72291 0.38369 4.05295 0.630906 4.17862 0.984427L4.18113 0.993548L4.195 0.997308C4.49975 1.09424 4.7328 1.35418 4.80128 1.67573C4.91785 1.74142 5 1.86819 5 2.02066V10.3061C5 10.6893 4.69778 11 4.32498 11H0.675043C0.302225 11 0 10.6893 0 10.3061V2.02005C0 1.86469 0.0853373 1.73596 0.205039 1.67097C0.254506 1.24636 0.58719 0.910825 1.0035 0.86992L1.07939 0.866306L1.09147 0.811135C1.20215 0.373636 1.57172 0.0435359 2.02203 0.00398248L2.11312 0ZM0.448906 2.115L0.448797 2.90494C0.455322 2.91997 0.460329 2.93585 0.463619 2.95237L0.46818 2.99888V5.41412C0.46818 5.4476 0.461243 5.47941 0.448766 5.50813L0.44897 10.3061C0.44897 10.4184 0.526462 10.5121 0.629481 10.5338L0.675043 10.5385H4.32498C4.44982 10.5385 4.55103 10.4345 4.55103 10.3061L4.54999 3.57664L2.43657 2.83404L2.43534 2.83296L2.43463 2.83335L0.448906 2.115ZM4.55057 2.115L3.19089 2.61144L4.54999 3.08877L4.55057 2.115ZM2.50918 1.79095C2.1701 1.79095 1.84332 1.87192 1.54963 2.02319L2.5084 2.3708L3.46497 2.02113C3.17225 1.87117 2.84683 1.79095 2.50918 1.79095ZM2.11312 0.461502C1.77806 0.461502 1.50652 0.740631 1.50652 1.08506L1.50722 1.11711C1.51255 1.25818 1.39609 1.36657 1.26636 1.35631L1.2173 1.34674C1.17626 1.33384 1.13342 1.32723 1.08929 1.32723C0.872509 1.32723 0.692162 1.48784 0.654664 1.69965L1.00249 1.82557L1.02783 1.80671C1.45806 1.49842 1.97134 1.32944 2.50918 1.32944C3.0561 1.32944 3.57756 1.50405 4.01223 1.82224L4.3411 1.70275C4.28135 1.55017 4.14328 1.43786 3.97697 1.42036C3.8757 1.4097 3.79409 1.33033 3.77813 1.22699C3.74438 1.0085 3.5599 0.845192 3.34205 0.845192C3.23049 0.845192 3.12609 0.887468 3.04527 0.962983C2.92722 1.07328 2.73807 1.02537 2.68339 0.87133C2.59675 0.627265 2.37019 0.461502 2.11312 0.461502Z" fill="white"/>
            </svg>
            Бургеры с говядиной
        </div>
        <div className="mac__container" ref={burgersRef}>
            {cards.map((card) => (
                <ShawCard image={card[0]} title={card[1]} info={card[2]} price={card[3]} key={card[1]}/>
            ))}
        </div>
        <div className='semiTitle'>
            <svg width="5" height="11" viewBox="0 0 5 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.11312 0C2.42933 0 2.71899 0.14418 2.91485 0.378844L2.97789 0.462821L3.06346 0.42941C3.12256 0.40943 3.18396 0.39577 3.2468 0.388883L3.34205 0.38369C3.72291 0.38369 4.05295 0.630906 4.17862 0.984427L4.18113 0.993548L4.195 0.997308C4.49975 1.09424 4.7328 1.35418 4.80128 1.67573C4.91785 1.74142 5 1.86819 5 2.02066V10.3061C5 10.6893 4.69778 11 4.32498 11H0.675043C0.302225 11 0 10.6893 0 10.3061V2.02005C0 1.86469 0.0853373 1.73596 0.205039 1.67097C0.254506 1.24636 0.58719 0.910825 1.0035 0.86992L1.07939 0.866306L1.09147 0.811135C1.20215 0.373636 1.57172 0.0435359 2.02203 0.00398248L2.11312 0ZM0.448906 2.115L0.448797 2.90494C0.455322 2.91997 0.460329 2.93585 0.463619 2.95237L0.46818 2.99888V5.41412C0.46818 5.4476 0.461243 5.47941 0.448766 5.50813L0.44897 10.3061C0.44897 10.4184 0.526462 10.5121 0.629481 10.5338L0.675043 10.5385H4.32498C4.44982 10.5385 4.55103 10.4345 4.55103 10.3061L4.54999 3.57664L2.43657 2.83404L2.43534 2.83296L2.43463 2.83335L0.448906 2.115ZM4.55057 2.115L3.19089 2.61144L4.54999 3.08877L4.55057 2.115ZM2.50918 1.79095C2.1701 1.79095 1.84332 1.87192 1.54963 2.02319L2.5084 2.3708L3.46497 2.02113C3.17225 1.87117 2.84683 1.79095 2.50918 1.79095ZM2.11312 0.461502C1.77806 0.461502 1.50652 0.740631 1.50652 1.08506L1.50722 1.11711C1.51255 1.25818 1.39609 1.36657 1.26636 1.35631L1.2173 1.34674C1.17626 1.33384 1.13342 1.32723 1.08929 1.32723C0.872509 1.32723 0.692162 1.48784 0.654664 1.69965L1.00249 1.82557L1.02783 1.80671C1.45806 1.49842 1.97134 1.32944 2.50918 1.32944C3.0561 1.32944 3.57756 1.50405 4.01223 1.82224L4.3411 1.70275C4.28135 1.55017 4.14328 1.43786 3.97697 1.42036C3.8757 1.4097 3.79409 1.33033 3.77813 1.22699C3.74438 1.0085 3.5599 0.845192 3.34205 0.845192C3.23049 0.845192 3.12609 0.887468 3.04527 0.962983C2.92722 1.07328 2.73807 1.02537 2.68339 0.87133C2.59675 0.627265 2.37019 0.461502 2.11312 0.461502Z" fill="white"/>
            </svg>
            Бургеры с курицей
        </div>
        <div className="mac__container" ref={chickenRef}>
            {chickenCards.map((card) => (
                <ShawCard image={card[0]} title={card[1]} info={card[2]} price={card[3]} key={card[1]}/>
            ))}
        </div>
        <div className='semiTitle'>
            <svg width="5" height="11" viewBox="0 0 5 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.11312 0C2.42933 0 2.71899 0.14418 2.91485 0.378844L2.97789 0.462821L3.06346 0.42941C3.12256 0.40943 3.18396 0.39577 3.2468 0.388883L3.34205 0.38369C3.72291 0.38369 4.05295 0.630906 4.17862 0.984427L4.18113 0.993548L4.195 0.997308C4.49975 1.09424 4.7328 1.35418 4.80128 1.67573C4.91785 1.74142 5 1.86819 5 2.02066V10.3061C5 10.6893 4.69778 11 4.32498 11H0.675043C0.302225 11 0 10.6893 0 10.3061V2.02005C0 1.86469 0.0853373 1.73596 0.205039 1.67097C0.254506 1.24636 0.58719 0.910825 1.0035 0.86992L1.07939 0.866306L1.09147 0.811135C1.20215 0.373636 1.57172 0.0435359 2.02203 0.00398248L2.11312 0ZM0.448906 2.115L0.448797 2.90494C0.455322 2.91997 0.460329 2.93585 0.463619 2.95237L0.46818 2.99888V5.41412C0.46818 5.4476 0.461243 5.47941 0.448766 5.50813L0.44897 10.3061C0.44897 10.4184 0.526462 10.5121 0.629481 10.5338L0.675043 10.5385H4.32498C4.44982 10.5385 4.55103 10.4345 4.55103 10.3061L4.54999 3.57664L2.43657 2.83404L2.43534 2.83296L2.43463 2.83335L0.448906 2.115ZM4.55057 2.115L3.19089 2.61144L4.54999 3.08877L4.55057 2.115ZM2.50918 1.79095C2.1701 1.79095 1.84332 1.87192 1.54963 2.02319L2.5084 2.3708L3.46497 2.02113C3.17225 1.87117 2.84683 1.79095 2.50918 1.79095ZM2.11312 0.461502C1.77806 0.461502 1.50652 0.740631 1.50652 1.08506L1.50722 1.11711C1.51255 1.25818 1.39609 1.36657 1.26636 1.35631L1.2173 1.34674C1.17626 1.33384 1.13342 1.32723 1.08929 1.32723C0.872509 1.32723 0.692162 1.48784 0.654664 1.69965L1.00249 1.82557L1.02783 1.80671C1.45806 1.49842 1.97134 1.32944 2.50918 1.32944C3.0561 1.32944 3.57756 1.50405 4.01223 1.82224L4.3411 1.70275C4.28135 1.55017 4.14328 1.43786 3.97697 1.42036C3.8757 1.4097 3.79409 1.33033 3.77813 1.22699C3.74438 1.0085 3.5599 0.845192 3.34205 0.845192C3.23049 0.845192 3.12609 0.887468 3.04527 0.962983C2.92722 1.07328 2.73807 1.02537 2.68339 0.87133C2.59675 0.627265 2.37019 0.461502 2.11312 0.461502Z" fill="white"/>
            </svg>
            Роллы
        </div>
        <div className="mac__container" ref={rollRef}>
            {rolls.map((card) => (
                <ShawCard image={card[0]} title={card[1]} info={card[2]} price={card[3]} key={card[1]}/>
            ))}
        </div>
        <div className='semiTitle'>
            <svg width="5" height="11" viewBox="0 0 5 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.11312 0C2.42933 0 2.71899 0.14418 2.91485 0.378844L2.97789 0.462821L3.06346 0.42941C3.12256 0.40943 3.18396 0.39577 3.2468 0.388883L3.34205 0.38369C3.72291 0.38369 4.05295 0.630906 4.17862 0.984427L4.18113 0.993548L4.195 0.997308C4.49975 1.09424 4.7328 1.35418 4.80128 1.67573C4.91785 1.74142 5 1.86819 5 2.02066V10.3061C5 10.6893 4.69778 11 4.32498 11H0.675043C0.302225 11 0 10.6893 0 10.3061V2.02005C0 1.86469 0.0853373 1.73596 0.205039 1.67097C0.254506 1.24636 0.58719 0.910825 1.0035 0.86992L1.07939 0.866306L1.09147 0.811135C1.20215 0.373636 1.57172 0.0435359 2.02203 0.00398248L2.11312 0ZM0.448906 2.115L0.448797 2.90494C0.455322 2.91997 0.460329 2.93585 0.463619 2.95237L0.46818 2.99888V5.41412C0.46818 5.4476 0.461243 5.47941 0.448766 5.50813L0.44897 10.3061C0.44897 10.4184 0.526462 10.5121 0.629481 10.5338L0.675043 10.5385H4.32498C4.44982 10.5385 4.55103 10.4345 4.55103 10.3061L4.54999 3.57664L2.43657 2.83404L2.43534 2.83296L2.43463 2.83335L0.448906 2.115ZM4.55057 2.115L3.19089 2.61144L4.54999 3.08877L4.55057 2.115ZM2.50918 1.79095C2.1701 1.79095 1.84332 1.87192 1.54963 2.02319L2.5084 2.3708L3.46497 2.02113C3.17225 1.87117 2.84683 1.79095 2.50918 1.79095ZM2.11312 0.461502C1.77806 0.461502 1.50652 0.740631 1.50652 1.08506L1.50722 1.11711C1.51255 1.25818 1.39609 1.36657 1.26636 1.35631L1.2173 1.34674C1.17626 1.33384 1.13342 1.32723 1.08929 1.32723C0.872509 1.32723 0.692162 1.48784 0.654664 1.69965L1.00249 1.82557L1.02783 1.80671C1.45806 1.49842 1.97134 1.32944 2.50918 1.32944C3.0561 1.32944 3.57756 1.50405 4.01223 1.82224L4.3411 1.70275C4.28135 1.55017 4.14328 1.43786 3.97697 1.42036C3.8757 1.4097 3.79409 1.33033 3.77813 1.22699C3.74438 1.0085 3.5599 0.845192 3.34205 0.845192C3.23049 0.845192 3.12609 0.887468 3.04527 0.962983C2.92722 1.07328 2.73807 1.02537 2.68339 0.87133C2.59675 0.627265 2.37019 0.461502 2.11312 0.461502Z" fill="white"/>
            </svg>
            Картошка и снэки
        </div>
        <div className="mac__container" ref={snacksRef}>
            {snacks.map((card) => (
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
