import "./Chat.css";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

const Chat = ({ handleStartChat, handleChatBox, toggle }) => {
  const data = useContext(UserContext);
  const [user, setUser] = useState();

  return (
    <div className="chat-box-bottom">
      <header className="chat-header" onClick={handleChatBox}></header>
      {toggle == 1 && (
        <main className="chat-box">
          <header className="chat-header-box" onClick={handleChatBox}>
            <h5>Chat</h5>
            <span>Click</span>
          </header>
          <ul className="chat-userList">
            {data?.users.map((user) => {
              return (
                <li
                  data-id={user.name}
                  data-image={user.profilepicture}
                  onClick={handleStartChat}
                >
                  <img
                    className="user-profile-chat"
                    src={user.profilepicture}
                    alt="avtar"
                  />
                  <span>{user.name}</span>
                  <span></span>
                </li>
              );
            })}
          </ul>
        </main>
      )}
    </div>
  );
};

export default Chat;
