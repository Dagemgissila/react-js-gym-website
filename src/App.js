import './App.css';
import Hero from './components/Hero/Hero';
import Programs from './components/programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Plan from './components/Plan/Plan';
import Testimonies from './components/Testimonies/Testimonies';
import Join from './components/join/Join';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
          <Hero/>
          <Programs/>
          <Reasons/>
          <Plan/>
          <Testimonies/>
          <Join/>
          <Footer/>
    </div>
  );
}

export default App;
