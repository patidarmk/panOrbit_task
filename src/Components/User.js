import "./User.css";
import Profile from "./Profile";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./Context/UserContext";

const User = () => {
  const [selectedTab, setSelectedTab] = useState("Profile");
  const selectedTabHandler = (selectedVal) => {
    setSelectedTab(selectedVal);
  };
  const data = useContext(UserContext);
  const params = useParams();
  const id = params.id;

  const currentUser = data?.users.filter((user) => user.id == id);

  console.log(currentUser);
  return (
    <div className="profile-container">
      <Sidebar
        selectedTabHandler={selectedTabHandler}
        selectedTab={selectedTab}
      />
      <div className="profile-view">
        <header className="profile-header">
          <h4 className="profile-heading-text">{selectedTab}</h4>
          <div className="user-info">
            <img
              alt="avtar"
              className="profile-header-img"
              src={currentUser[0]?.profilepicture}
            />
            <span className="">{currentUser[0]?.name}</span>
          </div>
        </header>
        <hr className="devider"></hr>
        {selectedTab == "Profile" && (
          <Routes>
            <Route path="/" element={<Profile currentUser={currentUser} />} />
          </Routes>
        )}
        {selectedTab != "Profile" && (
          <div className="box-coming-soon">Comming Soon</div>
        )}
      </div>
    </div>
  );
};

export default User;
