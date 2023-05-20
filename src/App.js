import "./styles.css";
import { UserContext } from "./Components/Context/UserContext";
import Home from "./Components/Home";
import User from "./Components/User";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export default function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    // fetch data
    const dataFetch = async () => {
      const userData = await (
        await fetch("https://panorbit.in/api/users.json")
      ).json();
      // set state when the data received
      setUser(userData);
    };
    dataFetch();
  }, []);

  return (
    <UserContext.Provider value={user}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="user/:id" element={<User />} />
          </Routes>
        </Router>
      </div>
    </UserContext.Provider>
  );
}
