import './App.css';
import Category from './component/Category';
import Features from './component/Features';
import Main from './component/Main';
import Navigation from './component/Navigation';
import Testimonial from './component/Testimonial';
import Footer from './component/Footer';


function App() {
  return (
    <div className="App">
     
       
            <Navigation />
            <Main />
            <Features />
            <Category />
            <Testimonial />
            <Footer/>
      
    </div>
  );
}

export default App;
