import "./Home.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./Context/UserContext";
const Home = () => {
  const data = useContext(UserContext);
  return (
    <div className="container-user">
      <header className="user-header">
        <h3>Select an account</h3>
      </header>
      <ul className="userList">
        {data &&
          data.users.map((user) => {
            return (
              <>
                <li className="list" key={user.id}>
                  <img src={user.profilepicture} />
                  <Link
                    to={`user/${user.id}`}
                    style={{ color: "#000", textDecoration: "none" }}
                  >
                    {user.name}
                  </Link>
                </li>
                <hr className="hr-line"></hr>
              </>
            );
          })}
      </ul>
    </div>
  );
};

export default Home;
