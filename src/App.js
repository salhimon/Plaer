import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayerList from './Components/PlayerList';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
    <NavBar/>
     <PlayerList/>
     <Footer/>
    </div>
  );
}

export default App;
