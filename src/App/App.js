import { BrowserRouter } from 'react-router-dom';
import Footer from '../Layout/Footer';
import Header from '../Layout/Header';
import './App.css';
import Router from '../Router/Router';
import { ContextLanguage } from '../Context/Languages';
import { useState } from 'react';

function App() {
  const [Lang , setLang] = useState('en')   // en قيمه افتراضيه من عندى انا 
  return (
    <BrowserRouter>
      <ContextLanguage.Provider value={{Lang , setLang}}>      {/* هل هنا ينفع اضيف ال Provider */} 
      <Header/>
      <div className='bg-dark'>
        <Router/>
      </div>
      </ContextLanguage.Provider>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
