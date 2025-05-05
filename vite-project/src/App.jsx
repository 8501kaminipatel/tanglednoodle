import { useContext } from 'react';
import { useLocation } from 'react-router-dom'; 
import './App.css';
import { Usercontext } from './CONTEXT/Authcontext';
import Allroutes from './PAGES/Allroutes';
import Footer from './PAGES/Footer';
import Navbar from './PAGES/Navbar';

function App() {
  const { flag } = useContext(Usercontext);
  const location = useLocation(); 

  const hideFooterRoutes = ['/studio']; 
  const shouldHideFooter = hideFooterRoutes.includes(location.pathname);

  return (
    <div
      style={{
        background: flag ? 'black' : 'white',
        color: flag ? 'white' : 'black',
      }}
    >
      <Navbar />
      <Allroutes />

      {!shouldHideFooter && <Footer />}
    </div>
  );
}

export default App;
