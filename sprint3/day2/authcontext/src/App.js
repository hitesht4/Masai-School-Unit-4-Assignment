import logo from './logo.svg';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Navbar from './Components/Navbar';
import Body from './Components/Body';



function App() {
  return (
    <div className="App">
 <AuthProvider>
    <Navbar/>
    <Body/>
</AuthProvider>
    </div>
  );
}

export default App;
