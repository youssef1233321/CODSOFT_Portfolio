import { BrowserRouter } from 'react-router-dom';

import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import ContactUs from './Components/ContactUs/ContactUs';
import { Toaster } from 'react-hot-toast';


function App() {
  

  return (
    <>
    <BrowserRouter>
        <Header/>
        <Toaster/>
        <Home/>
        <About/>
        <Projects/>
        <ContactUs/>
    </BrowserRouter>
      
    </>
  )
}

export default App
