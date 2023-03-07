import { useState } from "react";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import { CreatePost } from "./pages/CreatePost";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Nav } from "./pages/Nav";
function App() {
  let [Auth,is_Auth] = useState(false);
  return (
    <div className="xs:w-full md:w-10/12 mx-auto">
      <Router>
          <Nav Auth={Auth} is_Auth={is_Auth}/>
          <Routes>
            <Route path={"/"} element={<Home />}/>
            <Route path={'/CreatePost'} element={<CreatePost />}/>
            <Route path={'/Login'} element={<Login is_Auth={is_Auth} />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
