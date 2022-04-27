import "./App.css";

import { Routes, Route, NavLink } from "react-router-dom";

//pages
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import User from "./components/User";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
      <nav>
        <ul>
          {/* NavLink vererek tüm sayfanın değil sadece content'in yenilenmesini sağladık */}
          <li>
            <NavLink activeClassName="active" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/about">About</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/users">Users</NavLink>
          </li>
        </ul>
      </nav>


      {/* hangi sırada yazıldığı önemli değil 
      switch kullanılan versiyonunda sıra önemli EXACT ile düzeltilir */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="" element={<Home />} /> */}
        <Route path="about" element={<About />} />
        <Route path="users" element={<Users />} >
          {/* burada id parametresini vermeyi unutma!!
          children olarak vermezsek "outlet" kullanılamıyor */}
          <Route path="user/:id" element={<User />} />
        </Route>
        {/* localhost'tan sonra anlamsız bir şey yazarsak diye kullandık */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* 
      <Switch>
        <Route path="/" exact component={<Home />} />
        <Route path="about" component={<About />} />
        <Route path="users" component={<Users />} />
      </Switch> 
      */}
    </div>
  );
}
export default App;
