import { Route, Routes} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path={"/"} element={<Home/>}/>
          <Route path={"/portfolio"} element={<Portfolio/>}/>
          <Route path={"/about"} element={<About/>} />
        </Routes>
    </div>
    
  );
}

export default App;
