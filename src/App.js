import './App.css';
import NavBar from './components/NavBar';
import ToyCard from './components/ToyCard';


function App() {
  return (
    <div className="App">
        {/* <nav>
        <h1 className='brandname'>Kidzone</h1>
        <div className='headerlist'>
        <ul>
          <li>
          <i className="fas fa-user fa-lg icon"></i> 
          </li>
          <li>
          <i class="fas fa-shopping-cart fa-lg icon"></i>
          </li>
          <li>
          <i class="fas fa-heart fa-lg icon"></i>
          </li>
        </ul>
        </div>
       </nav>  */}
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
