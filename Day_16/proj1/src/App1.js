import React from "react";
import store from "./Redux/Store";
import MainComponent from "./Redux/MainComponent";
import { Provider } from "react-redux";

const App1 = () => {
  return (
    <div>
      <Provider store={store}>
        <MainComponent />
      </Provider>
    </div>
  );
};

export default App1;
