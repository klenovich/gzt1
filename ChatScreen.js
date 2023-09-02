import React, { useState } from "react";
import { Button, TextInput, View, Text } from "react-native";

const ChatScreen = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSendMessage = async () => {
    if (message.trim().length > 0) {
      setMessages([...messages, { user: 'User', text: message }]);
      
      const gpt3Response = await getGpt3Response(message);
      setMessages([...messages, { user: 'GPT-3', text: gpt3Response }]);
      setMessage("");
    }
  };

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
    </View>
  );
};

export default ChatScreen;