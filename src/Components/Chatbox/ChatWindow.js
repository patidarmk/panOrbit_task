const ChatWindow = ({ username, userImage }) => {
  return (
    <>
      <div className="user-chat-box-bottom">
        <main className="chat-box">
          <header className="chat-header-box">
            <img className="user-profile-chat" src={userImage} alt="avtar" />
            <span>{username}</span>
          </header>
          <ul className="chat-userList"></ul>
        </main>
        )
      </div>
    </>
  );
};

export default ChatWindow;
