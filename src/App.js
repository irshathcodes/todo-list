import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Todo from "./components/Todo";
import "./components/styles.css";
const App = () => {
  return (
    <>
      <React.StrictMode>
        <Provider store={store}>
          <Todo />
        </Provider>
      </React.StrictMode>
    </>
  );
};

export default App;
