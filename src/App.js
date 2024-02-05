
import './App.css';
import { Route, Routes,} from 'react-router-dom';
import NavBar from './component/NavBar';
import CyberSecurity from './component/Cybersecurity';
import FullStackDevelopment from './component/FullStack';
import Home from './component/Home';
import UIUX from './component/UIUX';
import DataScience from './component/DataScience';
import Footer from './component/footer';
import 'bootstrap/dist/css/bootstrap.css';



function App() {
  return (
    <div className='container'>
      <header className="header">
        <div className='header-top'>
          <img id='img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStmiwZZZUl4BOL9FSLelRPx-4dRubjmIHJAg&usqp=CAU" alt="IT Course Blog" />
          <h1 className='header'>Best IT Course Blog</h1>
          <h2 className="highlight">By Elumalai</h2>
        </div>
      </header>  
      <NavBar />   
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/FullStackDevelopment' element={<FullStackDevelopment />} />
        <Route path='/CyberSecurity' element={<CyberSecurity />} />
        <Route path='/DataScience' element={<DataScience />} />
        <Route path='/UIUX' element={<UIUX />} />
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
