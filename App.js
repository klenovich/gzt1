import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { configureStore } from "@reduxjs/toolkit";
import userReducer, { register } from "./UserSlice";
import RegistrationScreen from "./RegistrationScreen";
import IRCChatScreen from "./IRCChatScreen";

const Stack = createStackNavigator();

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Register">
          <Stack.Screen
            name="Register"
            component={RegistrationScreen}
            options={{ title: 'Registration' }}
          />
          <Stack.Screen
            name="ChatScreen"
            component={IRCChatScreen}
            options={{ title: 'Chat' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;