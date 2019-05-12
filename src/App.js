import React, { Component } from "react";
import { Provider } from "react-redux";
// applyMiddleware - used to apply the redux-thunk middleware
import { createStore, applyMiddleware } from "redux";
// need to install thunk here to be able to use inside action creators
import ReduxThunk from "redux-thunk";
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
    // second parameter is for any initial state
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
