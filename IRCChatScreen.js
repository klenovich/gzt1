import React, { useState } from "react";
import { Button, TextInput, View, Text } from "react-native";
import { useSelector } from "react-redux";

const IRCChatScreen = () => {
  const username = useSelector((state) => state.user.userName);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    if (message.trim().length > 0) {
      setMessages([...messages, { user: username, text: message }]);
      setMessage("");
    }
  };

  // SImulating receive message from the server 
  // You can replace this with actual IRC server interaction
  const handleReceiveMessage = () => {
    setMessages([
      ...messages,
      { user: "chatBot", text: `Hello, ${username}! How may I help you today?` },
    ]);
  }

  return (
    <View>
      {messages.map((msg, index) => (
        <Text key={index}>
          {msg.user}: {msg.text}
        </Text>
      ))}
      <TextInput
        placeholder="Type your message here"
        value={message}
        onChangeText={setMessage}
      />
      <Button title="Send Message" onPress={handleSendMessage} />
      
      {/* A button to simulate receiving message from the server */}
      <Button title="Receive Message" onPress={handleReceiveMessage} />
    </View>
  );
};

export default IRCChatScreen;