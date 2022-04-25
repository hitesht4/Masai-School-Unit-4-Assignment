import "./App.css";
import { BrowserRouter } from "react-router-dom";


import Mainroutes from "./Components/Routes/MainRoutes";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Mainroutes/>
    </BrowserRouter>
    </div>
  );
}
export default App;

