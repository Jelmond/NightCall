import './Header.scss';
import logoImage from '../../images/logo.png'
import clockImage from '../../images/clock.png'
import bucketImage from '../../images/bucket.png'
import Line from '../Line/Line';
import useStore from '../../store/store';

function Header() {


  const handleClick = () => {
    useStore.setState({isBucketClicked: true})
  }

  return (
    <div className="header">
        <div className="header__left">
            <img src={logoImage} alt="" width='112' height='29'/>
        </div>
        <div className="header__right">
            <img src={clockImage} alt="" width='21' height='21'/>
            <div>
                <p>С 23.00 до 05.00</p>
                <p>прием заказов</p>
            </div>
            <img src={bucketImage} alt="" width='28' height='27' onClick={handleClick}/>
        </div>
    </div>
  );
}

export default Header;
