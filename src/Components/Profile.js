import Chat from "./Chatbox/Chat";
import { useState } from "react";
import ChatWindow from "./Chatbox/ChatWindow";
const Profile = ({ currentUser }) => {
  const [userName, setUsername] = useState();
  const [userImage, setUserImage] = useState();
  const [showChatbox, setShowChatbox] = useState(false);
  const [toggle, setToggle] = useState(false);

  const handleStartChat = (event) => {
    const name = event.currentTarget.getAttribute("data-id");
    const image = event.currentTarget.getAttribute("data-image");
    setUsername(name);
    setUserImage(image);
    setShowChatbox(true);
  };
  const handleChatBox = () => {
    setToggle(!toggle);
  };
  const url = `https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3173.123773610982!2d${currentUser[0].address.geo.lng}!3d-${currentUser[0].address.geo.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzfCsDE4JzU3LjIiUyA4McKwMDgnNTguNiJF!5e0!3m2!1sen!2sin!4v1684507506822!5m2!1sen!2sin`;
  return (
    <>
      <main className="profile-section">
        <div className="profile-section-about">
          <img
            className="profile-img"
            src={currentUser[0]?.profilepicture}
            alt="user-profile-pic"
          />
          <span className="profile-sub-title">{currentUser[0].name}</span>
          <div className="rows">
            <div className="column">
              <label className="theLabels">Username {"  :  "}</label>
              <span className="theInputs">{currentUser[0]?.username}</span>
            </div>
            <div className="column">
              <label className="theLabels">E-mail {"  :  "}</label>
              <span className="theInputs">{currentUser[0]?.email}</span>
            </div>
            <div className="column">
              <label className="theLabels">Phone {"  :  "}</label>
              <span className="theInputs">{currentUser[0]?.phone}</span>
            </div>
            <div className="column">
              <label className="theLabels">Website {"  :  "}</label>
              <span className="theInputs">{currentUser[0]?.website}</span>
            </div>
          </div>
          <hr></hr>
          <span className="profile-title--company">Company</span>
          <div className="row">
            <div className="column">
              <label className="theLabels">Name {"  :  "}</label>
              <span className="theInputs">{currentUser[0]?.company.name}</span>
            </div>
            <div className="column">
              <label className="theLabels">catchPhrase {"  :  "} </label>
              <span className="theInputs">
                {currentUser[0]?.company.catchPhrase}
              </span>
            </div>
            <div className="column">
              <label className="theLabels">bs {"  :  "}</label>
              <span className="theInputs">{currentUser[0]?.company.bs}</span>
            </div>
          </div>
        </div>

        <div className="profile-section-address">
          <hr></hr>
          <div>
            <span className="profile-title-address">Address : </span>
            <div className="address-container">
              <div className="column">
                <label className="theLabels-text">Street {"  :  "}</label>
                <span className="theInputs-text">
                  {currentUser[0]?.address.street}
                </span>
              </div>
              <div className="column">
                <label className="theLabels-text">Suite {"  :  "}</label>
                <span className="theInputs-text">
                  {currentUser[0]?.address.suite}
                </span>
              </div>
              <div className="column">
                <label className="theLabels-text">City {"  :  "}</label>
                <span className="theInputs-text">
                  {currentUser[0]?.address.city}
                </span>
              </div>

              <div className="column">
                <label className="theLabels-text">Zipcode {"  :  "}</label>
                <span className="theInputs-text">
                  {currentUser[0]?.address.zipcode}
                </span>
              </div>

              <iframe
                title="map"
                src={url}
                width="500"
                height="300"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="location">
                <span className="location-ids">
                  Lat : {currentUser[0].address.geo.lat}
                </span>
                <span className="location-ids">
                  Lng : {currentUser[0].address.geo.lng}
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Chat
        handleStartChat={handleStartChat}
        handleChatBox={handleChatBox}
        toggle={toggle}
      />
      {showChatbox && toggle && (
        <ChatWindow username={userName} userImage={userImage} />
      )}
    </>
  );
};

export default Profile;
