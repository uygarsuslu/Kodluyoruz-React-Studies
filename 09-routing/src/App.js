import "./App.css";

import { Routes, Route, Link } from "react-router-dom";

//pages
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import User from "./components/User";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>

      {/* hangi sırada yazıldığı önemli değil 
      switch kullanılan versiyonunda sıra önemli EXACT ile düzeltilir */}
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="users" element={<Users />} />
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>

      {/* <Routes>
        <Route path="/" exact component={<Home />} />
        <Route path="about" component={<About />} />
        <Route path="users" component={<Users />} />
      </Routes> */}
    </div>
  );
}
export default App;
