import React from "react";

//redux
import store from "./redux/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <div>hello</div>
    </Provider>
  );
};

export default App;
