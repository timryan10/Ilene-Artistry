import { Route, Routes} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path={"/"} element={<Home/>}/>
          <Route path={"/portfolio"} element={<Portfolio/>}/>
          <Route path={"/login"} element={<Login/>} />
        </Routes>
    </div>
    
  );
}

export default App;
