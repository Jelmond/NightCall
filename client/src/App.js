import logo from './logo.svg';
import './App.scss';
import './assets/index.scss'
import Header from './components/Header/Header';
import Line from './components/Line/Line';
import Layout from './Layout/Layout';
import ShawBox from './components/ShawBox/ShawBox';
import KFC from './components/KFC/KFC';
import Mac from './components/Mac/Mac';
import Drinks from './components/Drinks/Drinks';
import Bucket from './components/Bucket/Bucket';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useStore from './store/store';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';

function App() {
  const toastIndicator = useStore((state) => (state.toastIndicator))

  const [toastIndex, setToastIndex] = useState(0)

  useEffect(() => {
    if(toastIndicator != toastIndex) {
        toast.success('Товар успешно добавлен в коризну');
        setToastIndex(toastIndex + 1)
    }
  }, [toastIndicator])

  return (
    <div className="App">
        <Layout>
            {/* <ShawBox/> */}
            <KFC></KFC>
            {/* <Mac></Mac> */}
            <Drinks></Drinks>
            <div className='line-bucket'>
              <p className='buc'>
                Корзина
              </p>
            </div>
            <Bucket></Bucket>
        </Layout>
        <ToastContainer />
    </div>
  );
}

export default App;
