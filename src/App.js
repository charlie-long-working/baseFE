import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import AuthRoutes from './routes/AuthRoutes';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AuthRoutes />
      </Router>
    </Provider>
  );
}

export default App;
