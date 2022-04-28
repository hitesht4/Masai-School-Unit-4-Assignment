
import './App.css';
import Navbar from './Components/Navbar';
import ThemeProvider from './Context/ThemeProvider';
import Body from './Components/Body';

function App() {
  return (
      <ThemeProvider>
      <div className="App">
      <Navbar style={{backgroundColor:"#f5f6fa"}}/>
      <Body/>
      </div>
      </ThemeProvider>
      
    
  );
}

export default App;
