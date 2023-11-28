import Header from '../components/Header/Header';
import './Layout.scss';
import Line from '../components/Line/Line';


function Layout({children}) {
  return (
    <div className="layout">
        <Header/>
        <Line/>
        <div className="layout__container">
            {children}
        </div>
    </div>
  );
}

export default Layout;
