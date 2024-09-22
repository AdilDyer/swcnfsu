"use client";
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useSession } from "next-auth/react";

const badWords = [
  "badword1",
  "badword2", // English bad words
  "गाली1",
  "गाली2", // Hindi bad words
  "hinglish1",
  "hinglish2", // Hinglish bad words
];
const containsBadWords = (message) => {
  const lowerCaseMessage = message.toLowerCase();
  return badWords.some((badWord) => lowerCaseMessage.includes(badWord));
};
const ThirdCover = ({ clubName }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const { data: session, status } = useSession();

  const isUserAllowedToChat =
    session?.user?.isRegistered && status === "authenticated";

  useEffect(() => {
    if (!isUserAllowedToChat) {
      return; // If not allowed, don't connect to EventSource
    }

    const eventSource = new EventSource(
      `/api/serverSideMessage?club=${clubName}`
    );

    // Handle incoming messages from the server
    eventSource.onmessage = (event) => {
      const newMessage = JSON.parse(event.data); // Ensure the message is of type Message
      if (newMessage.image != session?.user?.image) {
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      }
    };
    // Handle errors (e.g., server down, connection closed)
    eventSource.onerror = (error) => {
      console.error("EventSource failed: ", error);
      eventSource.close();
    };

    // Clean up on unmount
    return () => {
      eventSource.close();
    };
  }, [clubName, session]);

  const handleSendingMessage = async (e) => {
    e.preventDefault();
    if (!isUserAllowedToChat) {
      alert("Please log in and ensure you're registered to send messages.");
      return;
    }

    // Check for bad words
    if (containsBadWords(newMessage)) {
      alert("Your message contains inappropriate language and cannot be sent.");
      return;
    }

    const messageData = {
      user: session.user.name,
      course: session.user.course,
      message: newMessage,
      club: clubName,
      image: session.user.image,
    };

    try {
      const response = await fetch("/api/serverSideMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(messageData),
      });

      if (response.ok) {
        // Append sent message to the chat container
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            user: session.user.name,
            course: session.user.course,
            message: newMessage,
            sent: true,
            image: session.user.image,
          },
        ]);
        setNewMessage(""); // Clear input after sending
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="thirdCover">
      <div className="headingLines">
        <h1>
          Chat-Box
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1213 73"
            fill="#FFF12C"
          >
            <path d="M1212.41 5.51c3.05 12.87-22.36 11.93-30.26 15.68-94.32 20.51-269.09 32.42-365.48 37.51-77.91 3.82-155.66 9.93-233.67 11.67-57.49 2.56-115.05-.19-172.57 1.58-121.28.91-243.17 1.88-363.69-13.33-12.51-2.64-25.8-2.92-37.77-7.45-30.66-21.42 26.02-21.53 38.52-19.26 359.95 29.05 364.68 27.36 638.24 17.85 121-3.78 241.22-19.21 426.76-41.46 4.72-.65 9.18 3.56 8.45 8.36a941.74 941.74 0 0 0 54.29-9.21c9.33-2.33 18.7-4.56 27.95-7.19a7.59 7.59 0 0 1 9.23 5.24Z"></path>
          </svg> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1213 73"
            fill="#FFFFFF"
          >
            <path d="M1212.41 5.51c3.05 12.87-22.36 11.93-30.26 15.68-94.32 20.51-269.09 32.42-365.48 37.51-77.91 3.82-155.66 9.93-233.67 11.67-57.49 2.56-115.05-.19-172.57 1.58-121.28.91-243.17 1.88-363.69-13.33-12.51-2.64-25.8-2.92-37.77-7.45-30.66-21.42 26.02-21.53 38.52-19.26 359.95 29.05 364.68 27.36 638.24 17.85 121-3.78 241.22-19.21 426.76-41.46 4.72-.65 9.18 3.56 8.45 8.36a941.74 941.74 0 0 0 54.29-9.21c9.33-2.33 18.7-4.56 27.95-7.19a7.59 7.59 0 0 1 9.23 5.24Z"></path>
          </svg>
           
        </h1>

        <p>
          Join the conversation in our real-time chat box, where every club gets
          a vibrant space to share ideas—just remember to not spread bad or
          misleading info, because we’re keeping the chat fun and friendly!
        </p>
      </div>
      <br />
      <div className="whiteBgBox">
        <div className="chatContainer">
          <div className="receivedMsg">
            <div className="imgPart">
              <img
                src="https://lh3.googleusercontent.com/a/ACg8ocIiyyS-J8QIYD7ri4PD6BLtOHgz9UPsDhHwZ5w-l21XT-3SBVVA=s96-c"
                alt=""
              />
            </div>
            <div className="textPart">
              <div className="userDetail">
                <h6>Adil Dyer</h6>
                <h6 style={{ opacity: "0.5" }}>Btech-Mtech Cybersecurity</h6>
              </div>
              <div className="messageDetail">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                recusandae, nemo explicabo delectus molestiae asperiores amet
                maxime culpa velit illo deleniti ad rem magni ea eos quaerat.
                Earum, laboriosam autem.
              </div>
            </div>
          </div>
          <div className="receivedMsg">
            <div className="imgPart">
              <img
                src="https://lh3.googleusercontent.com/a/ACg8ocIiyyS-J8QIYD7ri4PD6BLtOHgz9UPsDhHwZ5w-l21XT-3SBVVA=s96-c"
                alt=""
              />
            </div>
            <div className="textPart">
              <div className="userDetail">
                <h6>Adil Dyer</h6>
                <h6 style={{ opacity: "0.5" }}>Btech-Mtech Cybersecurity</h6>
              </div>
              <div className="messageDetail">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                recusandae, nemo explicabo delectus molestiae asperiores amet
                maxime culpa velit illo deleniti ad rem magni ea eos quaerat.
                Earum, laboriosam autem.
              </div>
            </div>
          </div>{" "}
          <div className="sentMsg">
            <div className="textPart">
              <div className="userDetail">
                <h6>Adil Dyer</h6>
                <h6 style={{ opacity: "0.5" }}>Btech-Mtech Cybersecurity</h6>
              </div>
              <div className="messageDetail">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                recusandae, nemo explicabo delectus molestiae asperiores amet
                maxime culpa velit illo deleniti ad rem magni ea eos quaerat.
                Earum, laboriosam autem.
              </div>
            </div>
            <div className="imgPart">
              <img
                src="https://lh3.googleusercontent.com/a/ACg8ocIiyyS-J8QIYD7ri4PD6BLtOHgz9UPsDhHwZ5w-l21XT-3SBVVA=s96-c"
                alt=""
              />
            </div>
          </div>
          <div className="receivedMsg">
            <div className="imgPart">
              <img
                src="https://lh3.googleusercontent.com/a/ACg8ocIiyyS-J8QIYD7ri4PD6BLtOHgz9UPsDhHwZ5w-l21XT-3SBVVA=s96-c"
                alt=""
              />
            </div>
            <div className="textPart">
              <div className="userDetail">
                <h6>Adil Dyer</h6>
                <h6 style={{ opacity: "0.5" }}>Btech-Mtech Cybersecurity</h6>
              </div>
              <div className="messageDetail">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                recusandae, nemo explicabo delectus molestiae asperiores amet
                maxime culpa velit illo deleniti ad rem magni ea eos quaerat.
                Earum, laboriosam autem.
              </div>
            </div>
          </div>{" "}
          <div className="receivedMsg">
            <div className="imgPart">
              <img
                src="https://lh3.googleusercontent.com/a/ACg8ocIiyyS-J8QIYD7ri4PD6BLtOHgz9UPsDhHwZ5w-l21XT-3SBVVA=s96-c"
                alt=""
              />
            </div>
            <div className="textPart">
              <div className="userDetail">
                <h6>Adil Dyer</h6>
                <h6 style={{ opacity: "0.5" }}>Btech-Mtech Cybersecurity</h6>
              </div>
              <div className="messageDetail">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                recusandae, nemo explicabo delectus molestiae asperiores amet
                maxime culpa velit illo deleniti ad rem magni ea eos quaerat.
                Earum, laboriosam autem.
              </div>
            </div>
          </div>
          <div className="sentMsg">
            <div className="textPart">
              <div className="userDetail">
                <h6>Adil Dyer</h6>
                <h6 style={{ opacity: "0.5" }}>Btech-Mtech Cybersecurity</h6>
              </div>
              <div className="messageDetail">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                recusandae, nemo explicabo delectus molestiae asperiores amet
                maxime culpa velit illo deleniti ad rem magni ea eos quaerat.
                Earum, laboriosam autem.
              </div>
            </div>
            <div className="imgPart">
              <img
                src="https://lh3.googleusercontent.com/a/ACg8ocIiyyS-J8QIYD7ri4PD6BLtOHgz9UPsDhHwZ5w-l21XT-3SBVVA=s96-c"
                alt=""
              />
            </div>
          </div>
          <div className="receivedMsg">
            <div className="imgPart">
              <img
                src="https://lh3.googleusercontent.com/a/ACg8ocIiyyS-J8QIYD7ri4PD6BLtOHgz9UPsDhHwZ5w-l21XT-3SBVVA=s96-c"
                alt=""
              />
            </div>
            <div className="textPart">
              <div className="userDetail">
                <h6>Adil Dyer</h6>
                <h6 style={{ opacity: "0.5" }}>Btech-Mtech Cybersecurity</h6>
              </div>
              <div className="messageDetail">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                recusandae, nemo explicabo delectus molestiae asperiores amet
                maxime culpa velit illo deleniti ad rem magni ea eos quaerat.
                Earum, laboriosam autem.
              </div>
            </div>
          </div>{" "}
          <div className="receivedMsg">
            <div className="imgPart">
              <img
                src="https://lh3.googleusercontent.com/a/ACg8ocIiyyS-J8QIYD7ri4PD6BLtOHgz9UPsDhHwZ5w-l21XT-3SBVVA=s96-c"
                alt=""
              />
            </div>
            <div className="textPart">
              <div className="userDetail">
                <h6>Adil Dyer</h6>
                <h6 style={{ opacity: "0.5" }}>Btech-Mtech Cybersecurity</h6>
              </div>
              <div className="messageDetail">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                recusandae, nemo explicabo delectus molestiae asperiores amet
                maxime culpa velit illo deleniti ad rem magni ea eos quaerat.
                Earum, laboriosam autem.
              </div>
            </div>
          </div>{" "}
          <div className="sentMsg">
            <div className="textPart">
              <div className="userDetail">
                <h6>Adil Dyer</h6>
                <h6 style={{ opacity: "0.5" }}>Btech-Mtech Cybersecurity</h6>
              </div>
              <div className="messageDetail">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                recusandae, nemo explicabo delectus molestiae asperiores amet
                maxime culpa velit illo deleniti ad rem magni ea eos quaerat.
                Earum, laboriosam autem.
              </div>
            </div>
            <div className="imgPart">
              <img
                src="https://lh3.googleusercontent.com/a/ACg8ocIiyyS-J8QIYD7ri4PD6BLtOHgz9UPsDhHwZ5w-l21XT-3SBVVA=s96-c"
                alt=""
              />
            </div>
          </div>
          {messages?.map((message, index) => {
            if (message.sent) {
              return (
                <div className="sentMsg">
                  <div className="textPart">
                    <div className="userDetail">
                      <h6>{message.user}</h6>
                      <h6 style={{ opacity: "0.5" }}>{message.course}</h6>
                    </div>
                    <div className="messageDetail">{message.message}</div>
                  </div>
                  <div className="imgPart">
                    <img src={message.image} alt="" />
                  </div>
                </div>
              );
            } else {
              return (
                <div className="receivedMsg" key={index}>
                  <div className="imgPart">
                    <img src={message.image} alt="" />
                  </div>
                  <div className="textPart">
                    <div className="userDetail">
                      <h6>{message.user}</h6>
                      <h6 style={{ opacity: "0.5" }}>{message.course}</h6>
                    </div>
                    <div className="messageDetail">{message.message}</div>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div className="writeContainer">
          <Form onSubmit={handleSendingMessage}>
            <Form.Control
              placeholder="Send your message..."
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
          </Form>
          <Button className="chatButton" type="submit">
            <i class="fa-solid fa-paper-plane"></i>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ThirdCover;
