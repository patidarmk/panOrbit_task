import "./Sidebar.css";

import image from "../assets/Selected.png";
const Sidebar = ({ selectedTabHandler, selectedTab }) => {
  return (
    // <div className="sidebar">
    <div className="sidebar-container">
      <div className="sidebar-nav-options">
        <div className="sidebar-nav-option option-profile">
          <p
            className={
              selectedTab === "Profile"
                ? "sidebar-option-active"
                : "sidebar-option"
            }
            onClick={() => selectedTabHandler("Profile")}
          >
            Profile
          </p>
          {selectedTab === "Profile" && (
            <div className="selected-icon">
              <img src={image} />
            </div>
          )}
        </div>
        <hr className="sidebar-hr" />
        <div className="sidebar-nav-option option-posts">
          <p
            className={
              selectedTab === "Posts"
                ? "sidebar-option-active"
                : "sidebar-option"
            }
            onClick={() => selectedTabHandler("Posts")}
          >
            Posts
          </p>
          {selectedTab === "Posts" && (
            <div className="selected-icon">
              <img src={image} />
            </div>
          )}
        </div>
        <hr className="sidebar-hr" />
        <div className="sidebar-nav-option option-gallery">
          <p
            className={
              selectedTab === "Gallery"
                ? "sidebar-option-active"
                : "sidebar-option"
            }
            onClick={() => selectedTabHandler("Gallery")}
          >
            Gallery
          </p>
          {selectedTab === "Gallery" && (
            <div className="selected-icon">
              <img src={image} />
            </div>
          )}
        </div>
        <hr className="sidebar-hr" />
        <div className="sidebar-nav-option option-todo">
          <p
            className={
              selectedTab === "ToDo"
                ? "sidebar-option-active"
                : "sidebar-option"
            }
            onClick={() => selectedTabHandler("ToDo")}
          >
            ToDo
          </p>
          {selectedTab === "ToDo" && (
            <div className="selected-icon">
              <img src={image} />
            </div>
          )}
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Sidebar;
