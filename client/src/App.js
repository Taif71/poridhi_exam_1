
import React, {Component} from 'react';
import { Route, Routes } from "react-router";
import HomePage from './pages/homepage';
import SignUpPage from './pages/signuppage';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Routes>
          <Route exact path='/' element={<HomePage/>} />
          <Route exact path='/signup' element={<SignUpPage />} />
        </Routes>
      </div>
    )
  }
}

export default App;
