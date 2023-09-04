import logo from './logo.svg';
import './App.scss';
import './assets/index.scss'
import Header from './components/Header/Header';
import Line from './components/Line/Line';
import Layout from './Layout/Layout';
import ShawBox from './components/ShawBox/ShawBox';

function App() {
  return (
    <div className="App">
        <Layout>
            <ShawBox/>
        </Layout>
    </div>
  );
}

export default App;
