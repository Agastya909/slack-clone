import React, { useEffect, useState } from "react";
import "./Chat.css";
import db from "./firebase";
import { useParams } from "react-router";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Message from "./Message";
const Chat = () => {
  const { roomId } = useParams();
  const [roomdetails, setroomdetails] = useState(null);
  const [roomMessages, setroomMessages] = useState([]);
  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setroomdetails(snapshot.data()));
    }

    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp")
      .onSnapshot((snapshot) =>
        setroomMessages(snapshot.docs.map((doc) => doc.data()))
      );
    console.log(roomMessages);
  }, [roomId]);

  return (
    <div className="chat">
      <div className="chat_header">
        <div className="header_left">
          <h4 className="channel_name">
            <strong># {roomdetails?.name}</strong>
            <StarBorderIcon />
          </h4>
        </div>

        <div className="header_right">
          <p>
            <InfoOutlinedIcon /> Details
          </p>
        </div>
      </div>

      <div className="chat_messages">
        {roomMessages.map(({ message, timestamp, user, userImage }) => (
          <Message
            message={message}
            timestamp={timestamp}
            user={user}
            userImage={userImage}
          />
        ))}
      </div>
    </div>
  );
};

export default Chat;
