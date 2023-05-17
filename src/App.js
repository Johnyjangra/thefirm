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
import Reason from './components/Reason';
import Branding from './components/Branding';
import Research from './components/Research';
import Blog from './components/Blog';
import Map from './components/Map';
import Footer from './components/Footer';
import TopToBottom from './components/Top';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <>
      <Nav/>
      <Hero/>
      <Partner/>
      <Frustration/>
      <Perfect/>
      <Reason/>
      <Branding/>
      <Research/>
      <Blog/>
      <Testimonial />
      <Map />
      
      <Footer/>
      <TopToBottom/>
    </>
  );
}

export default App;
