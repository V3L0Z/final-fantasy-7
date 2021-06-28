import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const reducer = (state, action) => {

  switch (action.type) {
      case "Potion":
          state = state + 800;
          if ( state >= 6003) {
            state = 6003
          }
          break;
      default:
          state = 0    
  }
  return state;
};

const store = createStore(reducer, 0);

store.subscribe(() => {
  console.log("Store updated!", store.getState());
});

store.dispatch({
  type: "Potion",
  payload: 200
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
