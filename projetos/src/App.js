import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'

import './App.css';
import Home from './components/Home';
import Menu from './components/Menu';
import HomeDois from './components/HomeDois';
import ContainerButtons from './components/category/Buttons/ContainerButtons';
import CodeBtnFolha from './components/category/Buttons/btnFolhaCode/CodeBtnFolha';

function App() {
  return (
    <div className='App'>
      
      <Home />

      <BrowserRouter>
        <Menu />

        <Routes>
          <Route path='/' element={<HomeDois />} />
          <Route path='/%btn%' element={<ContainerButtons />}/>
          
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
