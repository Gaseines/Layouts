import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'

import './App.css';
import Home from './components/Home';
import Menu from './components/Menu';
import HomeDois from './components/HomeDois';
import Footer from './components/Footer';

import ContainerButtons from './components/category/Buttons/ContainerButtons';

import ContainerCheckBox from './components/category/CheckBox/ContainerCheckBox';

import ContainerToggleSwitches from './components/category/ToggleSwitches/ContainerToggleSwitches';

import ContainerCards from './components/category/Cards/ContainerCards';

import ContainerLoaders from './components/category/Loaders/ContainerLoaders';

function App() {
  return (
    <div className='App'>
      
      <Home />

      <BrowserRouter>
        <Menu />

        <Routes>
          <Route path='/' element={<HomeDois />} />
          <Route path='/Layouts' element={<HomeDois />} />
          <Route path='/%btn%' element={<ContainerButtons />}/>
          <Route path='/%ch3ck_b0x%' element={<ContainerCheckBox />}/>
          <Route path='/%toggl3_sw1tch35%' element={<ContainerToggleSwitches />}/>
          <Route path='/%c4rds%' element={<ContainerCards />}/>
          <Route path='/%l04d3r5%' element={<ContainerLoaders />}/>
          
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
