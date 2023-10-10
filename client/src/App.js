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

function App() {

  return (
    <div className="App">
        <Layout>
            <ShawBox/>
            {/* <KFC></KFC> */}
            {/* <Mac></Mac> */}
            {/* <Drinks></Drinks> */}
            <Bucket></Bucket>
        </Layout>
    </div>
  );
}

export default App;
