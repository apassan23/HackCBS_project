import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Index from './components/Index';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Index />
      </Router>
    );
  }
}

export default App;
