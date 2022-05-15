import React from "react";
import "./Message.css";

const Message = (props) => {
  const { message, timestamp, user, userImage } = props;
  return (
    <div className="message">
      <img src={userImage} alt="userImage" />
      <div className="message_info">
        <h4>
          {user}
          <span className="message_timestamp">
            {" "}
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Message;
