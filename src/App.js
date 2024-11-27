import './App.css';
import NavBar from './components/NavBar';
import ToyCard from './components/ToyCard';


function App() {
  return (
    <div className="App">
       <div className='Header'>
          <NavBar/>
       </div>
       <div className='Card'>
          <ToyCard/>
       </div>
     </div>
  );
}

export default App;
