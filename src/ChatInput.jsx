// import React, { useState } from "react";
// import db from "./firebase";
// import { useStateValue } from "./StateProvider";
// // import firebase from "firebase";
// // import * as firebase from "firebase/app";
// import firebase from 'firebase/compat/app';
// const ChatInput = ({ channelName, channelId }) => {
//     const [input, setInput] = useState('');
//     const [{ user, profileURL }] = useStateValue();

//     const submitMessage = (e) => {
//         if (channelId) {
//             // db.collection('rooms').doc(channelId).collection('messages').add({
//             //     message: input,
//             //     timestamp: firebase.firestore.FieldValue.serverTimestamp(),
//             //     user: user,
//             //     userImage: profileURL,
//             // })
//             console.log(input);
//             db.collection("rooms").doc(channelId).collection("messages").add({
//                 message: input,
//                 timestamp: firebase.firestore.FieldValue.serverTimestamp(),
//                 user: user,
//                 userImage: profileURL,
//             }).then(res => console.log(res)).catch(err => console.log(err));
//         }
//         e.preventDefault();
//     };
//     return (
//         <div className="chatInput">
//             <form>
//                 <input
//                     placeholder={`Message #${channelName}`}
//                     value={input}
//                     onChange={e => { setInput(e.target.value) }}
//                 />
//                 <button onClick={submitMessage}>
//                     Send
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default ChatInput;

import React from "react";
import { useState } from "react";
import "./ChatInput.css";
import db from "./firebase";
import { useStateValue } from './StateProvider'
// import firebase from "firebase";
import firebase from 'firebase/compat/app';

function ChatInput({ channelName, channelId }) {
    const [input, setInput] = useState("");
    const [{ user, profileURL }] = useStateValue();

    const sendMessage = async (e) => {
        e.preventDefault();
        console.log(`${channelId} and ${channelName}`);
        if (!input) { return false; }
        if (channelId) {
            console.log(`user name is ${user} and profile url is ${profileURL}`);
            const docRef = await db.collection("rooms").doc(channelId).collection("messages").add({
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                user: user,
                userImage: profileURL,
            }).then(res => console.log(res)).catch(err => console.log(err))
            console.log(docRef);
        }
        setInput("");
    };

    return (
        <div className="chatInput">
            <form>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={`Send a message to #${channelName}`}
                    autoFocus
                />
                <button type="submit" onClick={sendMessage}>
                    SEND
                </button>
            </form>
        </div>
    );
}

export default ChatInput;