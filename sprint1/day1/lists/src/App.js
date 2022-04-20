
import './App.css';
import Lists from './question1/List';
import Btn1 from './part1/Joinus.jsx';
import Settings from './part1/settings';
import Login from './part1/Login';
import Contact from './part1/Contact.jsx';
import Search from './part1/Search';
import Help from './part1/Help';
import Home from './part1/Home';
import Download from './part1/Download';
import styles from './part1/styles.modules.css';
import Button from './part2/main.jsx';

function App() {
  return (
    <div className="App">
      <Lists/>
      {/* <div className="Flex">
    <Btn1/>
    <Settings/>
    </div>
    <div className="Flex">
    <Login/>
    <Contact/>
    </div>
    <div className="Flex">
    <Search/>
    <Help/>
    </div>
    <div className="Flex">
    <Home/>
    <Download/>
    </div> */}
  
    <Button/>
    </div>
  );
}

export default App;
