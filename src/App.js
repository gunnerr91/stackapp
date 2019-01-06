import React from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers/Index";
import Header from "./components/shared/Header";

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View>
        <Header header="Stack app" />
      </View>
    </Provider>
  );
};

export default App;
