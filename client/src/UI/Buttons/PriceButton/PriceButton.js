import './PriceButton.scss';
import bucketImage from '../../Icon/Icons/Vector.png'
import penImage from '../../Icon/Icons/Group 99.png'
// import Icon from '../../Icon/Icon';


function PriceButton({children}) {
    

    return (
    <div className="price-button">
        <div>
            <img alt='' src={penImage} width='21' height='15' className='pen-img'/>
            <p>{children}</p>
            <img alt='' src={bucketImage} width='10' height='11' className='button-img'/>
            {/* <Icon label='bucket'/> */}
        </div>
    </div>
  );
}

export default PriceButton;
