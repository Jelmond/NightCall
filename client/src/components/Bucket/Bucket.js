import React, { useEffect, useState } from 'react';
import './Bucket.scss'
import useStore from '../../store/store';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import bucketImage from './frames/bucketImage.png'
import Section from './Section/Section';


function Bucket() {
  
  let tg = window.Telegram.WebApp

  


  const order = useStore((state) => state.order)
  const items = useStore((state) => (state.loadedItems))
  const [thePrice, setThePrice] = useState(0)
  const [adress, setAdress] = useState('')

  const handleCleaner = (e) => {
    e.preventDefault()
    useStore.setState({order: []})
  }

  useEffect(() => {
    setThePrice(prevPrice => {
      let totalPrice = 0;
      order.forEach(element => {
        totalPrice += element.price;
      });
      return Math.round(totalPrice * 100) / 100;
    });
  }, [order]);


  const handleOver = (e) => {
    e.preventDefault()
    console.log(order, adress)

    const tgData = [{
      order: order,
      adress: adress,
      wholePrice: thePrice + 8
    }]

    tg.sendData(JSON.stringify(tgData))

    toast.success('Заказ успешно отформлен');
  }

  const onChange = (e) => {
    setAdress(e.target.value)
  }

  const uniqueOrder = Array.from(new Set(order.map(item => item.title))).map(title => {
    return order.find(item => item.title === title);
  });



  
  return (

    <div className='bucket'>
          <div className='line-bucket'>
            <img src={bucketImage}/>
            <p className='buc'>
              Корзина
            </p>
          </div>
        <div className='bucket__text'>
          <p>
            Твой заказ
          </p>
          <button onClick={handleCleaner}>Очистить корзину</button>
        </div>
        <div className='bucket__information'>
          {uniqueOrder.map((element, index) => (
            <Section key={index} data={element}/>
          ))}
        </div>
        <input value={adress} onChange={onChange} placeholder='Введите промокод'/>
        <div className='bucket__price'>
            <p>
              Цена доставки:
            </p>
            <p>
              8р
            </p>
        </div>
        <div className='bucket__price'>
            <p>
              Итоговая цена:
            </p>
            <p>
              {thePrice + 8}p
            </p>
        </div>
        <button className='bucket__over' onClick={handleOver}>Оформить заказ</button>
    </div>

  );
}

export default Bucket;