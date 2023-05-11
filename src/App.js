import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Nav from './components/Nav';
import Hero from './components/Hero';
import Partner from './components/Partner';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Frustration from './components/Frustration';
import Perfect from './components/Perfect';

function App() {
  return (
    <>
      <Nav/>
      <Hero/>
      {/* <Partner/> */}
      <Frustration/>
      <Perfect/>
      
    </>
  );
}

export default App;
