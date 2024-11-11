import './App.css';
import Home from './components/Home/Home';
import Itemlists from './components/Itemlists/Itemlists';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div >
      <Navbar/>
      <Home/>
      <Itemlists/>
    </div>
  );
}

export default App;
