import './App.css';
import NavBar from './components/NavBar';
import SliderBanner from './components/SliderBanner';
import ToyCard from './components/ToyCard';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
       <div className='Header'>
          <NavBar/>
       </div>
       <div className='Banner'><SliderBanner/></div>
       <div className='Card'>
          <ToyCard/>
       </div>
       <div className='Footer'><Footer/></div>
     </div>
  );
}

export default App;
