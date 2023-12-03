import './KFS.scss';
import KFCLogo from './Frame.png'
import Sanders from './sanders.png'
import ShawCard from '../ShawBox/ShawCard/ShawCard';
import chefLuxe from './images/chefLuxe.png'
import chef from './images/chef.png'
import cheese from './images/cheese.png'
import cheeseLux from './images/cheeseLux.png'
import chefJun from './images/chefJun.png'
import twisterJun from './images/twisterJune.png'
import twister from './images/twister.png'
import twisterLux from './images/twisterLuxe.png'
import five from './images/five.png'
import three from './images/three.png'
import forStripes from './images/for.png'
import bockmaster from './images/bockmaster.png'
import medium from './images/medium.png'
import free from './images/free.png'
import country from './images/country.png'
import sandersFree from './images/sandersFree.png'
import sandersCountry from './images/sandersCountry.png'
import cheeseJune from './images/cheeseJune.png'
import sander from './images/sander.png'
import sanderLuxe from './images/sanderLuxe.png'
import { useRef } from 'react';



function KFC() {
  
    const cards = [
        [sanderLuxe, 'САНДЕРС БУРГЕР ДЕ ЛЮКС ', ' Булочка Бриошь, ароматный бекон, томаты, с маринованными огурчиками, двумя кусочками сыра и сочным куриным филе в оригинальной панировке.', 12.50, true],
        [sander, 'САНДЕРС БУРГЕР', 'Сливочная булочка Бриошь, два кусочка сыра, маринованные огурчики, хрустящий салат и легендарное куриное филе в оригинальной панировке', 11.40, true],
        [chefLuxe, 'ШЕФБУРГЕР ДЕ ЛЮКС', 'Оригинальное сочное филе, томаты, салат айсберг, соус «Цезарь», аппетитная булочка, ломтик сыра и ломтик бекона.', 9.10, true],
        [chef, 'ШЕФБУРГЕР', 'Сочная курица, томаты, свежий салат, соус Цезарь и аппетитная булочка.', 7.90, true],
        [chefJun, 'ШЕФБУРГЕР ДЖУНИОР', 'Нежный сливочный соус, два сочных стрипса в оригинальной панировке, салат айcберг и помидоры на пшеничной булочке с черно-белым кунжутом.', 6.30, true],
        [cheeseJune, 'ЧИЗБУРГЕР ДЖУНИОР', 'Горчичный соус, кетчуп, один сочный стрипс в оригинальной панировке, лук, сыр Чеддер, огурчик на пшеничной булочке.', 4.50],
        [cheeseLux, 'ЧИЗБУРГЕР ДЕ ЛЮКС', 'Пряный горчичный соус, кетчуп, сочная курица, лук, сыр Чеддер, огурцы на пшеничной булочке с кукурузной посыпкой, свежий салат и ломтики помидора.', 7.50],
        [cheese, 'ЧИЗБУРГЕР', 'Горчичный соус, кетчуп, два сочных стрипса в оригинальной панировке, лук, сыр Чеддер, огурчик на пшеничной булочке.', 5.60],
    ]
    

    const twisters = [
        [bockmaster, 'БОКСМАСТЕР', 'Куриное филе в оригинальной хрустящей панировке, румяные дольки картофеля по-деревенски, ломтик сыра, кусочки помидора, салат и  соус в горячей лепешке', 12.50, true],
        [twisterLux, 'ТВИСТЕР ДЕ ЛЮКС', 'Пшеничная лепешка с сочными оригинальными куриными стрипсами в панировке, с горчицей, кетчупом, беконом, луком, сыром, маринованными огурчиками и свежим салатом.', 10.80, true],
        [twister, 'ТВИСТЕР', 'Кусочки нежнейшего куриного филе в хрустящей оригинальной панировке с листьями салата, кусочками помидора и соусом мы завернули в пшеничную лепешку', 10.20, true],
        [twisterJun, 'ТВИСТЕР ДЖУНИОР', 'Сырная лепешка, оригинальные стрипсы 2 шт, горчица, кетчуп, сыр, маринованные огурчики и лук', 5.90, true]
    ]

    const chicken = [
        [five, '5 сочных крыльев', 'Огонь внутри! Далеко не ангельские крылья! Наши острые куриные крылья в хрустящей панировке со жгучими специями – настоящий огонь!', 11.50, true],
        [three, ' 3 стрипса', 'Потрясающе нежное куриное филе мы панируем вручную и готовим в ресторане по уникальному рецепту Полковника Сандерса.', 6.49, true],
        [forStripes, '4 ножки', 'Kуриные ножки с оригинальным вкусом, приготовленные по секретному рецепту Полковника Сандерса «11 трав и специй».', 11.90, true],
        [medium, 'Байтсы средние', 'Cочные кусочки курицы в обжигающе острой хрустящей панировке «Hot and Spicy». Взрыв вкуса для любителей острых ощущений!', 7.50, true]
    ]

    const snacks = [
        [sandersFree, 'САНДЕРС КАРТОФЕЛЬ ФРИ', 'Всеми любимый картофель фри с золотистой корочкой в аккомпанементе фирменного соуса и хрустящего жареного лука.', 8.90],
        [sandersCountry, 'САНДЕРС КАРТОФЕЛЬ ПО-ДЕРЕВЕНСКИ', 'Любимый картофель по-деревенски в аккомпанементе фирменного соуса и хрустящего жареного лука.', 8.90],
        [free, 'КАРТОФЕЛЬ ФРИ', 'Хрустящая корочка и мягкая и рассыпчатая серединка. В наших ломтиках мы сохранили еще больше вкуса твоего любимого картофеля.', 7.90],
        [country, 'КАРТОФЕЛЬ ПО-ДЕРЕВЕНСКИ', 'Рассыпчатый и хрустящий картофель по-деревенски – любимый вкус теперь в KFC!', 7.90]
    ]

    const burgersRef = useRef(null)
    const twisterRef = useRef(null)
    const chickenRef = useRef(null)
    const snackRef = useRef(null)
    
    const handleScroll = (routeName) => {
        if(routeName === 'бургеры') {
            console.log(routeName)
            window.scrollTo({
                top: burgersRef.current.offsetTop,
                behavior: 'smooth',
                });
        } else if (routeName === 'твистеры') {
            console.log(routeName)
            window.scrollTo({
                top: twisterRef.current.offsetTop,
                behavior: 'smooth',
                });
        }   else if (routeName === 'курица') {
            console.log(routeName)

            window.scrollTo({
                top: chickenRef.current.offsetTop,
                behavior: 'smooth',
                });
        } else{
            console.log(routeName)
            window.scrollTo({
                top: snackRef.current.offsetTop,
                behavior: 'smooth',
                });
        }
      };

    return (
    <div className="kfc">
        <p className="shaw-box__title">KFC</p>
        <img src={KFCLogo} alt='' width='42' height='51' className='shaw-box__logo'/>
        <div className='navigation'>
            <div>
                <p onClick={() => handleScroll('бургеры')}>
                    Бургеры с говядиной
                </p>
                <p onClick={() => handleScroll('твистеры')}>
                    Бургеры с курицей
                </p>
            </div>
            <div>
                <p onClick={() => handleScroll('курица')}>
                    Роллы
                </p>
                <p onClick={() => handleScroll('снэки')}>
                    Картошка и снэки
                </p>
            </div>
        </div>
        <div>
        <div className="shaw-box__container" ref={burgersRef}>
            {cards.map((card) => (
                <ShawCard image={card[0]} title={card[1]} info={card[2]} price={card[3]} key={card[1]} isSpicy={card[4]}/>
            ))}
        </div>
        </div>
        <div className='semiTitle'>
            <svg width="5" height="11" viewBox="0 0 5 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.11312 0C2.42933 0 2.71899 0.14418 2.91485 0.378844L2.97789 0.462821L3.06346 0.42941C3.12256 0.40943 3.18396 0.39577 3.2468 0.388883L3.34205 0.38369C3.72291 0.38369 4.05295 0.630906 4.17862 0.984427L4.18113 0.993548L4.195 0.997308C4.49975 1.09424 4.7328 1.35418 4.80128 1.67573C4.91785 1.74142 5 1.86819 5 2.02066V10.3061C5 10.6893 4.69778 11 4.32498 11H0.675043C0.302225 11 0 10.6893 0 10.3061V2.02005C0 1.86469 0.0853373 1.73596 0.205039 1.67097C0.254506 1.24636 0.58719 0.910825 1.0035 0.86992L1.07939 0.866306L1.09147 0.811135C1.20215 0.373636 1.57172 0.0435359 2.02203 0.00398248L2.11312 0ZM0.448906 2.115L0.448797 2.90494C0.455322 2.91997 0.460329 2.93585 0.463619 2.95237L0.46818 2.99888V5.41412C0.46818 5.4476 0.461243 5.47941 0.448766 5.50813L0.44897 10.3061C0.44897 10.4184 0.526462 10.5121 0.629481 10.5338L0.675043 10.5385H4.32498C4.44982 10.5385 4.55103 10.4345 4.55103 10.3061L4.54999 3.57664L2.43657 2.83404L2.43534 2.83296L2.43463 2.83335L0.448906 2.115ZM4.55057 2.115L3.19089 2.61144L4.54999 3.08877L4.55057 2.115ZM2.50918 1.79095C2.1701 1.79095 1.84332 1.87192 1.54963 2.02319L2.5084 2.3708L3.46497 2.02113C3.17225 1.87117 2.84683 1.79095 2.50918 1.79095ZM2.11312 0.461502C1.77806 0.461502 1.50652 0.740631 1.50652 1.08506L1.50722 1.11711C1.51255 1.25818 1.39609 1.36657 1.26636 1.35631L1.2173 1.34674C1.17626 1.33384 1.13342 1.32723 1.08929 1.32723C0.872509 1.32723 0.692162 1.48784 0.654664 1.69965L1.00249 1.82557L1.02783 1.80671C1.45806 1.49842 1.97134 1.32944 2.50918 1.32944C3.0561 1.32944 3.57756 1.50405 4.01223 1.82224L4.3411 1.70275C4.28135 1.55017 4.14328 1.43786 3.97697 1.42036C3.8757 1.4097 3.79409 1.33033 3.77813 1.22699C3.74438 1.0085 3.5599 0.845192 3.34205 0.845192C3.23049 0.845192 3.12609 0.887468 3.04527 0.962983C2.92722 1.07328 2.73807 1.02537 2.68339 0.87133C2.59675 0.627265 2.37019 0.461502 2.11312 0.461502Z" fill="white"/>
            </svg>
            Твистеры
        </div>
        <div className="shaw-box__container" ref={chickenRef}>
            {twisters.map((card) => (
                <ShawCard image={card[0]} title={card[1]} info={card[2]} price={card[3]} key={card[1]} isSpicy={card[4]}/>
            ))}
        </div>
        <div className='semiTitleSecond'>
            <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.91226 2.99584L1.97374 3.00884C2.13697 3.06093 2.22707 3.23548 2.17498 3.39871C2.09229 3.65787 2.07102 3.93127 2.11526 4.20533C2.20584 4.76391 2.45608 5.28521 2.81908 5.67456C2.93593 5.79987 2.92905 5.99618 2.80374 6.11303C2.67842 6.22987 2.48211 6.223 2.36527 6.09768C1.91727 5.61718 1.61277 4.98282 1.50276 4.30444C1.44284 3.93329 1.47176 3.56143 1.58387 3.21009C1.62945 3.06726 1.76878 2.98043 1.91226 2.99584Z" fill="white"/>
                <path d="M0.0468675 4.32318C0.411564 6.58002 1.97789 8.23066 4.1592 8.44051L4.38173 8.45035C5.09318 8.49832 5.80954 8.74579 6.49095 9.12959C6.76107 9.28173 7.00658 9.44482 7.22224 9.60753L7.40835 9.75402C7.43969 9.78001 7.4642 9.80125 7.48155 9.81701C7.60408 9.92838 7.79248 9.92388 7.90957 9.8068L9.80996 7.9064C9.93113 7.78523 9.93111 7.58878 9.80992 7.46763C9.47081 7.12862 9.18849 6.66726 8.96119 6.11332C8.77329 5.6554 8.63356 5.16169 8.53564 4.66754C8.47696 4.37139 8.44551 4.14269 8.43386 4.01611C8.16903 1.80727 6.35966 0.19889 4.17924 0.0141774C1.70454 -0.194989 -0.338268 1.94207 0.0468675 4.32318ZM4.12692 0.632439C6.02415 0.793161 7.58936 2.1845 7.8169 4.0815L7.83701 4.25529C7.85559 4.39382 7.88489 4.5756 7.927 4.78814C8.03218 5.31894 8.18253 5.85016 8.38717 6.34886L8.48643 6.57846C8.65726 6.95353 8.85518 7.29008 9.08312 7.58052L9.16199 7.67612L7.66931 9.1688L7.59595 9.11223C7.35924 8.93363 7.09093 8.7554 6.79545 8.58897C6.03942 8.16315 5.23763 7.88617 4.41563 7.83086L4.20199 7.82174C2.33407 7.64159 0.981253 6.21595 0.659386 4.22415C0.348096 2.29959 1.95882 0.553731 3.9594 0.62248L4.12692 0.632439Z" fill="white"/>
                <path d="M9.70331 8.46698C9.80535 8.36136 9.96423 8.3438 10.0851 8.41591L10.142 8.45945L11.0111 9.29908L11.0758 9.26247C11.2243 9.18425 11.3876 9.13469 11.5581 9.118L11.6872 9.11171C12.4123 9.11171 13.0001 9.69973 13.0001 10.425C13.0001 11.1074 12.4793 11.6683 11.8136 11.732L11.7291 11.7358L11.7249 11.8342C11.6653 12.4586 11.1685 12.9554 10.5441 13.0151L10.4176 13.0211C9.69255 13.0211 9.10468 12.4331 9.10468 11.7077C9.10468 11.4666 9.17009 11.2359 9.28888 11.0363L9.33407 10.9681L7.80175 9.48284C7.69629 9.38063 7.67897 9.22173 7.75127 9.10094L7.79489 9.04415C7.8971 8.9387 8.056 8.92137 8.17679 8.99367L8.23358 9.03729L9.97686 10.7269C10.0912 10.8377 10.101 11.0134 10.0095 11.1354L9.96415 11.1841C9.81314 11.315 9.72515 11.5036 9.72515 11.7077C9.72515 12.0904 10.0353 12.4006 10.4176 12.4006C10.8003 12.4006 11.1105 12.0905 11.1105 11.7077C11.1105 11.6545 11.1046 11.6024 11.093 11.5522L11.0604 11.4393L11.0536 11.3744C11.0536 11.1259 11.277 11.0266 11.4557 11.0762L11.4827 11.086L11.5362 11.1011C11.5607 11.1065 11.5855 11.1106 11.6107 11.1134L11.6872 11.1175C12.0695 11.1175 12.3797 10.8074 12.3797 10.425C12.3797 10.0424 12.0696 9.73218 11.6872 9.73218C11.5404 9.73218 11.4014 9.77776 11.2856 9.86038L11.2034 9.92916C11.1005 10.0296 10.9451 10.0443 10.8268 9.97303L10.7712 9.93023L9.71084 8.90565C9.58762 8.7866 9.58425 8.5902 9.70331 8.46698Z" fill="white"/>
            </svg>
            Сочная курица
        </div>
        <div className="shaw-box__container" ref={twisterRef}>
            {chicken.map((card) => (
                <ShawCard image={card[0]} title={card[1]} info={card[2]} price={card[3]} key={card[1]} isSpicy={card[4]}/>
            ))}
        </div>
        <div className='semiTitle'>
            <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.72684 0.253296L3.72657 1.83182H4.40657L4.40712 1.13438H5.94795L5.94768 3.41312L7 3.41424L6.07139 9.30675H0.944712L0 3.41268L1.03008 3.41188L1.0305 1.13959L2.18545 1.13946L2.18601 0.253296H3.72684ZM1.63218 3.84461L0.507101 3.84523L1.31321 8.87348H5.70165L6.49354 3.84646L5.39812 3.84523L5.32729 3.90696C5.18633 4.021 5.0353 4.12155 4.87614 4.20717L4.83929 4.22479L4.40467 4.43085L4.40409 4.40777L4.38412 4.4155C4.21708 4.46849 4.04513 4.50614 3.8699 4.52777L3.72904 4.54068L3.72929 4.54928H3.29411L3.29385 4.53944L3.1547 4.52686C2.92038 4.49735 2.69206 4.43928 2.47368 4.35418L2.31182 4.28531C2.09405 4.18467 1.88956 4.0571 1.70284 3.906L1.63218 3.84461ZM4.40409 2.26455H3.72904V4.1061L3.81663 4.09834C4.01503 4.07388 4.20831 4.02529 4.39316 3.95394L4.40409 3.94846V2.26455ZM3.29385 0.685719H2.61818V3.94537L2.63077 3.95098C2.81616 4.02322 3.00995 4.07252 3.20887 4.09756L3.29385 4.10548V0.685719ZM5.51496 1.56662H4.83929V3.7253L4.93238 3.66372C4.97424 3.63394 5.01521 3.60284 5.05523 3.57046L5.17239 3.46952L5.23452 3.41256L5.51496 3.4125V1.56662ZM1.71193 3.62886L1.85852 3.46924C1.93419 3.53857 2.01385 3.60303 2.09703 3.66229L2.18545 3.72159V1.57219H1.4628V3.41188L1.71236 3.41241L1.71193 3.62886Z" fill="white"/>
                <path d="M3.50078 5.29846C2.76153 5.29846 2.16385 5.90701 2.16385 6.65577C2.16385 7.40452 2.76153 8.01307 3.50078 8.01307C4.24003 8.01307 4.83771 7.40452 4.83771 6.65577C4.83771 5.90701 4.24003 5.29846 3.50078 5.29846ZM3.50078 5.73119C3.99928 5.73119 4.40499 6.14427 4.40499 6.65577C4.40499 7.16726 3.99928 7.58035 3.50078 7.58035C3.00228 7.58035 2.59657 7.16726 2.59657 6.65577C2.59657 6.14427 3.00228 5.73119 3.50078 5.73119Z" fill="white"/>
            </svg>
            Картошка и снэки
        </div>
        <div className="shaw-box__container" ref={snackRef}>
            {snacks.map((card) => (
                <ShawCard image={card[0]} title={card[1]} info={card[2]} price={card[3]} key={card[1]} isSpicy={card[4]}/>
            ))}
        </div>
        <p className='difference'>
            Внешний вид блюда может отличаться от изображения на картинке
        </p>
    </div>
  );
}



export default KFC;
