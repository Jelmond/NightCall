import React, { useEffect, useState } from 'react';
import './Bucket.scss'
import useStore from '../../store/store';

function Bucket() {
  
  const order = useStore((state) => state.order)
  const [thePrice, setThePrice] = useState(0)

  const handleCleaner = (e) => {
    e.preventDefault()
    useStore.setState({order: []})
  }

  useEffect(() => {
    setThePrice(0)
    const wholePrice = order.map((element) => {
      setThePrice(thePrice + element.price)
    })
  }, [order])


  const handleOver = (e) => {
    e.preventDefault()
    console.log(order)
  }


  return (

    <div className='bucket'>
        <div className='bucket__text'>
          <p>
            Твой заказ
          </p>
          <button onClick={handleCleaner}>Очистить корзину</button>
        </div>
        <div className='bucket__information'>
          {order.map((element, index) => (
              <div key={index} className='bucket__information__section'>
                  <div>
                    <img src={element.image} alt='' width={60} height={60}/>
                    <p>{element.title}</p>
                  </div>
                  <div className='choose'>
                      <p>{element.price}p</p>
                      {/* <div></div> */}
                      {/* <p></p> */}
                      {/* <div></div> */}
                  </div>
              </div>
          ))}
        </div>
        <div className='bucket__price'>
            <p>
              Итоговая цена:
            </p>
            <p>
              {thePrice}p
            </p>
        </div>
        <button className='bucket__over' onClick={handleOver}>Оформить заказ</button>
    </div>

  );
}

export default Bucket;