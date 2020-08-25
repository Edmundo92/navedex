import React from "react";
import Root from "./pages/Root";

import { store } from "./store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <BrowserRouter>
          <Root />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
