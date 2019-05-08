import React, { Component } from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";
import firebase from "firebase";

import LoginForm from "./components/LoginForm";

class App extends Component {
  componentDidMount() {
    const firebaseConfig = {
      apiKey: "AIzaSyB-krLk29gHSlqmsMbfRJX7zRv7la9s4sM",
      authDomain: "manager-e14f6.firebaseapp.com",
      databaseURL: "https://manager-e14f6.firebaseio.com",
      projectId: "manager-e14f6",
      storageBucket: "manager-e14f6.appspot.com",
      messagingSenderId: "374742874556",
      appId: "1:374742874556:web:a7c06bd37a1164a9"
    };

    firebase.initializeApp(firebaseConfig);
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
